package com.bamplee.chomi.api.application;

import com.bamplee.chomi.api.datatool.naver.NaverMapsClient;
import com.bamplee.chomi.api.datatool.naver.dto.NaverMapsSearchPlacesResponse;
import com.bamplee.chomi.api.datatool.odsay.OdSayClient;
import com.bamplee.chomi.api.datatool.odsay.dto.OdSayLoadLaneResponse;
import com.bamplee.chomi.api.datatool.odsay.dto.OdSaySearchPubTransPathResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

@Service
public class MapServiceImpl implements MapService {
    private final NaverMapsClient naverMapsClient;
    private final OdSayClient odSayClient;
    @Value("${odsay.key}")
    String odsayKey;

    public MapServiceImpl(NaverMapsClient naverMapsClient, OdSayClient odSayClient) {
        this.naverMapsClient = naverMapsClient;
        this.odSayClient = odSayClient;
    }

    @Override
    public NaverMapsSearchPlacesResponse search(String query) {
        return naverMapsClient.search(query, "126.986,37.541", "popularity");
    }

    @Cacheable(value = "route")
    @Override
    public OdSaySearchPubTransPathResponse route(String startX, String startY, String endX, String endY) {
        return odSayClient.searchPubTransPath(odsayKey, startX, startY, endX, endY, "0", "0", "0");
    }

    @Cacheable(value = "graph")
    @Override
    public OdSayLoadLaneResponse graph(String mapObject) {
        return odSayClient.loadLane(odsayKey, "0:0@" + mapObject, null, null);
    }

    @Override
    public byte[] image(String x, String y) {
        String center = x + "," + y;
        String markers = "type:d|size:small|pos:" + x + "%20" + y;
        return naverMapsClient.raster(360, 150, center, 16, markers, null, null, null, "2");
    }
}
