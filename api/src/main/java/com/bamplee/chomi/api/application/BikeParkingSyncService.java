package com.bamplee.chomi.api.application;

import com.bamplee.chomi.api.infrastructure.persistence.jpa.entity.BikeParkingInfo;

import java.util.List;

public interface BikeParkingSyncService {
    void syncBikeParkingInfoList();

    void clearBikeParkingInfoCache();

    List<BikeParkingInfo> getBikeParkingInfoList();
}
