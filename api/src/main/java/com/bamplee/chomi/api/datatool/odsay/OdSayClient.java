package com.bamplee.chomi.api.datatool.odsay;

import com.bamplee.chomi.api.datatool.odsay.dto.OdSayLoadLaneResponse;
import com.bamplee.chomi.api.datatool.odsay.dto.OdSaySearchPubTransPathResponse;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "odsay", url = "https://api.odsay.com", fallback = OdSayClientFallbackFactory.class)
public interface OdSayClient {
    @Cacheable(value = "searchPubTransPath")
    @GetMapping("v1/api/searchPubTransPath")
    OdSaySearchPubTransPathResponse searchPubTransPath(@RequestParam("apiKey") String apiKey,
                                                       @RequestParam("SX") String startX,
                                                       @RequestParam("SY") String startY,
                                                       @RequestParam("EX") String endX,
                                                       @RequestParam("EY") String endY,
                                                       @RequestParam("OPT") String opt,
                                                       @RequestParam("SearchType") String searchType,
                                                       @RequestParam("SearchPathType") String searchPathType);

    @Cacheable(value = "loadLane")
    @GetMapping("v1/api/loadLane")
    OdSayLoadLaneResponse loadLane(@RequestParam("apiKey") String apiKey,
                                   @RequestParam("mapObject") String mapObject,
                                   @RequestParam(value = "lang", required = false) String lang,
                                   @RequestParam(value = "output", required = false) String output);
}
