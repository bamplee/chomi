package com.bamplee.chomi.api.datatool.seoul;

import com.bamplee.chomi.api.datatool.seoul.dto.GetParkInfoResponse;
import com.bamplee.chomi.api.datatool.seoul.dto.PublicBicycleRenTIdinfoResponse;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SeoulOpenApiClientTest {
    @Value("${seoul-openapi.key}")
    String key;

    @Autowired
    SeoulOpenApiClient seoulOpenApiClient;

    @Test
    public void getParkInfo() {
        GetParkInfoResponse result = seoulOpenApiClient.getParkInfo(key, "1", "1000");
        assertEquals(result.getParkInfo().getResult().getCode(), "INFO-000");
    }

    @Test
    public void publicBicycleRenTIdinfo() {
        PublicBicycleRenTIdinfoResponse result = seoulOpenApiClient.publicBicycleRenTIdinfo(key, "1", "1000");
        assertEquals(result.getPublicBicycleRenTIdinfo().getResult().getCode(), "INFO-000");
    }
}