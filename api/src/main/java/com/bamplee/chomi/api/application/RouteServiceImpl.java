package com.bamplee.chomi.api.application;

import com.bamplee.chomi.api.datatool.naver.NaverMapsClient;
import com.bamplee.chomi.api.datatool.naver.dto.NavreMapsDirectionDrivingResponse;
import org.springframework.stereotype.Service;

@Service
public class RouteServiceImpl implements RouteService {
    private final NaverMapsClient naverMapsClient;

    public RouteServiceImpl(NaverMapsClient naverMapsClient) {this.naverMapsClient = naverMapsClient;}

    @Override
    public String route(Double departureX, Double departureY, Double destinationX, Double destinationY) {
        // 차량 경로 설정
        String start = departureX + "," + departureY;
        String goal = destinationX + "," + destinationY;
        NavreMapsDirectionDrivingResponse response = naverMapsClient.direction5Driving(start, goal, "t");

        System.out.println(response.toString());
        // 차량 경로에 있는 주차장 정보 획득

        // 주차장 정보 필터링

        return null;
    }
}
