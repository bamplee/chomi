package com.bamplee.chomi.api.datatool.tmoney.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class BsBikeRentIdGetResponse {
    @JsonProperty("tgtEOT_S1_TBEOTM100_DEVInput")
    private Input input;
    @JsonProperty("RENT_ID")
    private String rentId;
    @JsonProperty("tgtEOT_S1_TBEOTM100_DEVOutput")
    private Output output;

    @Data
    public static class Input {
        @JsonProperty("RENT_ID")
        private String rentId;
    }

    @Data
    public static class Output {
        @JsonProperty("results")
        private Place[] results;

        @Data
        public static class Place {
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
            private String latitude;
            @JsonProperty("LONGITUDE")
            private String longitude;
            @JsonProperty("ESB_CRDT")
            private String esbCrdt;
        }
    }
}
