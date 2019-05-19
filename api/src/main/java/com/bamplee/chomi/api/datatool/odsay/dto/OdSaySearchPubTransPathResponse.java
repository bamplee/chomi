package com.bamplee.chomi.api.datatool.odsay.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonRootName;
import lombok.Data;

import java.util.Map;

@Data
public class OdSaySearchPubTransPathResponse {
    @JsonProperty("result")
    private Map<String, Object> result;
}
