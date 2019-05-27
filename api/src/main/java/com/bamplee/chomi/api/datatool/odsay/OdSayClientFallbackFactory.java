package com.bamplee.chomi.api.datatool.odsay;

import com.bamplee.chomi.api.datatool.common.LoggingFallbackFactory;
import com.bamplee.chomi.api.datatool.odsay.dto.OdSayLoadLaneResponse;
import com.bamplee.chomi.api.datatool.odsay.dto.OdSaySearchPubTransPathResponse;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.springframework.stereotype.Component;

import java.util.Map;

@Component
@Slf4j
public class OdSayClientFallbackFactory implements LoggingFallbackFactory<OdSayClient> {
    private static final OdSayClient FALLBACK = new OdSayClientFallback();

    @Override
    public OdSayClient fallback() {
        return FALLBACK;
    }

    @Override
    public Logger logger() {
        return null;
    }

    public static class OdSayClientFallback implements OdSayClient {
        @Override
        public OdSaySearchPubTransPathResponse searchPubTransPath(String apiKey,
                                                                  String startX,
                                                                  String startY,
                                                                  String endX,
                                                                  String endY,
                                                                  String opt,
                                                                  String searchType,
                                                                  String searchPathType) {
            return null;
        }

        @Override
        public OdSayLoadLaneResponse loadLane(String apiKey, String mapObject, String lang, String output) {
            return null;
        }
    }
}
