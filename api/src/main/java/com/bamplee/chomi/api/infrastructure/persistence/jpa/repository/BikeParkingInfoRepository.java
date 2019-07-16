package com.bamplee.chomi.api.infrastructure.persistence.jpa.repository;

import com.bamplee.chomi.api.infrastructure.persistence.jpa.entity.BikeParkingInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BikeParkingInfoRepository extends JpaRepository<BikeParkingInfo, Long> {
}
