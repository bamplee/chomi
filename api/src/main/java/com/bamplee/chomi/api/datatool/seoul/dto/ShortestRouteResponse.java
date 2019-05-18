package com.bamplee.chomi.api.datatool.seoul.dto;

import lombok.Data;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.List;

@Data
@XmlRootElement(name = "shortestRoute")
@XmlAccessorType(XmlAccessType.FIELD)
public class ShortestRouteResponse {
    @XmlElement(name = "RESULT")
    private Result result = new Result();
    @XmlElement(name = "row")
    private List<Row> row;

    @Data
    @XmlAccessorType(XmlAccessType.FIELD)
    public static class Result {
        @XmlElement(name = "code")
        private String code;
        @XmlElement(name = "developerMessage")
        private String developerMessage;
        @XmlElement(name = "link")
        private String link;
        @XmlElement(name = "message")
        private String message;
        @XmlElement(name = "status")
        private String status;
        @XmlElement(name = "total")
        private String total;
    }

    @Data
    @XmlAccessorType(XmlAccessType.FIELD)
    public static class Row {
        @XmlElement(name = "rowNum")
        private String rowNum;
        @XmlElement(name = "selectedCount")
        private String selectedCount;
        @XmlElement(name = "totalCount")
        private String totalCount;
        @XmlElement(name = "statnFid")
        private String statnFid;
        @XmlElement(name = "statnTid")
        private String statnTid;
        @XmlElement(name = "statnFnm")
        private String statnFnm;
        @XmlElement(name = "statnTnm")
        private String statnTnm;
        @XmlElement(name = "shtStatnId")
        private String shtStatnId;
        @XmlElement(name = "shtStatnNm")
        private String shtStatnNm;
        @XmlElement(name = "shtTransferMsg")
        private String shtTransferMsg;
        @XmlElement(name = "shtTravelMsg")
        private String shtTravelMsg;
        @XmlElement(name = "shtStatnCnt")
        private String shtStatnCnt;
        @XmlElement(name = "shtTravelTm")
        private String shtTravelTm;
        @XmlElement(name = "shtTransferCnt")
        private String shtTransferCnt;
        @XmlElement(name = "minStatnId")
        private String minStatnId;
        @XmlElement(name = "minStatnNm")
        private String minStatnNm;
        @XmlElement(name = "minTransferMsg")
        private String minTransferMsg;
        @XmlElement(name = "minTravelMsg")
        private String minTravelMsg;
        @XmlElement(name = "minStatnCnt")
        private String minStatnCnt;
        @XmlElement(name = "minTravelTm")
        private String minTravelTm;
        @XmlElement(name = "minTransferCnt")
        private String minTransferCnt;
        @XmlElement(name = "shtStatnXy")
        private String shtStatnXy;
        @XmlElement(name = "minStatnXy")
        private String minStatnXy;
    }
}
