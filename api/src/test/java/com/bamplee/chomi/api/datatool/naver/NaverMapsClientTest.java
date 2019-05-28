package com.bamplee.chomi.api.datatool.naver;

import com.bamplee.chomi.api.datatool.naver.dto.NaverMapsGcResponse;
import com.bamplee.chomi.api.datatool.naver.dto.NaverMapsGeocodingResponse;
import com.bamplee.chomi.api.datatool.naver.dto.NaverMapsSearchPlacesResponse;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class NaverMapsClientTest {
    @Autowired
    NaverMapsClient naverMapsClient;

    @Test
    public void search() {
        NaverMapsSearchPlacesResponse result = naverMapsClient.search("서울", "126.986,37.541", null);
    }

    @Test
    public void geocode() {
        NaverMapsGeocodingResponse result = naverMapsClient.geocode("분당구 불정로 6", null, null, null, null);
    }

    @Test
    public void gc() {
        NaverMapsGcResponse result = naverMapsClient.gc("128.12345,37.98776", null, null, null, null, "json");
    }

    @Test
    public void raster() {
        byte[] result = naverMapsClient.raster(300, 300, "127.1054221,37.3591614", 16, null, null, null, null, null);
    }
}