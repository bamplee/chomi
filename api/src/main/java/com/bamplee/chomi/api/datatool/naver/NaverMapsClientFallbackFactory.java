package com.bamplee.chomi.api.datatool.naver;

import com.bamplee.chomi.api.datatool.common.LoggingFallbackFactory;
import com.bamplee.chomi.api.datatool.naver.dto.NaverMapsGeocodingResponse;
import com.bamplee.chomi.api.datatool.naver.dto.NaverMapsSearchPlacesResponse;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class NaverMapsClientFallbackFactory implements LoggingFallbackFactory<NaverMapsClient> {
    private static final NaverMapsClient FALLBACK = new NaverMapsClientFallback();

    @Override
    public NaverMapsClient fallback() {
        return FALLBACK;
    }

    @Override
    public Logger logger() {
        return null;
    }

    public static class NaverMapsClientFallback implements NaverMapsClient {
        @Override
        public NaverMapsSearchPlacesResponse search(String query, String coordinate) {
            return null;
        }

        @Override
        public NaverMapsGeocodingResponse geocode(String query, String coordinate, String filter, String page, String count) {
            return null;
        }
    }
}
