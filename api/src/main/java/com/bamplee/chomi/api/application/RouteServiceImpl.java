package com.bamplee.chomi.api.application;

import com.bamplee.chomi.api.application.RouteResponse.Path.SubPathInfo;
import com.bamplee.chomi.api.datatool.naver.NaverMapsClient;
import com.bamplee.chomi.api.datatool.naver.dto.NaverMapsDirectionDrivingResponse;
import com.bamplee.chomi.api.datatool.naver.dto.NaverMapsGcResponse;
import com.bamplee.chomi.api.datatool.odsay.OdSayClient;
import com.bamplee.chomi.api.datatool.odsay.dto.OdSaySearchPubTransPathResponse;
import com.bamplee.chomi.api.datatool.odsay.dto.OdSaySearchPubTransPathResponse.Result.Path;
import com.bamplee.chomi.api.datatool.odsay.dto.OdSaySearchPubTransPathResponse.Result.Path.SubPath;
import com.bamplee.chomi.api.infrastructure.persistence.jpa.entity.ParkingInfo;
import com.google.common.collect.Lists;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.tuple.ImmutablePair;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class RouteServiceImpl implements RouteService {
    @Value("${odsay.key}")
    String apiKey;
    private final ParkingSyncService parkingSyncService;
    private final NaverMapsClient naverMapsClient;
    private final OdSayClient odSayClient;

    public RouteServiceImpl(ParkingSyncService parkingSyncService, NaverMapsClient naverMapsClient,
                            OdSayClient odSayClient) {
        this.parkingSyncService = parkingSyncService;
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
            List<SubPathInfo> tempList =
                Lists.newArrayList();
            RouteResponse.Path routeResponse = new RouteResponse.Path();
            routeResponse.setInfo(p.getInfo());
            routeResponse.setPathType(p.getPathType());
            List<SubPath> subPathList = p.getSubPathList();
            for (SubPath subPath : subPathList) {
                if (subPath.getTrafficType() == 3) {
                    SubPathInfo subPathInfo = new SubPathInfo();
                    subPathInfo.setSubPath(subPath);
                    subPathInfo.setParkingRouteInfoList(Lists.newArrayList());
                    tempList.add(subPathInfo);
                } else {
                    NaverMapsGcResponse geocode = this.getGeocode(subPath.getStartX(), subPath.getStartY());
                    List<SubPathInfo.ParkingRouteInfo> collect = this.transform(geocode.getResults()[0].getRegion())
                                                                     .stream()
                                                                     .filter(x -> x.getCurParking() == 1)
                                                                     .sorted(Comparator.comparing(x -> distance(
                                                                         subPath.getStartX(),
                                                                         subPath.getStartY(),
                                                                         x.getLng(),
                                                                         x.getLat())))
                                                                     .map(x -> {
                                                                         SubPathInfo.ParkingRouteInfo parkingRouteInfo =
                                                                             new SubPathInfo.ParkingRouteInfo();
                                                                         parkingRouteInfo.setSubPathRoute(this.getDirection5Driving(
                                                                             departureX,
                                                                             departureY,
                                                                             String.valueOf(x.getLng()),
                                                                             String.valueOf(x.getLat())));
                                                                         parkingRouteInfo.setParkingInfo(x);
                                                                         return parkingRouteInfo;
                                                                     })
                                                                     .collect(Collectors.toList());
                    SubPathInfo subPathInfo = new SubPathInfo();
                    subPathInfo.setSubPath(subPath);
                    subPathInfo.setParkingRouteInfoList(collect);
                    tempList.add(subPathInfo);
                }
            }
            routeResponse.setSubPathList(tempList);
            pathList.add(routeResponse);
        }
        pathList = pathList.stream()
                           .filter(x -> x.getSubPathList()
                                         .stream()
                                         .map(y -> y.getParkingRouteInfoList()
                                                    .size())
                                         .reduce(Integer::sum)
                                         .orElse(0) > 0
                           )
                           .collect(Collectors.toList());
        String start = departureX + "," + departureY;
        String goal = destinationX + "," + destinationY;
        NaverMapsDirectionDrivingResponse directionDrivingResponse = naverMapsClient.direction5Driving(start, goal, "t");
        RouteResponse routeResponse = new RouteResponse();
        routeResponse.setPathList(pathList);
        routeResponse.setDriveRoute(directionDrivingResponse);
        return routeResponse;
    }

    private List<ParkingInfo> transform(NaverMapsGcResponse.Result.Region region) {
        List<ParkingInfo> result = parkingSyncService.getParkingInfoList()
                                                     .stream()
                                                     .filter(parkingInfo -> this.isMatchGunguName(parkingInfo, region))
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
