package com.bamplee.chomi.api.datatool.seoul;

import com.bamplee.chomi.api.datatool.seoul.dto.GetParkInfoResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "seoul-openapi", fallback = SeoulOpenApiClientFallbackFactory.class)
public interface SeoulOpenApiClient {
    @GetMapping("{key}/json/GetParkInfo/{startIndex}/{endIndex}")
    GetParkInfoResponse getParkInfo(@PathVariable("key") String key, @PathVariable("startIndex") String startIndex, @PathVariable("endIndex") String endIndex);
}
