package com.bamplee.chomi.api.datatool.odsay;

import com.bamplee.chomi.api.datatool.odsay.dto.OdSayLoadLaneResponse;
import com.bamplee.chomi.api.datatool.odsay.dto.OdSaySearchPubTransPathResponse;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class OdSayClientTest {
    @Value("${odsay.key}")
    String apiKey;
    @Autowired
    OdSayClient odSayClient;

    @Test
    public void searchPubTransPath() {
        OdSaySearchPubTransPathResponse result = odSayClient.searchPubTransPath(apiKey, "126.9027279", "37.5349277", "126.9145430", "37.5499421", "0", "0", "0");
    }

    @Test
    public void loadLane() {
        OdSayLoadLaneResponse result = odSayClient.loadLane(apiKey, "0:0@5140:1:19:21@100:2:1530:1521", null, null);
    }
}