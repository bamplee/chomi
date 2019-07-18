package com.bamplee.chomi.api.datatool.openweathermap;

import com.bamplee.chomi.api.datatool.openweathermap.dto.ForecastResponse;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Map;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class OpenWeatherMapClientTest {
    @Value("${openweathermap.key}")
    String key;
    @Autowired
    OpenWeatherMapClient openWeatherMapClient;

    @Test
    public void forecast() {
        ForecastResponse forecast = openWeatherMapClient.forecast(key, "35", "125");
        System.out.println(forecast.toString());
    }
}