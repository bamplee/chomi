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
import com.bamplee.chomi.api.datatool.openweathermap.OpenWeatherMapClient;
import com.bamplee.chomi.api.datatool.openweathermap.dto.ForecastResponse;
import com.bamplee.chomi.api.datatool.seoul.SeoulOpenApiClient;
import com.bamplee.chomi.api.infrastructure.persistence.jpa.entity.BikeParkingInfo;
import com.bamplee.chomi.api.infrastructure.persistence.jpa.entity.ParkingInfo;
import com.google.common.collect.Lists;
import org.apache.commons.lang.ObjectUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static com.bamplee.chomi.api.application.RouteResponse.Path.SubPathInfo.*;

@Service
public class RouteServiceImpl implements RouteService {
    @Value("${odsay.key}")
    String apiKey;
    @Value("${openweathermap.key}")
    String openWeatherApiKey;
    @Value("${seoul-openapi.key}")
    String seoulOpenApiKey;

    private final ParkingSyncService parkingSyncService;
    private final BikeParkingSyncService bikeParkingSyncService;
    private final NaverMapsClient naverMapsClient;
    private final OdSayClient odSayClient;
    private final OpenWeatherMapClient openWeatherMapClient;
    private final SeoulOpenApiClient seoulOpenApiClient;

    public RouteServiceImpl(ParkingSyncService parkingSyncService,
                            BikeParkingSyncService bikeParkingSyncService,
                            NaverMapsClient naverMapsClient,
                            OdSayClient odSayClient,
                            OpenWeatherMapClient openWeatherMapClient,
                            SeoulOpenApiClient seoulOpenApiClient) {
        this.parkingSyncService = parkingSyncService;
        this.bikeParkingSyncService = bikeParkingSyncService;
        this.naverMapsClient = naverMapsClient;
        this.odSayClient = odSayClient;
        this.openWeatherMapClient = openWeatherMapClient;
        this.seoulOpenApiClient = seoulOpenApiClient;
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
            // 결과 종류, 1-지하철, 2-버스, 3-버스+지하철
/*
            if(p.getPathType() == 1) {
                useSubway = true;
            }
            else if(p.getPathType() == 2) {
                useBus = true;
            }
            else if(p.getPathType() == 3) {
                useSubway = true;
                useBus = true;
            }
*/
            List<SubPathInfo> tempList = Lists.newArrayList();
            RouteResponse.Path routeResponse = new RouteResponse.Path();
            routeResponse.setInfo(p.getInfo());
            routeResponse.setPathType(p.getPathType());
            List<SubPath> subPathList = p.getSubPathList();
            for (SubPath subPath : subPathList) {
                SubPathInfo subPathInfo = new SubPathInfo();
                subPathInfo.setSubPath(subPath);
                tempList.add(subPathInfo);
            }
            routeResponse.setSubPathList(tempList);
            pathList.add(routeResponse);
        }

        List<RouteResponse.Path> parkingRouteList = pathList.stream().map(x -> {
            Boolean isChecked = false;
            RouteResponse.Path path = new RouteResponse.Path();
            List<SubPathInfo> tempList = Lists.newArrayList();
            for (SubPathInfo originSubPathInfo : x.getSubPathList()) {
                SubPathInfo subPathInfo = new SubPathInfo();
                SubPath originSubPath = originSubPathInfo.getSubPath();
                if (originSubPath.getTrafficType() != 3 && !isChecked && !originSubPath.getStartX().equals(originSubPath.getEndX()) && !originSubPath.getStartY().equals(originSubPath.getEndY())) {
                    Optional<ParkingRouteInfo> parkingRouteInfo = this.getParkingRouteInfo(Double.valueOf(departureX),
                                                                                           Double.valueOf(departureY),
                                                                                           originSubPath.getEndX(),
                                                                                           originSubPath.getEndY());
                    if (parkingRouteInfo.isPresent()) {
                        subPathInfo.setParkingRouteInfo(parkingRouteInfo.get());
                        isChecked = true;
                        tempList = Lists.newArrayList();
                    }
                }
                subPathInfo.setSubPath(originSubPath);
                tempList.add(subPathInfo);
            }
            if (isChecked) {
                Integer duration = tempList.stream().map(y -> {
                    if (y.getParkingRouteInfo() == null) {
                        return y.getSubPath().getSectionTime();
                    } else {
                        if (y.getParkingRouteInfo()
                             .getSubPathRoute().getCode() == 1) {
                            return 0;
                        }
                        Integer sum = (y.getParkingRouteInfo()
                                        .getSubPathRoute()
                                        .getRoute()
                                        .getOrDefault("traoptimal", Lists.newArrayList())
                                        .get(0).getSummary().getDuration() / 1000) / 60;
                        y.getParkingRouteInfo().setTotalTime(sum);
                        return sum;
                    }
                }).reduce((a, b) -> a + b).orElse(0);
                OdSaySearchPubTransPathResponse.Result.Info info = new OdSaySearchPubTransPathResponse.Result.Info();
                info.setTotalStationCount(x.getInfo().getTotalStationCount());
                info.setBusStationCount(x.getInfo().getBusStationCount());
                info.setBusTransitCount(x.getInfo().getBusTransitCount());
                info.setSubwayStationCount(x.getInfo().getSubwayStationCount());
                info.setSubwayTransitCount(x.getInfo().getSubwayTransitCount());
                info.setTotalTime(duration);
                info.setMapObj(x.getInfo().getMapObj());
                info.setPayment(x.getInfo().getPayment());
                path.setUseBus(x.getUseBus());
                path.setUseSubway(x.getUseSubway());
                path.setInfo(info);
                path.setPathType(x.getPathType());
                path.setSubPathList(tempList.stream().peek(y -> {
                    if (y.getParkingRouteInfo() != null) {
                        y.setSubPath(null);
                    }
                }).collect(Collectors.toList()));
                return path;
            } else {
                return null;
            }
        }).collect(Collectors.toList());

        List<RouteResponse.Path> bikeParkingRouteList = pathList.stream().map(x -> {
            Boolean isChecked = false;
            RouteResponse.Path path = new RouteResponse.Path();
            List<SubPathInfo> tempList = Lists.newArrayList();
            for (RouteResponse.Path.SubPathInfo originSubPathInfo : x.getSubPathList()) {
                SubPathInfo subPathInfo = new SubPathInfo();
                SubPath originSubPath = originSubPathInfo.getSubPath();
                if (originSubPath.getTrafficType() != 3 && !isChecked && !originSubPath.getStartX().equals(originSubPath.getEndX()) && !originSubPath.getStartY().equals(originSubPath.getEndY())) {
                    Optional<BikeParkingRouteInfo> bikeParkingRouteInfo = this.getBikeParkingRouteInfo(originSubPath.getStartX(),
                                                                                                       originSubPath.getStartY(),
                                                                                                       originSubPath.getEndX(),
                                                                                                       originSubPath.getEndY());
                    if (bikeParkingRouteInfo.isPresent()) {
                        subPathInfo.setBikeParkingRouteInfo(bikeParkingRouteInfo.get());
                        isChecked = true;
                    }
                }
                subPathInfo.setSubPath(originSubPath);
                tempList.add(subPathInfo);
            }
            if (isChecked) {
                Integer duration = tempList.stream().map(y -> {
                    if (y.getBikeParkingRouteInfo() == null) {
                        return y.getSubPath().getSectionTime();
                    } else {
                        if (y.getBikeParkingRouteInfo()
                             .getSubPathRoute().getCode() == 1) {
                            return 0;
                        }
                        Integer sum = (y.getBikeParkingRouteInfo()
                                        .getSubPathRoute()
                                        .getRoute()
                                        .getOrDefault("traoptimal", Lists.newArrayList())
                                        .get(0)
                                        .getSummary().getDuration() / 1000) / 20;
                        y.getBikeParkingRouteInfo().setTotalTime(sum);
                        return sum;
                    }
                }).reduce((a, b) -> (int) a + (int) b).orElse(0);
                OdSaySearchPubTransPathResponse.Result.Info info = new OdSaySearchPubTransPathResponse.Result.Info();
                info.setTotalStationCount(x.getInfo().getTotalStationCount());
                info.setBusStationCount(x.getInfo().getBusStationCount());
                info.setBusTransitCount(x.getInfo().getBusTransitCount());
                info.setSubwayStationCount(x.getInfo().getSubwayStationCount());
                info.setSubwayTransitCount(x.getInfo().getSubwayTransitCount());
                info.setTotalTime(duration);
                info.setMapObj(x.getInfo().getMapObj());
                info.setPayment(x.getInfo().getPayment());
                path.setUseBus(x.getUseBus());
                path.setUseSubway(x.getUseSubway());
                path.setInfo(info);
                path.setPathType(x.getPathType());
                path.setSubPathList(tempList.stream().peek(y -> {
                    if (y.getBikeParkingRouteInfo() != null) {
                        y.setSubPath(null);
                    }
                }).collect(Collectors.toList()));
                return path;
            } else {
                return null;
            }
        }).collect(Collectors.toList());

        pathList = Stream.concat(Stream.concat(pathList.stream(), parkingRouteList.stream()), bikeParkingRouteList.stream())
                         .filter(Objects::nonNull)
                         .peek(x -> {
                             x.setUseBus(x.getSubPathList().stream().anyMatch(y -> y.getSubPath() != null && y.getSubPath()
                                                                                                              .getTrafficType() == 2));
                             x.setUseSubway(x.getSubPathList().stream().anyMatch(y -> y.getSubPath() != null && y.getSubPath()
                                                                                                                 .getTrafficType() == 1));
                             x.setUseBike(x.getSubPathList().stream().anyMatch(y -> y.getBikeParkingRouteInfo() != null));
                             x.setUseCar(x.getSubPathList().stream().anyMatch(y -> y.getParkingRouteInfo() != null));
                         })
                         .filter(x -> !(!x.getUseBus() && !x.getUseSubway() && !x.getUseBike() && x.getUseCar()))
                         .collect(Collectors.toList());
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
        ForecastResponse forecast = openWeatherMapClient.forecast(openWeatherApiKey, departureY, departureX);
        RouteResponse routeResponse = new RouteResponse();
        routeResponse.setPathList(pathList);
        routeResponse.setDriveRoute(directionDrivingResponse);
        Arrays.stream(seoulOpenApiClient.forecastWarningMinuteParticleOfDustService(seoulOpenApiKey, "1", "1000").getData().getRow())
              .findFirst()
              .ifPresent(
                  routeResponse::setForecastWarning);
        forecast.getList()
                .stream()
                .filter(x -> LocalDateTime.now()
                                          .isAfter(LocalDateTime.parse(x.getDtTxt(),
                                                                       DateTimeFormatter.ofPattern(
                                                                           "yyyy-MM-dd HH:mm:ss"))))
                .min((a, b) -> b.getDt().compareTo(a.getDt()))
                .ifPresent(routeResponse::setForecast);
        return routeResponse;
    }

    private Optional<BikeParkingRouteInfo> getBikeParkingRouteInfo(Double startX, Double startY, Double endX, Double endY) {
        List<BikeParkingInfo> bikeParkingInfoList = bikeParkingSyncService.getBikeParkingInfoList();
        NaverMapsGcResponse startGeocode = this.getGeocode(startX, startY);
        NaverMapsGcResponse endGeocode = this.getGeocode(endX, endY);
        List<BikeParkingInfo> startBikeParkingInfoList = bikeParkingInfoList.stream()
                                                                            .filter(bikeParkingInfo -> this.isMatchDongName(bikeParkingInfo,
                                                                                                                            startGeocode.getResults()[0]
                                                                                                                                .getRegion()))
                                                                            .sorted(Comparator.comparing(x -> distance(
                                                                                startX,
                                                                                startY,
                                                                                x.getStationLongitude(),
                                                                                x.getStationLatitude())))
                                                                            .collect(Collectors.toList());
        List<BikeParkingInfo> endBikeParkingInfoList = bikeParkingInfoList.stream()
                                                                          .filter(bikeParkingInfo -> this.isMatchDongName(bikeParkingInfo,
                                                                                                                          endGeocode.getResults()[0]
                                                                                                                              .getRegion()))
                                                                          .sorted(Comparator.comparing(x -> distance(
                                                                              startX,
                                                                              startY,
                                                                              x.getStationLongitude(),
                                                                              x.getStationLatitude())))
                                                                          .collect(Collectors.toList());
        if (startBikeParkingInfoList.size() > 0 && endBikeParkingInfoList.size() > 0) {
            BikeParkingInfo startBikeParkingInfo = startBikeParkingInfoList.stream()
                                                                           .findFirst()
                                                                           .get();
            BikeParkingInfo endBikeParkingInfo = endBikeParkingInfoList.stream()
                                                                       .findFirst()
                                                                       .get();
            if(startBikeParkingInfo.getStationName().equals(endBikeParkingInfo.getStationName())) {
                return Optional.empty();
            }
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
