package com.bamplee.chomi.api.application;

import com.bamplee.chomi.api.datatool.naver.dto.NaverMapsSearchPlacesResponse;
import com.bamplee.chomi.api.datatool.odsay.dto.OdSayLoadLaneResponse;
import com.bamplee.chomi.api.datatool.odsay.dto.OdSaySearchPubTransPathResponse;

public interface MapService {
    NaverMapsSearchPlacesResponse search(String query);

    OdSaySearchPubTransPathResponse route(String startX, String startY, String endX, String endY);

    OdSayLoadLaneResponse graph(String mapObject);

    byte[] image(String x, String y);
}
