package com.bamplee.chomi.api.infrastructure.persistence.jpa.entity;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;
import org.apache.commons.lang3.builder.ToStringBuilder;

import javax.persistence.*;

@Entity
@Table(name = "parking_info", uniqueConstraints = {@UniqueConstraint(columnNames = {"PARKING_CODE"})})
public class ParkingInfo extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    // 주차장코드
    @Column(name = "PARKING_CODE")
    private String parkingCode;
    // 주차장명
    @Column(name = "PARKING_NAME")
    private String parkingName;
    // 주소
    @Column(name = "ADDR")
    private String addr;
    // 주차장 종류
    @Column(name = "PARKING_TYPE")
    private String parkingType;
    // 주차장 종류명
    @Column(name = "PARKING_TYPE_NM")
    private String parkingTypeNm;
    // 운영구분
    @Column(name = "OPERATION_RULE")
    private String operationRule;
    // 운영구분명
    @Column(name = "OPERATION_RULE_NM")
    private String operationRuleNm;
    // 전화번호
    @Column(name = "TEL")
    private String tel;
    // 주차현황 정보 제공여부
    @Column(name = "QUE_STATUS")
    private String queStatus;
    // 주차현황 정보 제공여부명
    @Column(name = "QUE_STATUS_NM")
    private String queStatusNm;
    // 주차 면(주차 가능 차량 수)
    @Column(name = "CAPACITY")
    private Integer capacity;
    // 현재 주차중인 대수
    @Column(name = "CUR_PARKING")
    private Integer curParking;
    // 현재 주차 차량 업데이트 시간
    @Column(name = "CUR_PARKING_TIME")
    private String curParkingTime;
    // 유무료구분
    @Column(name = "PAY_YN")
    private String payYn;
    // 유무료구분명
    @Column(name = "PAY_NM")
    private String payNm;
    // 야간무료개방여부
    @Column(name = "NIGHT_FREE_OPEN")
    private String nightFreeOpen;
    // 야간무료개방여부명
    @Column(name = "NIGHT_FREE_OPEN_NM")
    private String nightFreeOpenNm;
    // 평일 운영 시작시각(HHMM)
    @Column(name = "WEEKDAY_BEGIN_TIME")
    private String weekdayBeginTime;
    // 평일 운영 종료시각(HHMM)
    @Column(name = "WEEKDAY_END_TIME")
    private String weekdayEndTime;
    // 주말 운영 시작시각(HHMM)
    @Column(name = "WEEKEND_BEGIN_TIME")
    private String weekendBeginTime;
    // 주말 운영 종료시각(HHMM)
    @Column(name = "WEEKEND_END_TIME")
    private String weekendEndTime;
    // 공휴일 운영 시작시각(HHMM)
    @Column(name = "HOLIDAY_BEGIN_TIME")
    private String holidayBeginTime;
    // 공휴일 운영 종료시각(HHMM)
    @Column(name = "HOLIDAY_END_TIME")
    private String holidayEndTime;
    // 최종데이터 동기화 시간
    @Column(name = "SYNC_TIME")
    private String syncTime;
    // 토요일 유,무료 구분
    @Column(name = "SATURDAY_PAY_YN")
    private String saturdayPayYn;
    // 토요일 유,무료 구분명
    @Column(name = "SATURDAY_PAY_NM")
    private String saturdayPayNm;
    // 공휴일 유,무료 구분
    @Column(name = "HOLIDAY_PAY_YN")
    private String holidayPayYn;
    // 공휴일 유,무료 구분명
    @Column(name = "HOLIDAY_PAY_NM")
    private String holidayPayNm;
    // 월 정기권 금액
    @Column(name = "FULLTIME_MONTHLY")
    private String fullTimeMonthly;
    // 노상 주차장 관리그룹번호
    @Column(name = "GRP_PARKNM")
    private String grpParkNm;
    // 기본 주차 요금
    @Column(name = "RATES")
    private Integer rates;
    // 기본 주차 시간(분 단위)
    @Column(name = "TIME_RATE")
    private Integer timeRate;
    // 추가 단위 요금
    @Column(name = "ADD_RATES")
    private Integer addRates;
    // 추가 단위 시간(분 단위)
    @Column(name = "ADD_TIME_RATE")
    private Integer addTimeRate;
    // 버스 기본 주차 요금
    @Column(name = "BUS_RATES")
    private Integer busRates;
    // 버스 기본 주차 시간(분 단위)
    @Column(name = "BUS_TIME_RATE")
    private Integer busTimeRate;
    // 버스 추가 단위 시간(분 단위)
    @Column(name = "BUS_ADD_TIME_RATE")
    private Integer busAddTimeRate;
    // 버스 추가 단위 요금
    @Column(name = "BUS_ADD_RATES")
    private Integer busAddRates;
    // 일 최대 요금
    @Column(name = "DAY_MAXIMUM")
    private Integer dayMaximum;
    // 주차장 위치 좌표 위도
    @Column(name = "LAT")
    private Double lat;
    // 주차장 위치 좌표 경도
    @Column(name = "LNG")
    private Double lng;
    // 배정코드
    @Column(name = "ASSIGN_CODE")
    private String assignCode;
    // 배정코드명
    @Column(name = "ASSIGN_CODE_NM")
    private String assignCodeNm;
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

    public String getParkingCode() {
        return parkingCode;
    }

    public void setParkingCode(String parkingCode) {
        this.parkingCode = parkingCode;
    }

    public String getParkingName() {
        return parkingName;
    }

    public void setParkingName(String parkingName) {
        this.parkingName = parkingName;
    }

    public String getAddr() {
        return addr;
    }

    public void setAddr(String addr) {
        this.addr = addr;
    }

    public String getParkingType() {
        return parkingType;
    }

    public void setParkingType(String parkingType) {
        this.parkingType = parkingType;
    }

    public String getParkingTypeNm() {
        return parkingTypeNm;
    }

    public void setParkingTypeNm(String parkingTypeNm) {
        this.parkingTypeNm = parkingTypeNm;
    }

    public String getOperationRule() {
        return operationRule;
    }

    public void setOperationRule(String operationRule) {
        this.operationRule = operationRule;
    }

    public String getOperationRuleNm() {
        return operationRuleNm;
    }

    public void setOperationRuleNm(String operationRuleNm) {
        this.operationRuleNm = operationRuleNm;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getQueStatus() {
        return queStatus;
    }

    public void setQueStatus(String queStatus) {
        this.queStatus = queStatus;
    }

    public String getQueStatusNm() {
        return queStatusNm;
    }

    public void setQueStatusNm(String queStatusNm) {
        this.queStatusNm = queStatusNm;
    }

    public Integer getCapacity() {
        return capacity;
    }

    public void setCapacity(Integer capacity) {
        this.capacity = capacity;
    }

    public Integer getCurParking() {
        return curParking;
    }

    public void setCurParking(Integer curParking) {
        this.curParking = curParking;
    }

    public String getCurParkingTime() {
        return curParkingTime;
    }

    public void setCurParkingTime(String curParkingTime) {
        this.curParkingTime = curParkingTime;
    }

    public String getPayYn() {
        return payYn;
    }

    public void setPayYn(String payYn) {
        this.payYn = payYn;
    }

    public String getPayNm() {
        return payNm;
    }

    public void setPayNm(String payNm) {
        this.payNm = payNm;
    }

    public String getNightFreeOpen() {
        return nightFreeOpen;
    }

    public void setNightFreeOpen(String nightFreeOpen) {
        this.nightFreeOpen = nightFreeOpen;
    }

    public String getNightFreeOpenNm() {
        return nightFreeOpenNm;
    }

    public void setNightFreeOpenNm(String nightFreeOpenNm) {
        this.nightFreeOpenNm = nightFreeOpenNm;
    }

    public String getWeekdayBeginTime() {
        return weekdayBeginTime;
    }

    public void setWeekdayBeginTime(String weekdayBeginTime) {
        this.weekdayBeginTime = weekdayBeginTime;
    }

    public String getWeekdayEndTime() {
        return weekdayEndTime;
    }

    public void setWeekdayEndTime(String weekdayEndTime) {
        this.weekdayEndTime = weekdayEndTime;
    }

    public String getWeekendBeginTime() {
        return weekendBeginTime;
    }

    public void setWeekendBeginTime(String weekendBeginTime) {
        this.weekendBeginTime = weekendBeginTime;
    }

    public String getWeekendEndTime() {
        return weekendEndTime;
    }

    public void setWeekendEndTime(String weekendEndTime) {
        this.weekendEndTime = weekendEndTime;
    }

    public String getHolidayBeginTime() {
        return holidayBeginTime;
    }

    public void setHolidayBeginTime(String holidayBeginTime) {
        this.holidayBeginTime = holidayBeginTime;
    }

    public String getHolidayEndTime() {
        return holidayEndTime;
    }

    public void setHolidayEndTime(String holidayEndTime) {
        this.holidayEndTime = holidayEndTime;
    }

    public String getSyncTime() {
        return syncTime;
    }

    public void setSyncTime(String syncTime) {
        this.syncTime = syncTime;
    }

    public String getSaturdayPayYn() {
        return saturdayPayYn;
    }

    public void setSaturdayPayYn(String saturdayPayYn) {
        this.saturdayPayYn = saturdayPayYn;
    }

    public String getSaturdayPayNm() {
        return saturdayPayNm;
    }

    public void setSaturdayPayNm(String saturdayPayNm) {
        this.saturdayPayNm = saturdayPayNm;
    }

    public String getHolidayPayYn() {
        return holidayPayYn;
    }

    public void setHolidayPayYn(String holidayPayYn) {
        this.holidayPayYn = holidayPayYn;
    }

    public String getHolidayPayNm() {
        return holidayPayNm;
    }

    public void setHolidayPayNm(String holidayPayNm) {
        this.holidayPayNm = holidayPayNm;
    }

    public String getFullTimeMonthly() {
        return fullTimeMonthly;
    }

    public void setFullTimeMonthly(String fullTimeMonthly) {
        this.fullTimeMonthly = fullTimeMonthly;
    }

    public String getGrpParkNm() {
        return grpParkNm;
    }

    public void setGrpParkNm(String grpParkNm) {
        this.grpParkNm = grpParkNm;
    }

    public Integer getRates() {
        return rates;
    }

    public void setRates(Integer rates) {
        this.rates = rates;
    }

    public Integer getTimeRate() {
        return timeRate;
    }

    public void setTimeRate(Integer timeRate) {
        this.timeRate = timeRate;
    }

    public Integer getAddRates() {
        return addRates;
    }

    public void setAddRates(Integer addRates) {
        this.addRates = addRates;
    }

    public Integer getAddTimeRate() {
        return addTimeRate;
    }

    public void setAddTimeRate(Integer addTimeRate) {
        this.addTimeRate = addTimeRate;
    }

    public Integer getBusRates() {
        return busRates;
    }

    public void setBusRates(Integer busRates) {
        this.busRates = busRates;
    }

    public Integer getBusTimeRate() {
        return busTimeRate;
    }

    public void setBusTimeRate(Integer busTimeRate) {
        this.busTimeRate = busTimeRate;
    }

    public Integer getBusAddTimeRate() {
        return busAddTimeRate;
    }

    public void setBusAddTimeRate(Integer busAddTimeRate) {
        this.busAddTimeRate = busAddTimeRate;
    }

    public Integer getBusAddRates() {
        return busAddRates;
    }

    public void setBusAddRates(Integer busAddRates) {
        this.busAddRates = busAddRates;
    }

    public Integer getDayMaximum() {
        return dayMaximum;
    }

    public void setDayMaximum(Integer dayMaximum) {
        this.dayMaximum = dayMaximum;
    }

    public Double getLat() {
        return lat;
    }

    public void setLat(Double lat) {
        this.lat = lat;
    }

    public Double getLng() {
        return lng;
    }

    public void setLng(Double lng) {
        this.lng = lng;
    }

    public String getAssignCode() {
        return assignCode;
    }

    public void setAssignCode(String assignCode) {
        this.assignCode = assignCode;
    }

    public String getAssignCodeNm() {
        return assignCodeNm;
    }

    public void setAssignCodeNm(String assignCodeNm) {
        this.assignCodeNm = assignCodeNm;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        ParkingInfo that = (ParkingInfo) o;
        return new EqualsBuilder()
            .append(id, that.id)
            .append(parkingCode, that.parkingCode)
            .append(parkingName, that.parkingName)
            .append(addr, that.addr)
            .append(parkingType, that.parkingType)
            .append(parkingTypeNm, that.parkingTypeNm)
            .append(operationRule, that.operationRule)
            .append(operationRuleNm, that.operationRuleNm)
            .append(tel, that.tel)
            .append(queStatus, that.queStatus)
            .append(queStatusNm, that.queStatusNm)
            .append(capacity, that.capacity)
            .append(curParking, that.curParking)
            .append(curParkingTime, that.curParkingTime)
            .append(payYn, that.payYn)
            .append(payNm, that.payNm)
            .append(nightFreeOpen, that.nightFreeOpen)
            .append(nightFreeOpenNm, that.nightFreeOpenNm)
            .append(weekdayBeginTime, that.weekdayBeginTime)
            .append(weekdayEndTime, that.weekdayEndTime)
            .append(weekendBeginTime, that.weekendBeginTime)
            .append(weekendEndTime, that.weekendEndTime)
            .append(holidayBeginTime, that.holidayBeginTime)
            .append(holidayEndTime, that.holidayEndTime)
            .append(syncTime, that.syncTime)
            .append(saturdayPayYn, that.saturdayPayYn)
            .append(saturdayPayNm, that.saturdayPayNm)
            .append(holidayPayYn, that.holidayPayYn)
            .append(holidayPayNm, that.holidayPayNm)
            .append(fullTimeMonthly, that.fullTimeMonthly)
            .append(grpParkNm, that.grpParkNm)
            .append(rates, that.rates)
            .append(timeRate, that.timeRate)
            .append(addRates, that.addRates)
            .append(addTimeRate, that.addTimeRate)
            .append(busRates, that.busRates)
            .append(busTimeRate, that.busTimeRate)
            .append(busAddTimeRate, that.busAddTimeRate)
            .append(busAddRates, that.busAddRates)
            .append(dayMaximum, that.dayMaximum)
            .append(lat, that.lat)
            .append(lng, that.lng)
            .append(assignCode, that.assignCode)
            .append(assignCodeNm, that.assignCodeNm)
            .append(sidoName, that.sidoName)
            .append(gunguName, that.gunguName)
            .append(dongName, that.dongName)
            .isEquals();
    }

    @Override
    public int hashCode() {
        return new HashCodeBuilder(17, 37)
            .append(id)
            .append(parkingCode)
            .append(parkingName)
            .append(addr)
            .append(parkingType)
            .append(parkingTypeNm)
            .append(operationRule)
            .append(operationRuleNm)
            .append(tel)
            .append(queStatus)
            .append(queStatusNm)
            .append(capacity)
            .append(curParking)
            .append(curParkingTime)
            .append(payYn)
            .append(payNm)
            .append(nightFreeOpen)
            .append(nightFreeOpenNm)
            .append(weekdayBeginTime)
            .append(weekdayEndTime)
            .append(weekendBeginTime)
            .append(weekendEndTime)
            .append(holidayBeginTime)
            .append(holidayEndTime)
            .append(syncTime)
            .append(saturdayPayYn)
            .append(saturdayPayNm)
            .append(holidayPayYn)
            .append(holidayPayNm)
            .append(fullTimeMonthly)
            .append(grpParkNm)
            .append(rates)
            .append(timeRate)
            .append(addRates)
            .append(addTimeRate)
            .append(busRates)
            .append(busTimeRate)
            .append(busAddTimeRate)
            .append(busAddRates)
            .append(dayMaximum)
            .append(lat)
            .append(lng)
            .append(assignCode)
            .append(assignCodeNm)
            .append(sidoName)
            .append(gunguName)
            .append(dongName)
            .toHashCode();
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this)
            .append("id", id)
            .append("parkingCode", parkingCode)
            .append("parkingName", parkingName)
            .append("addr", addr)
            .append("parkingType", parkingType)
            .append("parkingTypeNm", parkingTypeNm)
            .append("operationRule", operationRule)
            .append("operationRuleNm", operationRuleNm)
            .append("tel", tel)
            .append("queStatus", queStatus)
            .append("queStatusNm", queStatusNm)
            .append("capacity", capacity)
            .append("curParking", curParking)
            .append("curParkingTime", curParkingTime)
            .append("payYn", payYn)
            .append("payNm", payNm)
            .append("nightFreeOpen", nightFreeOpen)
            .append("nightFreeOpenNm", nightFreeOpenNm)
            .append("weekdayBeginTime", weekdayBeginTime)
            .append("weekdayEndTime", weekdayEndTime)
            .append("weekendBeginTime", weekendBeginTime)
            .append("weekendEndTime", weekendEndTime)
            .append("holidayBeginTime", holidayBeginTime)
            .append("holidayEndTime", holidayEndTime)
            .append("syncTime", syncTime)
            .append("saturdayPayYn", saturdayPayYn)
            .append("saturdayPayNm", saturdayPayNm)
            .append("holidayPayYn", holidayPayYn)
            .append("holidayPayNm", holidayPayNm)
            .append("fullTimeMonthly", fullTimeMonthly)
            .append("grpParkNm", grpParkNm)
            .append("rates", rates)
            .append("timeRate", timeRate)
            .append("addRates", addRates)
            .append("addTimeRate", addTimeRate)
            .append("busRates", busRates)
            .append("busTimeRate", busTimeRate)
            .append("busAddTimeRate", busAddTimeRate)
            .append("busAddRates", busAddRates)
            .append("dayMaximum", dayMaximum)
            .append("lat", lat)
            .append("lng", lng)
            .append("assignCode", assignCode)
            .append("assignCodeNm", assignCodeNm)
            .append("sidoName", sidoName)
            .append("gunguName", gunguName)
            .append("dongName", dongName)
            .toString();
    }
}
