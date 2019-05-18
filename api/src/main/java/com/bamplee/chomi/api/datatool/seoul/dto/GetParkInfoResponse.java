package com.bamplee.chomi.api.datatool.seoul.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class GetParkInfoResponse {
    @JsonProperty("GetParkInfo")
    private ParkInfo parkInfo;

    @Data
    public static class ParkInfo {
        @JsonProperty("list_total_count")
        private Integer listTotalCount;
        @JsonProperty("RESULT")
        private Result result;
        @JsonProperty("row")
        private Row[] row;

        @Data
        public static class Result {
            @JsonProperty("CODE")
            private String code;
            @JsonProperty("MESSAGE")
            private String message;
        }

        @Data
        public static class Row {
            @JsonProperty("PARKING_CODE")
            private String parkingCode;
            @JsonProperty("PARKING_NAME")
            private String parkingName;
            @JsonProperty("ADDR")
            private String addr;
            @JsonProperty("PARKING_TYPE")
            private String parkingType;
            @JsonProperty("PARKING_TYPE_NM")
            private String parkingTypeNm;
            @JsonProperty("OPERATION_RULE")
            private String operationRule;
            @JsonProperty("OPERATION_RULE_NM")
            private String operationRuleNm;
            @JsonProperty("TEL")
            private String tel;
            @JsonProperty("QUE_STATUS")
            private String queStatus;
            @JsonProperty("QUE_STATUS_NM")
            private String queStatusNm;
            @JsonProperty("CAPACITY")
            private String capacity;
            @JsonProperty("CUR_PARKING")
            private String curParking;
            @JsonProperty("CUR_PARKING_TIME")
            private String curParkingTime;
            @JsonProperty("PAY_YN")
            private String payYn;
            @JsonProperty("PAY_NM")
            private String payNm;
            @JsonProperty("NIGHT_FREE_OPEN")
            private String nightFreeOpen;
            @JsonProperty("NIGHT_FREE_OPEN_NM")
            private String nightFreeOpenNm;
            @JsonProperty("WEEKDAY_BEGIN_TIME")
            private String weekdayBeginTime;
            @JsonProperty("WEEKDAY_END_TIME")
            private String weekdayEndTime;
            @JsonProperty("WEEKEND_BEGIN_TIME")
            private String weekendBeginTime;
            @JsonProperty("WEEKEND_END_TIME")
            private String weekendEndTime;
            @JsonProperty("HOLIDAY_BEGIN_TIME")
            private String holidayBeginTime;
            @JsonProperty("HOLIDAY_END_TIME")
            private String holidayEndTime;
            @JsonProperty("SYNC_TIME")
            private String syncTime;
            @JsonProperty("SATURDAY_PAY_YN")
            private String saturdayPayYn;
            @JsonProperty("SATURDAY_PAY_NM")
            private String saturdayPayNm;
            @JsonProperty("HOLIDAY_PAY_YN")
            private String holidayPayYn;
            @JsonProperty("HOLIDAY_PAY_NM")
            private String holidayPayNm;
            @JsonProperty("FULLTIME_MONTHLY")
            private String fullTimeMonthly;
            @JsonProperty("GRP_PARKNM")
            private String grpParkNm;
            @JsonProperty("RATES")
            private String rates;
            @JsonProperty("TIME_RATE")
            private String timeRate;
            @JsonProperty("ADD_RATES")
            private String addRates;
            @JsonProperty("ADD_TIME_RATE")
            private String addTimeRate;
            @JsonProperty("BUS_RATES")
            private String busRates;
            @JsonProperty("BUS_TIME_RATE")
            private String busTimeRate;
            @JsonProperty("BUS_ADD_TIME_RATE")
            private String busAddTimeRate;
            @JsonProperty("BUS_ADD_RATES")
            private String busAddRates;
            @JsonProperty("DAY_MAXIMUM")
            private String dayMaximum;
            @JsonProperty("LAT")
            private String lat;
            @JsonProperty("LNG")
            private String lng;
            @JsonProperty("ASSIGN_CODE")
            private String assignCode;
            @JsonProperty("ASSIGN_CODE_NM")
            private String assignCodeNm;
        }
    }
}
