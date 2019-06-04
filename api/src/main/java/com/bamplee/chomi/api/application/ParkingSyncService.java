package com.bamplee.chomi.api.application;

import com.bamplee.chomi.api.infrastructure.persistence.jpa.entity.ParkingInfo;

import java.util.List;

public interface ParkingSyncService {
    void syncParkingInfoList();
    void clearParkingInfoCache();
    List<ParkingInfo> getParkingInfoList();
}
