package com.bamplee.chomi.api.datatool.seoul.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BikeListResponse {
    @JsonProperty("rentBikeStatus")
    private RentBikeStatus rentBikeStatus;

    public RentBikeStatus getRentBikeStatus() {
        return rentBikeStatus;
    }

    public void setRentBikeStatus(RentBikeStatus rentBikeStatus) {
        this.rentBikeStatus = rentBikeStatus;
    }

    public static class RentBikeStatus {
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
        }

        public static class Row {
            private Integer rackTotCnt;
            private String stationName;
            private Integer parkingBikeTotCnt;
            private String shared;
            private Double stationLatitude;
            private Double stationLongitude;
            private String stationId;

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
        }
    }
}
