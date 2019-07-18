package com.bamplee.chomi.api.datatool.seoul.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ForecastWarningResponse {
    @JsonProperty("ForecastWarningMinuteParticleOfDustService")
    private Data data;

    public static class Data {
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
            // 발표시간
            @JsonProperty("APPLC_DT")
            private String applcDt;
            // 예/경보 구분
            // (f: 예보, a: 경보)
            @JsonProperty("FA_ON")
            private String faOn;
            // 오염물질 종류
            @JsonProperty("POLLUTANT")
            private String pollutant;
            // 예보 등급
            @JsonProperty("CAISTEP")
            private String caistep;
            // 행동요령(예보)
            @JsonProperty("ALARM_CNDT")
            private String alarmCndt;
            // 경보 등급
            @JsonProperty("ALERTSTEP")
            private String alertStep;
            // 행동요령(경보)
            @JsonProperty("CNDT1")
            private String cndt1;

            public String getApplcDt() {
                return applcDt;
            }

            public void setApplcDt(String applcDt) {
                this.applcDt = applcDt;
            }

            public String getFaOn() {
                return faOn;
            }

            public void setFaOn(String faOn) {
                this.faOn = faOn;
            }

            public String getPollutant() {
                return pollutant;
            }

            public void setPollutant(String pollutant) {
                this.pollutant = pollutant;
            }

            public String getCaistep() {
                return caistep;
            }

            public void setCaistep(String caistep) {
                this.caistep = caistep;
            }

            public String getAlarmCndt() {
                return alarmCndt;
            }

            public void setAlarmCndt(String alarmCndt) {
                this.alarmCndt = alarmCndt;
            }

            public String getAlertStep() {
                return alertStep;
            }

            public void setAlertStep(String alertStep) {
                this.alertStep = alertStep;
            }

            public String getCndt1() {
                return cndt1;
            }

            public void setCndt1(String cndt1) {
                this.cndt1 = cndt1;
            }
        }
    }
}
