package com.bamplee.chomi.api.datatool.naver;

import com.bamplee.chomi.api.datatool.naver.dto.NaverSearchPlacesResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "naver-search-places", url="https://naveropenapi.apigw.ntruss.com", fallback = NaverSearchPlacesClientFallbackFactory.class)
public interface NaverSearchPlacesClient {
    @GetMapping("map-place/v1/search")
    NaverSearchPlacesResponse search(@RequestParam("query") String query, @RequestParam("coordinate") String coordinate);
}
