package com.bamplee.chomi.api.datatool.seoul.dto;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;
import org.apache.commons.lang3.builder.ToStringBuilder;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.List;

@XmlRootElement(name = "shortestRoute")
@XmlAccessorType(XmlAccessType.FIELD)
public class ShortestRouteResponse {
    @XmlElement(name = "RESULT")
    private Result result = new Result();
    @XmlElement(name = "row")
    private List<Row> row;

    public Result getResult() {
        return result;
    }

    public void setResult(Result result) {
        this.result = result;
    }

    public List<Row> getRow() {
        return row;
    }

    public void setRow(List<Row> row) {
        this.row = row;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        ShortestRouteResponse that = (ShortestRouteResponse) o;
        return new EqualsBuilder()
            .append(result, that.result)
            .append(row, that.row)
            .isEquals();
    }

    @Override
    public int hashCode() {
        return new HashCodeBuilder(17, 37)
            .append(result)
            .append(row)
            .toHashCode();
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this)
            .append("result", result)
            .append("row", row)
            .toString();
    }

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

        public String getCode() {
            return code;
        }

        public void setCode(String code) {
            this.code = code;
        }

        public String getDeveloperMessage() {
            return developerMessage;
        }

        public void setDeveloperMessage(String developerMessage) {
            this.developerMessage = developerMessage;
        }

        public String getLink() {
            return link;
        }

        public void setLink(String link) {
            this.link = link;
        }

        public String getMessage() {
            return message;
        }

        public void setMessage(String message) {
            this.message = message;
        }

        public String getStatus() {
            return status;
        }

        public void setStatus(String status) {
            this.status = status;
        }

        public String getTotal() {
            return total;
        }

        public void setTotal(String total) {
            this.total = total;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) {
                return true;
            }
            if (o == null || getClass() != o.getClass()) {
                return false;
            }
            Result result = (Result) o;
            return new EqualsBuilder()
                .append(code, result.code)
                .append(developerMessage, result.developerMessage)
                .append(link, result.link)
                .append(message, result.message)
                .append(status, result.status)
                .append(total, result.total)
                .isEquals();
        }

        @Override
        public int hashCode() {
            return new HashCodeBuilder(17, 37)
                .append(code)
                .append(developerMessage)
                .append(link)
                .append(message)
                .append(status)
                .append(total)
                .toHashCode();
        }

        @Override
        public String toString() {
            return new ToStringBuilder(this)
                .append("code", code)
                .append("developerMessage", developerMessage)
                .append("link", link)
                .append("message", message)
                .append("status", status)
                .append("total", total)
                .toString();
        }
    }

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

        public String getRowNum() {
            return rowNum;
        }

        public void setRowNum(String rowNum) {
            this.rowNum = rowNum;
        }

        public String getSelectedCount() {
            return selectedCount;
        }

        public void setSelectedCount(String selectedCount) {
            this.selectedCount = selectedCount;
        }

        public String getTotalCount() {
            return totalCount;
        }

        public void setTotalCount(String totalCount) {
            this.totalCount = totalCount;
        }

        public String getStatnFid() {
            return statnFid;
        }

        public void setStatnFid(String statnFid) {
            this.statnFid = statnFid;
        }

        public String getStatnTid() {
            return statnTid;
        }

        public void setStatnTid(String statnTid) {
            this.statnTid = statnTid;
        }

        public String getStatnFnm() {
            return statnFnm;
        }

        public void setStatnFnm(String statnFnm) {
            this.statnFnm = statnFnm;
        }

        public String getStatnTnm() {
            return statnTnm;
        }

        public void setStatnTnm(String statnTnm) {
            this.statnTnm = statnTnm;
        }

        public String getShtStatnId() {
            return shtStatnId;
        }

        public void setShtStatnId(String shtStatnId) {
            this.shtStatnId = shtStatnId;
        }

        public String getShtStatnNm() {
            return shtStatnNm;
        }

        public void setShtStatnNm(String shtStatnNm) {
            this.shtStatnNm = shtStatnNm;
        }

        public String getShtTransferMsg() {
            return shtTransferMsg;
        }

        public void setShtTransferMsg(String shtTransferMsg) {
            this.shtTransferMsg = shtTransferMsg;
        }

        public String getShtTravelMsg() {
            return shtTravelMsg;
        }

        public void setShtTravelMsg(String shtTravelMsg) {
            this.shtTravelMsg = shtTravelMsg;
        }

        public String getShtStatnCnt() {
            return shtStatnCnt;
        }

        public void setShtStatnCnt(String shtStatnCnt) {
            this.shtStatnCnt = shtStatnCnt;
        }

        public String getShtTravelTm() {
            return shtTravelTm;
        }

        public void setShtTravelTm(String shtTravelTm) {
            this.shtTravelTm = shtTravelTm;
        }

        public String getShtTransferCnt() {
            return shtTransferCnt;
        }

        public void setShtTransferCnt(String shtTransferCnt) {
            this.shtTransferCnt = shtTransferCnt;
        }

        public String getMinStatnId() {
            return minStatnId;
        }

        public void setMinStatnId(String minStatnId) {
            this.minStatnId = minStatnId;
        }

        public String getMinStatnNm() {
            return minStatnNm;
        }

        public void setMinStatnNm(String minStatnNm) {
            this.minStatnNm = minStatnNm;
        }

        public String getMinTransferMsg() {
            return minTransferMsg;
        }

        public void setMinTransferMsg(String minTransferMsg) {
            this.minTransferMsg = minTransferMsg;
        }

        public String getMinTravelMsg() {
            return minTravelMsg;
        }

        public void setMinTravelMsg(String minTravelMsg) {
            this.minTravelMsg = minTravelMsg;
        }

        public String getMinStatnCnt() {
            return minStatnCnt;
        }

        public void setMinStatnCnt(String minStatnCnt) {
            this.minStatnCnt = minStatnCnt;
        }

        public String getMinTravelTm() {
            return minTravelTm;
        }

        public void setMinTravelTm(String minTravelTm) {
            this.minTravelTm = minTravelTm;
        }

        public String getMinTransferCnt() {
            return minTransferCnt;
        }

        public void setMinTransferCnt(String minTransferCnt) {
            this.minTransferCnt = minTransferCnt;
        }

        public String getShtStatnXy() {
            return shtStatnXy;
        }

        public void setShtStatnXy(String shtStatnXy) {
            this.shtStatnXy = shtStatnXy;
        }

        public String getMinStatnXy() {
            return minStatnXy;
        }

        public void setMinStatnXy(String minStatnXy) {
            this.minStatnXy = minStatnXy;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) {
                return true;
            }
            if (o == null || getClass() != o.getClass()) {
                return false;
            }
            Row row = (Row) o;
            return new EqualsBuilder()
                .append(rowNum, row.rowNum)
                .append(selectedCount, row.selectedCount)
                .append(totalCount, row.totalCount)
                .append(statnFid, row.statnFid)
                .append(statnTid, row.statnTid)
                .append(statnFnm, row.statnFnm)
                .append(statnTnm, row.statnTnm)
                .append(shtStatnId, row.shtStatnId)
                .append(shtStatnNm, row.shtStatnNm)
                .append(shtTransferMsg, row.shtTransferMsg)
                .append(shtTravelMsg, row.shtTravelMsg)
                .append(shtStatnCnt, row.shtStatnCnt)
                .append(shtTravelTm, row.shtTravelTm)
                .append(shtTransferCnt, row.shtTransferCnt)
                .append(minStatnId, row.minStatnId)
                .append(minStatnNm, row.minStatnNm)
                .append(minTransferMsg, row.minTransferMsg)
                .append(minTravelMsg, row.minTravelMsg)
                .append(minStatnCnt, row.minStatnCnt)
                .append(minTravelTm, row.minTravelTm)
                .append(minTransferCnt, row.minTransferCnt)
                .append(shtStatnXy, row.shtStatnXy)
                .append(minStatnXy, row.minStatnXy)
                .isEquals();
        }

        @Override
        public int hashCode() {
            return new HashCodeBuilder(17, 37)
                .append(rowNum)
                .append(selectedCount)
                .append(totalCount)
                .append(statnFid)
                .append(statnTid)
                .append(statnFnm)
                .append(statnTnm)
                .append(shtStatnId)
                .append(shtStatnNm)
                .append(shtTransferMsg)
                .append(shtTravelMsg)
                .append(shtStatnCnt)
                .append(shtTravelTm)
                .append(shtTransferCnt)
                .append(minStatnId)
                .append(minStatnNm)
                .append(minTransferMsg)
                .append(minTravelMsg)
                .append(minStatnCnt)
                .append(minTravelTm)
                .append(minTransferCnt)
                .append(shtStatnXy)
                .append(minStatnXy)
                .toHashCode();
        }

        @Override
        public String toString() {
            return new ToStringBuilder(this)
                .append("rowNum", rowNum)
                .append("selectedCount", selectedCount)
                .append("totalCount", totalCount)
                .append("statnFid", statnFid)
                .append("statnTid", statnTid)
                .append("statnFnm", statnFnm)
                .append("statnTnm", statnTnm)
                .append("shtStatnId", shtStatnId)
                .append("shtStatnNm", shtStatnNm)
                .append("shtTransferMsg", shtTransferMsg)
                .append("shtTravelMsg", shtTravelMsg)
                .append("shtStatnCnt", shtStatnCnt)
                .append("shtTravelTm", shtTravelTm)
                .append("shtTransferCnt", shtTransferCnt)
                .append("minStatnId", minStatnId)
                .append("minStatnNm", minStatnNm)
                .append("minTransferMsg", minTransferMsg)
                .append("minTravelMsg", minTravelMsg)
                .append("minStatnCnt", minStatnCnt)
                .append("minTravelTm", minTravelTm)
                .append("minTransferCnt", minTransferCnt)
                .append("shtStatnXy", shtStatnXy)
                .append("minStatnXy", minStatnXy)
                .toString();
        }
    }
}
