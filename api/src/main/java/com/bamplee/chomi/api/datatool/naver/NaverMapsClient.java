package com.bamplee.chomi.api.datatool.naver;

import com.bamplee.chomi.api.datatool.naver.dto.NaverMapsGeocodingResponse;
import com.bamplee.chomi.api.datatool.naver.dto.NaverMapsSearchPlacesResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "naver-maps", url="https://naveropenapi.apigw.ntruss.com", fallback = NaverMapsClientFallbackFactory.class)
public interface NaverMapsClient {
    @GetMapping("map-place/v1/search")
    NaverMapsSearchPlacesResponse search(@RequestParam("query") String query, @RequestParam("coordinate") String coordinate);

    @GetMapping("map-geocode/v2/geocode")
    NaverMapsGeocodingResponse geocode(@RequestParam("query") String query,
                                       @RequestParam(value = "coordinate", required = false) String coordinate,
                                       @RequestParam(value = "filter", required = false) String filter,
                                       @RequestParam(value = "page", required = false) String page,
                                       @RequestParam(value = "count", required = false) String count);
}
