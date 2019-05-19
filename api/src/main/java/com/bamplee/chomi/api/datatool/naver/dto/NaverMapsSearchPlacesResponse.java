package com.bamplee.chomi.api.datatool.naver.dto;

import lombok.Data;

@Data
public class NaverMapsSearchPlacesResponse {
    private String status;
    private Meta meta;
    private Place[] places;
    private String errorMessage;

    @Data
    public static class Meta {
        private Integer totalCount;
        private Integer count;
    }

    @Data
    public static class Place {
        private String name;
        private String roadAddress;
        private String jibunAddress;
        private String phoneNumber;
        private String x;
        private String y;
        private Double distance;
        private String sessionId;
    }
}
