package com.bamplee.chomi.api.datatool.seoul;

import com.bamplee.chomi.api.datatool.seoul.dto.ShortestRouteResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "seoul-sw-openapi", fallbackFactory = SeoulSWOpenApiClientFallbackFactory.class)
public interface SeoulSWOpenApiClient {

    @GetMapping("api/subway/{key}/xml/shortestRoute/{startIndex}/{endIndex}/{statnFnm}/{statnTnm}")
    ShortestRouteResponse shortestRoute(@PathVariable("key") String key,
                                        @PathVariable("startIndex") String startIndex,
                                        @PathVariable("endIndex") String endIndex,
                                        @PathVariable("statnFnm") String statnFnm,
                                        @PathVariable("statnTnm") String statnTnm);
}
