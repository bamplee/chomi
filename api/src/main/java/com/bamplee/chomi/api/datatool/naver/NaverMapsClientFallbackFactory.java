package com.bamplee.chomi.api.datatool.naver;

import com.bamplee.chomi.api.datatool.common.LoggingFallbackFactory;
import com.bamplee.chomi.api.datatool.naver.dto.NaverMapsDirectionDrivingResponse;
import com.bamplee.chomi.api.datatool.naver.dto.NaverMapsGcResponse;
import com.bamplee.chomi.api.datatool.naver.dto.NaverMapsGeocodingResponse;
import com.bamplee.chomi.api.datatool.naver.dto.NaverMapsSearchPlacesResponse;
import org.slf4j.Logger;
import org.springframework.stereotype.Component;

@Component
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
        public NaverMapsSearchPlacesResponse search(String query, String coordinate, String orderBy) {
            return null;
        }

        @Override
        public NaverMapsGeocodingResponse geocode(String query, String coordinate, String filter, String page, String count) {
            return null;
        }

        @Override
        public NaverMapsGcResponse gc(String coords, String request, String sourcecrs, String targetcrs, String orders, String output) {
            return null;
        }

        @Override
        public byte[] raster(Integer w,
                             Integer h,
                             String center,
                             Integer level,
                             String markers,
                             String crs,
                             String maptype,
                             String format,
                             String scale) {
            return null;
        }

        @Override
        public NaverMapsDirectionDrivingResponse direction5Driving(String start, String goal, String option) {
            return null;
        }
    }
}
