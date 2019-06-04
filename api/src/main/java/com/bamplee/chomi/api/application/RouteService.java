package com.bamplee.chomi.api.application;

public interface RouteService {
    RouteResponse route(String departureX, String departureY, String destinationX, String destinationY);
}
