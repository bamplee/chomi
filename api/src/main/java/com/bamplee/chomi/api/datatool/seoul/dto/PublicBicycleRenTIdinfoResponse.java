package com.bamplee.chomi.api.datatool.seoul.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class PublicBicycleRenTIdinfoResponse {
    @JsonProperty("PublicBicycleRenTIdinfo")
    private PublicBicycleRenTIdinfo publicBicycleRenTIdinfo;

    @Data
    public static class PublicBicycleRenTIdinfo {
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
            @JsonProperty("ADDR_GU")
            private String addrGu;
            @JsonProperty("RENT_ID")
            private String rentId;
            @JsonProperty("CONTENT_ID")
            private String contentId;
            @JsonProperty("CONTENT_NM")
            private String contentNm;
            @JsonProperty("NEW_ADDR")
            private String newAddr;
            @JsonProperty("CRADLE_COUNT")
            private String cradleCount;
            @JsonProperty("LATITUDE")
            private Double latitude;
            @JsonProperty("LONGITUDE")
            private Double longitude;
        }
    }
}
