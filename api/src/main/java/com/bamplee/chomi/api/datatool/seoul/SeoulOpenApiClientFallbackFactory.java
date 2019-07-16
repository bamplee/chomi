package com.bamplee.chomi.api.datatool.seoul;

import com.bamplee.chomi.api.datatool.common.LoggingFallbackFactory;
import com.bamplee.chomi.api.datatool.seoul.dto.BikeListResponse;
import com.bamplee.chomi.api.datatool.seoul.dto.GetParkInfoResponse;
import com.bamplee.chomi.api.datatool.seoul.dto.PublicBicycleRenTIdinfoResponse;
import org.slf4j.Logger;
import org.springframework.stereotype.Component;

import java.util.Map;

@Component
public class SeoulOpenApiClientFallbackFactory implements LoggingFallbackFactory<SeoulOpenApiClient> {
    private static final SeoulOpenApiClient FALLBACK = new SeoulOpenApiClientFallbackFactory.SeoulOpenApiClientFallback();

    @Override
    public SeoulOpenApiClient fallback() {
        return FALLBACK;
    }

    @Override
    public Logger logger() {
        return null;
    }

    public static class SeoulOpenApiClientFallback implements SeoulOpenApiClient {
        @Override
        public GetParkInfoResponse getParkInfo(String key, String startIndex, String endIndex) {
            return null;
        }

        @Override
        public BikeListResponse publicBicycleRenTIdinfo(String key, String startIndex, String endIndex) {
            return null;
        }
    }
}