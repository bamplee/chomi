package com.bamplee.chomi.api.datatool.seoul.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;
import org.apache.commons.lang3.builder.ToStringBuilder;

public class GetParkInfoResponse {
    @JsonProperty("GetParkInfo")
    private ParkInfo parkInfo;

    public ParkInfo getParkInfo() {
        return parkInfo;
    }

    public void setParkInfo(ParkInfo parkInfo) {
        this.parkInfo = parkInfo;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        GetParkInfoResponse that = (GetParkInfoResponse) o;
        return new EqualsBuilder()
            .append(parkInfo, that.parkInfo)
            .isEquals();
    }

    @Override
    public int hashCode() {
        return new HashCodeBuilder(17, 37)
            .append(parkInfo)
            .toHashCode();
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this)
            .append("parkInfo", parkInfo)
            .toString();
    }

    public static class ParkInfo {
        @JsonProperty("list_total_count")
        private Integer listTotalCount;
        @JsonProperty("RESULT")
        private Result result;
        @JsonProperty("row")
        private Row[] row;

        public Integer getListTotalCount() {
            return listTotalCount;
        }

        public void setListTotalCount(Integer listTotalCount) {
            this.listTotalCount = listTotalCount;
        }

        public Result getResult() {
            return result;
        }

        public void setResult(Result result) {
            this.result = result;
        }

        public Row[] getRow() {
            return row;
        }

        public void setRow(Row[] row) {
            this.row = row;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) {
                return true;
            }
            if (o == null || getClass() != o.getClass()) {
                return false;
            }
            ParkInfo parkInfo = (ParkInfo) o;
            return new EqualsBuilder()
                .append(listTotalCount, parkInfo.listTotalCount)
                .append(result, parkInfo.result)
                .append(row, parkInfo.row)
                .isEquals();
        }

        @Override
        public int hashCode() {
            return new HashCodeBuilder(17, 37)
                .append(listTotalCount)
                .append(result)
                .append(row)
                .toHashCode();
        }

        @Override
        public String toString() {
            return new ToStringBuilder(this)
                .append("listTotalCount", listTotalCount)
                .append("result", result)
                .append("row", row)
                .toString();
        }

        public static class Result {
            @JsonProperty("CODE")
            private String code;
            @JsonProperty("MESSAGE")
            private String message;

            public String getCode() {
                return code;
            }

            public void setCode(String code) {
                this.code = code;
            }

            public String getMessage() {
                return message;
            }

            public void setMessage(String message) {
                this.message = message;
            }

            @Override
            public boolean equals(Object o) {
                if (this == o) {
                    return true;
                }
                if (o == null || getClass() != o.getClass()) {
                    return false;
                }
                Result result = (Result) o;
                return new EqualsBuilder()
                    .append(code, result.code)
                    .append(message, result.message)
                    .isEquals();
            }

            @Override
            public int hashCode() {
                return new HashCodeBuilder(17, 37)
                    .append(code)
                    .append(message)
                    .toHashCode();
            }

            @Override
            public String toString() {
                return new ToStringBuilder(this)
                    .append("code", code)
                    .append("message", message)
                    .toString();
            }
        }

        public static class Row {
            // 주차장코드
            @JsonProperty("PARKING_CODE")
            private String parkingCode;
            // 주차장명
            @JsonProperty("PARKING_NAME")
            private String parkingName;
            // 주소
            @JsonProperty("ADDR")
            private String addr;
            // 주차장 종류
            @JsonProperty("PARKING_TYPE")
            private String parkingType;
            // 주차장 종류명
            @JsonProperty("PARKING_TYPE_NM")
            private String parkingTypeNm;
            // 운영구분
            @JsonProperty("OPERATION_RULE")
            private String operationRule;
            // 운영구분명
            @JsonProperty("OPERATION_RULE_NM")
            private String operationRuleNm;
            // 전화번호
            @JsonProperty("TEL")
            private String tel;
            // 주차현황 정보 제공여부
            @JsonProperty("QUE_STATUS")
            private String queStatus;
            // 주차현황 정보 제공여부명
            @JsonProperty("QUE_STATUS_NM")
            private String queStatusNm;
            // 주차 면(주차 가능 차량 수)
            @JsonProperty("CAPACITY")
            private Integer capacity;
            // 현재 주차중인 대수
            @JsonProperty("CUR_PARKING")
            private Integer curParking;
            // 현재 주차 차량 업데이트 시간
            @JsonProperty("CUR_PARKING_TIME")
            private String curParkingTime;
            // 유무료구분
            @JsonProperty("PAY_YN")
            private String payYn;
            // 유무료구분명
            @JsonProperty("PAY_NM")
            private String payNm;
            // 야간무료개방여부
            @JsonProperty("NIGHT_FREE_OPEN")
            private String nightFreeOpen;
            // 야간무료개방여부명
            @JsonProperty("NIGHT_FREE_OPEN_NM")
            private String nightFreeOpenNm;
            // 평일 운영 시작시각(HHMM)
            @JsonProperty("WEEKDAY_BEGIN_TIME")
            private String weekdayBeginTime;
            // 평일 운영 종료시각(HHMM)
            @JsonProperty("WEEKDAY_END_TIME")
            private String weekdayEndTime;
            // 주말 운영 시작시각(HHMM)
            @JsonProperty("WEEKEND_BEGIN_TIME")
            private String weekendBeginTime;
            // 주말 운영 종료시각(HHMM)
            @JsonProperty("WEEKEND_END_TIME")
            private String weekendEndTime;
            // 공휴일 운영 시작시각(HHMM)
            @JsonProperty("HOLIDAY_BEGIN_TIME")
            private String holidayBeginTime;
            // 공휴일 운영 종료시각(HHMM)
            @JsonProperty("HOLIDAY_END_TIME")
            private String holidayEndTime;
            // 최종데이터 동기화 시간
            @JsonProperty("SYNC_TIME")
            private String syncTime;
            // 토요일 유,무료 구분
            @JsonProperty("SATURDAY_PAY_YN")
            private String saturdayPayYn;
            // 토요일 유,무료 구분명
            @JsonProperty("SATURDAY_PAY_NM")
            private String saturdayPayNm;
            // 공휴일 유,무료 구분
            @JsonProperty("HOLIDAY_PAY_YN")
            private String holidayPayYn;
            // 공휴일 유,무료 구분명
            @JsonProperty("HOLIDAY_PAY_NM")
            private String holidayPayNm;
            // 월 정기권 금액
            @JsonProperty("FULLTIME_MONTHLY")
            private String fullTimeMonthly;
            // 노상 주차장 관리그룹번호
            @JsonProperty("GRP_PARKNM")
            private String grpParkNm;
            // 기본 주차 요금
            @JsonProperty("RATES")
            private Integer rates;
            // 기본 주차 시간(분 단위)
            @JsonProperty("TIME_RATE")
            private Integer timeRate;
            // 추가 단위 요금
            @JsonProperty("ADD_RATES")
            private Integer addRates;
            // 추가 단위 시간(분 단위)
            @JsonProperty("ADD_TIME_RATE")
            private Integer addTimeRate;
            // 버스 기본 주차 요금
            @JsonProperty("BUS_RATES")
            private Integer busRates;
            // 버스 기본 주차 시간(분 단위)
            @JsonProperty("BUS_TIME_RATE")
            private Integer busTimeRate;
            // 버스 추가 단위 시간(분 단위)
            @JsonProperty("BUS_ADD_TIME_RATE")
            private Integer busAddTimeRate;
            // 버스 추가 단위 요금
            @JsonProperty("BUS_ADD_RATES")
            private Integer busAddRates;
            // 일 최대 요금
            @JsonProperty("DAY_MAXIMUM")
            private Integer dayMaximum;
            // 주차장 위치 좌표 위도
            @JsonProperty("LAT")
            private Double lat;
            // 주차장 위치 좌표 경도
            @JsonProperty("LNG")
            private Double lng;
            // 배정코드
            @JsonProperty("ASSIGN_CODE")
            private String assignCode;
            // 배정코드명
            @JsonProperty("ASSIGN_CODE_NM")
            private String assignCodeNm;

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

            @Override
            public boolean equals(Object o) {
                if (this == o) {
                    return true;
                }
                if (o == null || getClass() != o.getClass()) {
                    return false;
                }
                Row row = (Row) o;
                return new EqualsBuilder()
                    .append(parkingCode, row.parkingCode)
                    .append(parkingName, row.parkingName)
                    .append(addr, row.addr)
                    .append(parkingType, row.parkingType)
                    .append(parkingTypeNm, row.parkingTypeNm)
                    .append(operationRule, row.operationRule)
                    .append(operationRuleNm, row.operationRuleNm)
                    .append(tel, row.tel)
                    .append(queStatus, row.queStatus)
                    .append(queStatusNm, row.queStatusNm)
                    .append(capacity, row.capacity)
                    .append(curParking, row.curParking)
                    .append(curParkingTime, row.curParkingTime)
                    .append(payYn, row.payYn)
                    .append(payNm, row.payNm)
                    .append(nightFreeOpen, row.nightFreeOpen)
                    .append(nightFreeOpenNm, row.nightFreeOpenNm)
                    .append(weekdayBeginTime, row.weekdayBeginTime)
                    .append(weekdayEndTime, row.weekdayEndTime)
                    .append(weekendBeginTime, row.weekendBeginTime)
                    .append(weekendEndTime, row.weekendEndTime)
                    .append(holidayBeginTime, row.holidayBeginTime)
                    .append(holidayEndTime, row.holidayEndTime)
                    .append(syncTime, row.syncTime)
                    .append(saturdayPayYn, row.saturdayPayYn)
                    .append(saturdayPayNm, row.saturdayPayNm)
                    .append(holidayPayYn, row.holidayPayYn)
                    .append(holidayPayNm, row.holidayPayNm)
                    .append(fullTimeMonthly, row.fullTimeMonthly)
                    .append(grpParkNm, row.grpParkNm)
                    .append(rates, row.rates)
                    .append(timeRate, row.timeRate)
                    .append(addRates, row.addRates)
                    .append(addTimeRate, row.addTimeRate)
                    .append(busRates, row.busRates)
                    .append(busTimeRate, row.busTimeRate)
                    .append(busAddTimeRate, row.busAddTimeRate)
                    .append(busAddRates, row.busAddRates)
                    .append(dayMaximum, row.dayMaximum)
                    .append(lat, row.lat)
                    .append(lng, row.lng)
                    .append(assignCode, row.assignCode)
                    .append(assignCodeNm, row.assignCodeNm)
                    .isEquals();
            }

            @Override
            public int hashCode() {
                return new HashCodeBuilder(17, 37)
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
                    .toHashCode();
            }

            @Override
            public String toString() {
                return new ToStringBuilder(this)
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
                    .toString();
            }
        }
    }
}
