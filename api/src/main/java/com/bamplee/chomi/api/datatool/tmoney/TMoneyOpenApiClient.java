package com.bamplee.chomi.api.datatool.tmoney;

import com.bamplee.chomi.api.datatool.tmoney.dto.BsBikeRentIdGetResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "tmoney-openapi", fallback = TMoneyOpenApiClientFallbackFactory.class)
public interface TMoneyOpenApiClient {
    @GetMapping(value = "/gateway/bsBikeRentIdGet/v1/bsBikeRentIdGet/restAPI", headers = "Accept=application/json")
    BsBikeRentIdGetResponse bsBikeRentIdGet(@RequestParam("RENT_ID") String rentId);
}
