package com.bamplee.chomi.api.datatool.odsay;

import com.bamplee.chomi.api.datatool.odsay.dto.OdSaySearchPubTransPathResponse;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.*;

@Slf4j
@RunWith(SpringRunner.class)
@SpringBootTest
public class OdSayClientTest {
    @Value("${odsay.key}")
    String apiKey;
    @Autowired
    OdSayClient odSayClient;

    @Test
    public void searchPubTransPath() {
        String result = odSayClient.searchPubTransPath(apiKey, "126.9027279", "37.5349277", "126.9145430", "37.5499421", "0", "0", "0");
        log.debug(result.toString());
    }
}