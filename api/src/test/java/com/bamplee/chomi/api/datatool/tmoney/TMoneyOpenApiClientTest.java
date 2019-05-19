package com.bamplee.chomi.api.datatool.tmoney;

import com.bamplee.chomi.api.datatool.tmoney.dto.BsBikeRentIdGetResponse;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.*;

@Slf4j
@RunWith(SpringRunner.class)
@SpringBootTest
public class TMoneyOpenApiClientTest {
    @Autowired
    TMoneyOpenApiClient tMoneyOpenApiClient;

    @Test
    public void bsBikeRentIdGet() {
        BsBikeRentIdGetResponse bsBikeRentIdGetResponse = tMoneyOpenApiClient.bsBikeRentIdGet("ST-10");
        log.info(bsBikeRentIdGetResponse.toString());
    }
}