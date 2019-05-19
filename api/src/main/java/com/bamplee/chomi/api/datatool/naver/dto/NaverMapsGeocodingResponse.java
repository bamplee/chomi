package com.bamplee.chomi.api.datatool.naver.dto;

import lombok.Data;

@Data
public class NaverMapsGeocodingResponse {
    private String status;
    private Meta meta;
    private Address[] addresses;
    private String errorMessage;

    @Data
    public static class Meta {
        private Integer totalCount;
        private Integer page;
        private Integer count;
    }

    @Data
    public static class Address {
        private String roadAddress;
        private String jibunAddress;
        private String englishAddress;
        private Element[] addressElements;
        private String x;
        private String y;
        private Double distance;

        @Data
        public static class Element {
            private String[] types;
            private String longName;
            private String shortName;
            private String code;
        }
    }
}
