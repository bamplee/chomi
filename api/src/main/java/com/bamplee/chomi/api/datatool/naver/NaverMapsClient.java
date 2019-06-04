package com.bamplee.chomi.api.datatool.naver;

import com.bamplee.chomi.api.datatool.naver.dto.NaverMapsDirectionDrivingResponse;
import com.bamplee.chomi.api.datatool.naver.dto.NaverMapsGcResponse;
import com.bamplee.chomi.api.datatool.naver.dto.NaverMapsGeocodingResponse;
import com.bamplee.chomi.api.datatool.naver.dto.NaverMapsSearchPlacesResponse;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "naver-maps", url = "https://naveropenapi.apigw.ntruss.com", fallback = NaverMapsClientFallbackFactory.class)
public interface NaverMapsClient {
    @Cacheable(value = "search")
    @GetMapping("map-place/v1/search")
    NaverMapsSearchPlacesResponse search(@RequestParam("query") String query, @RequestParam("coordinate") String coordinate, @RequestParam(value = "orderBy", required = false) String orderBy);

    @Cacheable(value = "geocode")
    @GetMapping("map-geocode/v2/geocode")
    NaverMapsGeocodingResponse geocode(@RequestParam("query") String query,
                                       @RequestParam(value = "coordinate", required = false) String coordinate,
                                       @RequestParam(value = "filter", required = false) String filter,
                                       @RequestParam(value = "page", required = false) String page,
                                       @RequestParam(value = "count", required = false) String count);

    // https://apidocs.ncloud.com/ko/ai-naver/maps_reverse_geocoding/gc/#요청-파라미터
    @Cacheable(value = "gc")
    @GetMapping("map-reversegeocode/v2/gc")
    NaverMapsGcResponse gc(@RequestParam("coords") String coords,
                           @RequestParam(value = "request", required = false) String request,
                           @RequestParam(value = "sourcecrs", required = false) String sourcecrs,
                           @RequestParam(value = "targetcrs", required = false) String targetcrs,
                           @RequestParam(value = "orders", required = false) String orders,
                           @RequestParam(value = "output", required = false) String output);

    @Cacheable(value = "raster")
    @GetMapping(value = "map-static/v2/raster", produces = MediaType.IMAGE_JPEG_VALUE)
    byte[] raster(@RequestParam("w") Integer w,
                  @RequestParam("h") Integer h,
                  @RequestParam(value = "center", required = false) String center,
                  @RequestParam(value = "level", required = false) Integer level,
                  @RequestParam(value = "markers", required = false) String markers,
                  @RequestParam(value = "crs", required = false) String crs,
                  @RequestParam(value = "maptype", required = false) String maptype,
                  @RequestParam(value = "format", required = false) String format,
                  @RequestParam(value = "scale", required = false) String scale);

    @Cacheable(value = "direction5Driving")
    @GetMapping(value = "map-direction/v1/driving")
    NaverMapsDirectionDrivingResponse direction5Driving(@RequestParam(value = "start") String start,
                                                        @RequestParam(value = "goal") String goal,
                                                        @RequestParam(value = "option") String option);
}
