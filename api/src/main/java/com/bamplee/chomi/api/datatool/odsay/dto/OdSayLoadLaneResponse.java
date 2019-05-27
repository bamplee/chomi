package com.bamplee.chomi.api.datatool.odsay.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class OdSayLoadLaneResponse {
    private Result result;

    @Data
    public static class Result {
        private List<Lane> lane;
        private Boundary boundary;

        @Data
        public static class Lane {
            @JsonProperty("class")
            private Integer clazz;
            private Integer type;
            private List<Section> section;
        }

        @Data
        public static class Section {
            private List<GraphPos> graphPos;

            @Data
            public static class GraphPos {
                private Double x;
                private Double y;
            }
        }

        @Data
        public static class Boundary {
            private Double left;
            private Double top;
            private Double right;
            private Double bottom;
        }
    }
}
