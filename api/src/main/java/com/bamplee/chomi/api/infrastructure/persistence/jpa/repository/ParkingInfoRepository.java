package com.bamplee.chomi.api.infrastructure.persistence.jpa.repository;

import com.bamplee.chomi.api.infrastructure.persistence.jpa.entity.ParkingInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParkingInfoRepository extends JpaRepository<ParkingInfo, Long> {
}
