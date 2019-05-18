package com.bamplee.chomi.api.datatool.seoul;

import com.bamplee.chomi.api.datatool.common.LoggingFallbackFactory;
import com.bamplee.chomi.api.datatool.seoul.dto.GetParkInfoResponse;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.springframework.stereotype.Component;

@Component
@Slf4j
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
    }
}