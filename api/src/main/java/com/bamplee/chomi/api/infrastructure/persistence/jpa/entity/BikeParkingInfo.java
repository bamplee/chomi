package com.bamplee.chomi.api.infrastructure.persistence.jpa.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "bike_parking_info")
public class BikeParkingInfo extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    // 거치대개수
    @Column(name = "RACK_TOT_CNT")
    private Integer rackTotCnt;
    // 대여소이름
    @Column(name = "STATION_NAME")
    private String stationName;
    // 자전거주차총건수
    @Column(name = "PARKING_BIKE_TOT_CNT")
    private Integer parkingBikeTotCnt;
    // 거치율
    @Column(name = "SHARED")
    private String shared;
    // 위도
    @Column(name = "STATION_LATITUDE")
    private Double stationLatitude;
    // 경도
    @Column(name = "STATION_LONGITUDE")
    private Double stationLongitude;
    // 대여소ID
    @Column(name = "STATION_ID")
    private String stationId;
    // 시도
    @Column(name = "SIDO_NAME")
    private String sidoName;
    // 군구
    @Column(name = "GUNGU_NAME")
    private String gunguName;
    // 동
    @Column(name = "DONG_NAME")
    private String dongName;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getRackTotCnt() {
        return rackTotCnt;
    }

    public void setRackTotCnt(Integer rackTotCnt) {
        this.rackTotCnt = rackTotCnt;
    }

    public String getStationName() {
        return stationName;
    }

    public void setStationName(String stationName) {
        this.stationName = stationName;
    }

    public Integer getParkingBikeTotCnt() {
        return parkingBikeTotCnt;
    }

    public void setParkingBikeTotCnt(Integer parkingBikeTotCnt) {
        this.parkingBikeTotCnt = parkingBikeTotCnt;
    }

    public String getShared() {
        return shared;
    }

    public void setShared(String shared) {
        this.shared = shared;
    }

    public Double getStationLatitude() {
        return stationLatitude;
    }

    public void setStationLatitude(Double stationLatitude) {
        this.stationLatitude = stationLatitude;
    }

    public Double getStationLongitude() {
        return stationLongitude;
    }

    public void setStationLongitude(Double stationLongitude) {
        this.stationLongitude = stationLongitude;
    }

    public String getStationId() {
        return stationId;
    }

    public void setStationId(String stationId) {
        this.stationId = stationId;
    }

    public String getSidoName() {
        return sidoName;
    }

    public void setSidoName(String sidoName) {
        this.sidoName = sidoName;
    }

    public String getGunguName() {
        return gunguName;
    }

    public void setGunguName(String gunguName) {
        this.gunguName = gunguName;
    }

    public String getDongName() {
        return dongName;
    }

    public void setDongName(String dongName) {
        this.dongName = dongName;
    }
}
