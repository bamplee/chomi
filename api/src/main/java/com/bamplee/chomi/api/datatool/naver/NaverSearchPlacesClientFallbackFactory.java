package com.bamplee.chomi.api.datatool.naver;

import com.bamplee.chomi.api.datatool.common.LoggingFallbackFactory;
import com.bamplee.chomi.api.datatool.naver.dto.NaverSearchPlacesResponse;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class NaverSearchPlacesClientFallbackFactory implements LoggingFallbackFactory<NaverSearchPlacesClient> {
    private static final NaverSearchPlacesClient FALLBACK = new NaverSearchPlacesClientFallbackFactory.NaverSearchPlacesClientFallback();

    @Override
    public NaverSearchPlacesClient fallback() {
        return FALLBACK;
    }

    @Override
    public Logger logger() {
        return null;
    }

    public static class NaverSearchPlacesClientFallback implements NaverSearchPlacesClient {
        @Override
        public NaverSearchPlacesResponse search(String query, String coordinate) {
            return null;
        }
    }
}
