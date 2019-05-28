package com.bamplee.chomi.api.datatool.tmoney;

import com.bamplee.chomi.api.datatool.tmoney.dto.BsBikeRentIdGetResponse;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TMoneyOpenApiClientTest {
    @Autowired
    TMoneyOpenApiClient tMoneyOpenApiClient;

    @Test
    public void bsBikeRentIdGet() {
        BsBikeRentIdGetResponse bsBikeRentIdGetResponse = tMoneyOpenApiClient.bsBikeRentIdGet("ST-10");
    }
}