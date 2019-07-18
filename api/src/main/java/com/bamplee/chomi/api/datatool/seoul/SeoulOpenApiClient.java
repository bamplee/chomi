package com.bamplee.chomi.api.datatool.seoul;

import com.bamplee.chomi.api.datatool.seoul.dto.BikeListResponse;
import com.bamplee.chomi.api.datatool.seoul.dto.ForecastWarningResponse;
import com.bamplee.chomi.api.datatool.seoul.dto.GetParkInfoResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.Map;

@FeignClient(name = "seoul-openapi")
public interface SeoulOpenApiClient {
    // 주차장 정보
    @GetMapping("{key}/json/GetParkInfo/{startIndex}/{endIndex}")
    GetParkInfoResponse getParkInfo(@PathVariable("key") String key, @PathVariable("startIndex") String startIndex, @PathVariable("endIndex") String endIndex);

    // 자전거 주차장 정보
    @GetMapping("{key}/json/bikeList/{startIndex}/{endIndex}")
    BikeListResponse publicBicycleRenTIdinfo(@PathVariable("key") String key, @PathVariable("startIndex") String startIndex, @PathVariable("endIndex") String endIndex);

    // 미세먼지 예보
    @GetMapping("{key}/json/ForecastWarningMinuteParticleOfDustService/{startIndex}/{endIndex}")
    ForecastWarningResponse forecastWarningMinuteParticleOfDustService(@PathVariable("key") String key, @PathVariable("startIndex") String startIndex, @PathVariable("endIndex") String endIndex);

    // 실시간 날씨
    @GetMapping("{key}/json/realTimeWeatherObserveInfo/{startIndex}/{endIndex}/{date}")
    Map<String, Object> realTimeWeatherObserveInfo(@PathVariable("key") String key, @PathVariable("startIndex") String startIndex, @PathVariable("endIndex") String endIndex, @PathVariable("date") String date);
}
