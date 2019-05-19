package com.bamplee.chomi.api.datatool.naver;

import com.bamplee.chomi.api.datatool.naver.dto.NaverSearchPlacesResponse;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@Slf4j
@RunWith(SpringRunner.class)
@SpringBootTest
public class NaverSearchPlacesClientTest {
    @Autowired
    NaverSearchPlacesClient naverSearchPlacesClient;

    @Test
    public void search() {
        NaverSearchPlacesResponse result = naverSearchPlacesClient.search("서울", "126.986,37.541");
        System.out.println(result.toString());
    }
}