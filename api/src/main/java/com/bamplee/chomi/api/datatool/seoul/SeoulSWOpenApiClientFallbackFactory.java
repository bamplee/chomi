package com.bamplee.chomi.api.datatool.seoul;

import com.bamplee.chomi.api.datatool.common.LoggingFallbackFactory;
import com.bamplee.chomi.api.datatool.seoul.dto.ShortestRouteResponse;
import org.slf4j.Logger;
import org.springframework.stereotype.Component;

@Component
public class SeoulSWOpenApiClientFallbackFactory implements LoggingFallbackFactory<SeoulSWOpenApiClient> {
    private static final SeoulSWOpenApiClient FALLBACK = new SeoulSWOpenApiClientFallback();

    @Override
    public SeoulSWOpenApiClient fallback() {
        return FALLBACK;
    }

    @Override
    public Logger logger() {
        return null;
    }

    public static class SeoulSWOpenApiClientFallback implements SeoulSWOpenApiClient {
        @Override
        public ShortestRouteResponse shortestRoute(String key, String startIndex, String endIndex, String statnFnm, String statnTnm) {
            return null;
        }
    }
}