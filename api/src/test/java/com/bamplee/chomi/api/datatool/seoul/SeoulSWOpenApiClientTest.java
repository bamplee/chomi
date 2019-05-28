package com.bamplee.chomi.api.datatool.seoul;

import com.bamplee.chomi.api.datatool.seoul.dto.ShortestRouteResponse;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SeoulSWOpenApiClientTest {
    @Value("${seoul-sw-openapi.key}")
    String key;

    @Autowired
    SeoulSWOpenApiClient seoulSWOpenApiClient;

    @Test
    public void shortestRoute() {
        ShortestRouteResponse result = seoulSWOpenApiClient.shortestRoute(key, "0", "5", "대청", "잠실");

        assertEquals(result.getResult().getStatus(), String.valueOf(HttpStatus.OK.value()));
    }
}