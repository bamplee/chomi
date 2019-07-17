package com.bamplee.chomi.api.application;

import com.bamplee.chomi.api.application.RouteResponse.Path.SubPathInfo;
import com.bamplee.chomi.api.application.RouteResponse.Path.SubPathInfo.ParkingRouteInfo;
import com.bamplee.chomi.api.datatool.naver.NaverMapsClient;
import com.bamplee.chomi.api.datatool.naver.dto.NaverMapsDirectionDrivingResponse;
import com.bamplee.chomi.api.datatool.naver.dto.NaverMapsGcResponse;
import com.bamplee.chomi.api.datatool.odsay.OdSayClient;
import com.bamplee.chomi.api.datatool.odsay.dto.OdSaySearchPubTransPathResponse;
import com.bamplee.chomi.api.datatool.odsay.dto.OdSaySearchPubTransPathResponse.Result.Path;
import com.bamplee.chomi.api.datatool.odsay.dto.OdSaySearchPubTransPathResponse.Result.Path.SubPath;
import com.bamplee.chomi.api.infrastructure.persistence.jpa.entity.BikeParkingInfo;
import com.bamplee.chomi.api.infrastructure.persistence.jpa.entity.ParkingInfo;
import com.google.common.collect.Lists;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static com.bamplee.chomi.api.application.RouteResponse.Path.SubPathInfo.*;

@Service
public class RouteServiceImpl implements RouteService {
    @Value("${odsay.key}")
    String apiKey;
    private final ParkingSyncService parkingSyncService;
    private final BikeParkingSyncService bikeParkingSyncService;
    private final NaverMapsClient naverMapsClient;
    private final OdSayClient odSayClient;

    public RouteServiceImpl(ParkingSyncService parkingSyncService,
                            BikeParkingSyncService bikeParkingSyncService,
                            NaverMapsClient naverMapsClient,
                            OdSayClient odSayClient) {
        this.parkingSyncService = parkingSyncService;
        this.bikeParkingSyncService = bikeParkingSyncService;
        this.naverMapsClient = naverMapsClient;
        this.odSayClient = odSayClient;
    }

    @Override
    public RouteResponse route(String departureX, String departureY, String destinationX, String destinationY) {
        // 대중교통 경로부터 찾기
        OdSaySearchPubTransPathResponse searchPubTransPath = this.getSearchPubTransPath(departureX,
                                                                                        departureY,
                                                                                        destinationX,
                                                                                        destinationY);
        List<RouteResponse.Path> pathList = Lists.newArrayList();
        for (Path p : searchPubTransPath.getResult()
                                        .getPathList()) {
            List<SubPathInfo> tempList = Lists.newArrayList();
            RouteResponse.Path routeResponse = new RouteResponse.Path();
            routeResponse.setInfo(p.getInfo());
            routeResponse.setPathType(p.getPathType());
            List<SubPath> subPathList = p.getSubPathList();
            for (SubPath subPath : subPathList) {
                if (subPath.getTrafficType() == 3) {
                    SubPathInfo subPathInfo = new SubPathInfo();
                    subPathInfo.setSubPath(subPath);
                    tempList.add(subPathInfo);
                } else {
                    SubPathInfo subPathInfo = new SubPathInfo();
                    subPathInfo.setSubPath(subPath);
                    this.getParkingRouteInfo(Double.valueOf(departureX), Double.valueOf(departureY), subPath.getStartX(), subPath.getStartY()).ifPresent(subPathInfo::setParkingRouteInfo);
                    this.getBikeParkingRouteInfo(subPath.getStartX(), subPath.getStartY(), subPath.getEndX(), subPath.getEndY()).ifPresent(subPathInfo::setBikeParkingRouteInfo);
                    tempList.add(subPathInfo);
                }
            }
            routeResponse.setSubPathList(tempList);
            pathList.add(routeResponse);
        }
/*
        pathList = pathList.stream()
                           .filter(x -> x.getSubPathList()
                                         .stream()
                                         .map(y -> y.getParkingRouteInfoList()
                                                    .size())
                                         .reduce(Integer::sum)
                                         .orElse(0) > 0
                           )
                           .collect(Collectors.toList());
*/
        String start = departureX + "," + departureY;
        String goal = destinationX + "," + destinationY;
        NaverMapsDirectionDrivingResponse directionDrivingResponse = naverMapsClient.direction5Driving(start, goal, "t");
        RouteResponse routeResponse = new RouteResponse();
        routeResponse.setPathList(pathList);
        routeResponse.setDriveRoute(directionDrivingResponse);
        return routeResponse;
    }

    private Optional<BikeParkingRouteInfo> getBikeParkingRouteInfo(Double startX, Double startY, Double endX, Double endY) {
        List<BikeParkingInfo> bikeParkingInfoList = bikeParkingSyncService.getBikeParkingInfoList();
        NaverMapsGcResponse startGeocode = this.getGeocode(startX, startY);
        NaverMapsGcResponse endGeocode = this.getGeocode(endX, endY);
        List<BikeParkingInfo> startBikeParkingInfoList = bikeParkingInfoList.stream()
                                                                            .filter(bikeParkingInfo -> this.isMatchDongName(bikeParkingInfo,
                                                                                                                            startGeocode.getResults()[0].getRegion()))
                                                                            .sorted(Comparator.comparing(x -> distance(
                                                                                startX,
                                                                                startY,
                                                                                x.getStationLongitude(),
                                                                                x.getStationLatitude())))
                                                                            .collect(Collectors.toList());
        List<BikeParkingInfo> endBikeParkingInfoList = bikeParkingInfoList.stream()
                                                                          .filter(bikeParkingInfo -> this.isMatchDongName(bikeParkingInfo,
                                                                                                                          endGeocode.getResults()[0].getRegion()))
                                                                          .sorted(Comparator.comparing(x -> distance(
                                                                              startX,
                                                                              startY,
                                                                              x.getStationLongitude(),
                                                                              x.getStationLatitude())))
                                                                          .collect(Collectors.toList());
        if(startBikeParkingInfoList.size() > 0 && endBikeParkingInfoList.size() > 0) {
            BikeParkingInfo startBikeParkingInfo = startBikeParkingInfoList.stream()
                                                                      .findFirst()
                                                                      .get();
            BikeParkingInfo endBikeParkingInfo = endBikeParkingInfoList.stream()
                                                                    .findFirst()
                                                                    .get();
            BikeParkingRouteInfo bikeParkingRouteInfo = new BikeParkingRouteInfo();
            bikeParkingRouteInfo.setStartBikeParkingInfo(startBikeParkingInfo);
            bikeParkingRouteInfo.setEndBikeParkingInfo(endBikeParkingInfo);
            bikeParkingRouteInfo.setSubPathRoute(this.getDirection5Driving(String.valueOf(startBikeParkingInfo.getStationLongitude()),
                                                                                          String.valueOf(startBikeParkingInfo.getStationLatitude()),
                                                                                          String.valueOf(endBikeParkingInfo.getStationLongitude()),
                                                                                          String.valueOf(endBikeParkingInfo.getStationLatitude())));
            return Optional.of(bikeParkingRouteInfo);
        }
        return Optional.empty();
    }

    private Optional<ParkingRouteInfo> getParkingRouteInfo(Double startX, Double startY, Double endX, Double endY) {
        List<ParkingInfo> parkingInfoList = parkingSyncService.getParkingInfoList();
        NaverMapsGcResponse geocode = this.getGeocode(endX, endY);
        return parkingInfoList.stream()
                              .filter(parkingInfo -> this.isMatchDongName(parkingInfo,
                                                                          geocode.getResults()[0]
                                                                              .getRegion()))
                              .sorted(Comparator.comparing(x -> distance(
                                  endX,
                                  endY,
                                  x.getLng(),
                                  x.getLat())))
                              .map(x -> {
                                  ParkingRouteInfo parkingRouteInfo =
                                      new ParkingRouteInfo();
                                  parkingRouteInfo.setSubPathRoute(this.getDirection5Driving(
                                      String.valueOf(startX),
                                      String.valueOf(startY),
                                      String.valueOf(x.getLng()),
                                      String.valueOf(x.getLat())));
                                  parkingRouteInfo.setParkingInfo(x);
                                  return parkingRouteInfo;
                              })
                              .findFirst();
    }

    private List<ParkingInfo> transform(NaverMapsGcResponse.Result.Region region) {
        List<ParkingInfo> result = parkingSyncService.getParkingInfoList()
                                                     .stream()
                                                     .filter(parkingInfo -> this.isMatchDongName(parkingInfo, region))
                                                     .collect(Collectors.toList());
        return result;
    }

    private Boolean isMatchDongName(ParkingInfo parkingInfo, NaverMapsGcResponse.Result.Region region) {
        return parkingInfo.getSidoName()
                          .equals(region.getArea1()
                                        .getName())
            && parkingInfo.getGunguName()
                          .equals(region.getArea2()
                                        .getName())
            && parkingInfo.getDongName()
                          .equals(region.getArea3()
                                        .getName());
    }

    private Boolean isMatchDongName(BikeParkingInfo bikeParkingInfo, NaverMapsGcResponse.Result.Region region) {
        return bikeParkingInfo.getSidoName()
                          .equals(region.getArea1()
                                        .getName())
            && bikeParkingInfo.getGunguName()
                          .equals(region.getArea2()
                                        .getName())
            && bikeParkingInfo.getDongName()
                          .equals(region.getArea3()
                                        .getName());
    }

    private Boolean isMatchGunguName(ParkingInfo parkingInfo, NaverMapsGcResponse.Result.Region region) {
        return parkingInfo.getSidoName()
                          .equals(region.getArea1()
                                        .getName())
            && parkingInfo.getGunguName()
                          .equals(region.getArea2()
                                        .getName());
    }

    OdSaySearchPubTransPathResponse getSearchPubTransPath(String startX, String startY, String endX, String endY) {
        return odSayClient.searchPubTransPath(apiKey,
                                              startX,
                                              startY,
                                              endX,
                                              endY,
                                              "0",
                                              "0",
                                              "0");
    }

    private NaverMapsGcResponse getGeocode(Double lng, Double lat) {
        String coords = lng + "," + lat;
        return naverMapsClient.gc(coords,
                                  null,
                                  null,
                                  null,
                                  null,
                                  "json");
    }

    private NaverMapsDirectionDrivingResponse getDirection5Driving(String startX, String startY, String endX, String endY) {
        return naverMapsClient.direction5Driving(StringUtils.join(startX, ",", startY), StringUtils.join(endX, ",", endY), "t");
    }

    private static double distance(double lon1, double lat1, double lon2, double lat2) {
        double theta = lon1 - lon2;
        double dist = Math.sin(deg2rad(lat1)) * Math.sin(deg2rad(lat2)) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.cos(
            deg2rad(theta));
        dist = Math.acos(dist);
        dist = rad2deg(dist);
        dist = dist * 1.609344;
        return (dist);
    }

    // This function converts decimal degrees to radians
    private static double deg2rad(double deg) {
        return (deg * Math.PI / 180.0);
    }

    // This function converts radians to decimal degrees
    private static double rad2deg(double rad) {
        return (rad * 180 / Math.PI);
    }
}
