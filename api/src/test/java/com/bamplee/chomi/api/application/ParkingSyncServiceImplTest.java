package com.bamplee.chomi.api.application;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ParkingSyncServiceImplTest {
    @Autowired
    ParkingSyncService parkingSyncService;

    @Test
    public void syncParkingInfoList() {
        parkingSyncService.syncParkingInfoList();
    }
}