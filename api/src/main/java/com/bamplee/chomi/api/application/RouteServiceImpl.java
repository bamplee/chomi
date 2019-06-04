package com.bamplee.chomi.api.application;

import com.bamplee.chomi.api.datatool.naver.NaverMapsClient;
import com.bamplee.chomi.api.datatool.naver.dto.NaverMapsGcResponse;
import com.bamplee.chomi.api.datatool.naver.dto.NavreMapsDirectionDrivingResponse;
import com.bamplee.chomi.api.infrastructure.persistence.jpa.entity.ParkingInfo;
import com.bamplee.chomi.api.infrastructure.persistence.jpa.repository.ParkingInfoRepository;
import com.google.common.collect.Lists;
import org.apache.commons.lang3.StringUtils;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Service
public class RouteServiceImpl implements RouteService {
    private static final String TRAOPTIMAL = "traoptimal";
    private final NaverMapsClient naverMapsClient;
    private final ParkingInfoRepository parkingInfoRepository;

    public RouteServiceImpl(NaverMapsClient naverMapsClient,
                            ParkingInfoRepository parkingInfoRepository) {
        this.naverMapsClient = naverMapsClient;
        this.parkingInfoRepository = parkingInfoRepository;
    }

    @Override
    public String route(Double departureX, Double departureY, Double destinationX, Double destinationY) {
        // 차량 경로 설정
        String start = departureX + "," + departureY;
        String goal = destinationX + "," + destinationY;
        NaverMapsGcResponse startResponse = naverMapsClient.gc(start, null, null, null, null, "json");
        NaverMapsGcResponse endResponse = naverMapsClient.gc(goal, null, null, null, null, "json");
        NavreMapsDirectionDrivingResponse response = naverMapsClient.direction5Driving(start, goal, "t");
        NavreMapsDirectionDrivingResponse.Route route = response.getRoute()
                                                                .getOrDefault(TRAOPTIMAL, Lists.newArrayList())
                                                                .stream()
                                                                .findFirst()
                                                                .get();
        List<Double[]> path = route.getPath();
        System.out.println(startResponse.getResults()[0].getRegion());
        List<NaverMapsGcResponse.Result.Region> regionList = Lists.newArrayList();
        if (path.size() >= 5) {
            int pathSize = path.size();
            int basePoint = pathSize / 5;
            regionList = IntStream.rangeClosed(2, 4)
                                  .mapToObj(i -> path.get(basePoint * i))
                                  .map(x -> naverMapsClient.gc(StringUtils.join(x[0], ",", x[1]),
                                                               null,
                                                               null,
                                                               null,
                                                               null,
                                                               "json"))
                                  .map(x -> x.getResults()[0].getRegion())
                                  .collect(Collectors.toList());
        }
        System.out.println(endResponse.getResults()[0].getRegion());
        // 차량 경로에 있는 주차장 정보 획득
        // 주차장 정보 필터링
        regionList.forEach(x -> {
            List<ParkingInfo> result = this.getParkingInfoList()
                                           .stream()
                                           .filter(y -> this.isValidParkingInfo(y, x))
                                           .collect(Collectors.toList());
            List<ParkingInfo> result2 = this.getParkingInfoList()
                                           .stream()
                                           .filter(y -> this.isValidParkingInfo(y, x))
                                           .collect(Collectors.toList());
            System.out.println("");
        });
        return null;
    }

    @Cacheable(value = "getParkingInfoList")
    public List<ParkingInfo> getParkingInfoList() {
        return parkingInfoRepository.findAll();
    }

    private Boolean isValidParkingInfo(ParkingInfo parkingInfo, NaverMapsGcResponse.Result.Region region) {
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
}
