package com.bamplee.chomi.api.datatool.seoul;

import com.bamplee.chomi.api.datatool.seoul.dto.BikeListResponse;
import com.bamplee.chomi.api.datatool.seoul.dto.GetParkInfoResponse;
import com.bamplee.chomi.api.datatool.seoul.dto.PublicBicycleRenTIdinfoResponse;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Arrays;
import java.util.Map;

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
        int startIndex = 1;
        int endIndex = 1000;
        int pageSize = 1000;

        GetParkInfoResponse result = seoulOpenApiClient.getParkInfo(key, String.valueOf(startIndex), String.valueOf(endIndex));
        Arrays.stream(result.getParkInfo().getRow()).forEach(x -> {
            System.out.println(x.toString());
        });
        int totalSize = result.getParkInfo().getListTotalCount();
        int count = 0;
        while(true) {
            System.out.println(startIndex);
            System.out.println(endIndex);
            count += seoulOpenApiClient.getParkInfo(key, String.valueOf(startIndex), String.valueOf(endIndex)).getParkInfo().getRow().length;
            System.out.println();
            if(endIndex > totalSize) break;
            startIndex += pageSize;
            endIndex += pageSize;
        }
        System.out.println(count);
        assertEquals(result.getParkInfo().getResult().getCode(), "INFO-000");
    }

    @Test
    public void publicBicycleRenTIdinfo() {
        int startIndex = 1;
        int endIndex = 1000;
        int pageSize = 1000;

        BikeListResponse result = seoulOpenApiClient.publicBicycleRenTIdinfo(key, String.valueOf(startIndex), String.valueOf(endIndex));
        Arrays.stream(result.getRentBikeStatus().getRow()).forEach(x -> {
            System.out.println(x.toString());
        });
        int totalSize = result.getRentBikeStatus().getListTotalCount();
        int count = 0;
        while(true) {
            System.out.println(startIndex);
            System.out.println(endIndex);
            count += seoulOpenApiClient.publicBicycleRenTIdinfo(key, String.valueOf(startIndex), String.valueOf(endIndex)).getRentBikeStatus().getRow().length;
            System.out.println();
            if(endIndex > totalSize) break;
            startIndex += pageSize;
            endIndex += pageSize;
        }
        System.out.println(count);
    }
}