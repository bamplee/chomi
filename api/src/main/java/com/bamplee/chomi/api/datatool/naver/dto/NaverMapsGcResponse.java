package com.bamplee.chomi.api.datatool.naver.dto;

import lombok.Data;

@Data
public class NaverMapsGcResponse {
    private Status status;
    private Result[] results;

    @Data
    public static class Status {
        private Integer code;
        private String name;
        private String message;
    }

    @Data
    public static class Result {
        private String name;
        private Code code;
        private Region region;

        @Data
        public static class Code {
            private String id;
            private String type;
            private String mappingId;
        }

        @Data
        public static class Region {
            private Area area0;
            private Area area1;
            private Area area2;
            private Area area3;
            private Area area4;

            @Data
            public static class Area {
                private String name;
                private Coords coords;
            }

            @Data
            public static class Coords {
                private Center center;

                @Data
                public static class Center {
                    private String crs;
                    private String x;
                    private String y;
                }
            }
        }
    }
}
