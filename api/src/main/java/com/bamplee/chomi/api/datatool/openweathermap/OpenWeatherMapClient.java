package com.bamplee.chomi.api.datatool.openweathermap;

import com.bamplee.chomi.api.datatool.openweathermap.dto.ForecastResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "openweathermap", url = "http://api.openweathermap.org")
public interface OpenWeatherMapClient {
    @GetMapping("data/2.5/forecast")
    ForecastResponse forecast(@RequestParam("appid") String appId, @RequestParam("lat") String lat, @RequestParam("lon") String lon);
}
