package com.bamplee.chomi.api.datatool.seoul.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;
import org.apache.commons.lang3.builder.ToStringBuilder;

public class PublicBicycleRenTIdinfoResponse {
    @JsonProperty("PublicBicycleRenTIdinfo")
    private PublicBicycleRenTIdinfo publicBicycleRenTIdinfo;

    public PublicBicycleRenTIdinfo getPublicBicycleRenTIdinfo() {
        return publicBicycleRenTIdinfo;
    }

    public void setPublicBicycleRenTIdinfo(PublicBicycleRenTIdinfo publicBicycleRenTIdinfo) {
        this.publicBicycleRenTIdinfo = publicBicycleRenTIdinfo;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        PublicBicycleRenTIdinfoResponse that = (PublicBicycleRenTIdinfoResponse) o;
        return new EqualsBuilder()
            .append(publicBicycleRenTIdinfo, that.publicBicycleRenTIdinfo)
            .isEquals();
    }

    @Override
    public int hashCode() {
        return new HashCodeBuilder(17, 37)
            .append(publicBicycleRenTIdinfo)
            .toHashCode();
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this)
            .append("publicBicycleRenTIdinfo", publicBicycleRenTIdinfo)
            .toString();
    }

    public static class PublicBicycleRenTIdinfo {
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

        @Override
        public boolean equals(Object o) {
            if (this == o) {
                return true;
            }
            if (o == null || getClass() != o.getClass()) {
                return false;
            }
            PublicBicycleRenTIdinfo that = (PublicBicycleRenTIdinfo) o;
            return new EqualsBuilder()
                .append(listTotalCount, that.listTotalCount)
                .append(result, that.result)
                .append(row, that.row)
                .isEquals();
        }

        @Override
        public int hashCode() {
            return new HashCodeBuilder(17, 37)
                .append(listTotalCount)
                .append(result)
                .append(row)
                .toHashCode();
        }

        @Override
        public String toString() {
            return new ToStringBuilder(this)
                .append("listTotalCount", listTotalCount)
                .append("result", result)
                .append("row", row)
                .toString();
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
                    .append(message, result.message)
                    .isEquals();
            }

            @Override
            public int hashCode() {
                return new HashCodeBuilder(17, 37)
                    .append(code)
                    .append(message)
                    .toHashCode();
            }

            @Override
            public String toString() {
                return new ToStringBuilder(this)
                    .append("code", code)
                    .append("message", message)
                    .toString();
            }
        }

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

            public String getAddrGu() {
                return addrGu;
            }

            public void setAddrGu(String addrGu) {
                this.addrGu = addrGu;
            }

            public String getRentId() {
                return rentId;
            }

            public void setRentId(String rentId) {
                this.rentId = rentId;
            }

            public String getContentId() {
                return contentId;
            }

            public void setContentId(String contentId) {
                this.contentId = contentId;
            }

            public String getContentNm() {
                return contentNm;
            }

            public void setContentNm(String contentNm) {
                this.contentNm = contentNm;
            }

            public String getNewAddr() {
                return newAddr;
            }

            public void setNewAddr(String newAddr) {
                this.newAddr = newAddr;
            }

            public String getCradleCount() {
                return cradleCount;
            }

            public void setCradleCount(String cradleCount) {
                this.cradleCount = cradleCount;
            }

            public Double getLatitude() {
                return latitude;
            }

            public void setLatitude(Double latitude) {
                this.latitude = latitude;
            }

            public Double getLongitude() {
                return longitude;
            }

            public void setLongitude(Double longitude) {
                this.longitude = longitude;
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
                    .append(addrGu, row.addrGu)
                    .append(rentId, row.rentId)
                    .append(contentId, row.contentId)
                    .append(contentNm, row.contentNm)
                    .append(newAddr, row.newAddr)
                    .append(cradleCount, row.cradleCount)
                    .append(latitude, row.latitude)
                    .append(longitude, row.longitude)
                    .isEquals();
            }

            @Override
            public int hashCode() {
                return new HashCodeBuilder(17, 37)
                    .append(addrGu)
                    .append(rentId)
                    .append(contentId)
                    .append(contentNm)
                    .append(newAddr)
                    .append(cradleCount)
                    .append(latitude)
                    .append(longitude)
                    .toHashCode();
            }

            @Override
            public String toString() {
                return new ToStringBuilder(this)
                    .append("addrGu", addrGu)
                    .append("rentId", rentId)
                    .append("contentId", contentId)
                    .append("contentNm", contentNm)
                    .append("newAddr", newAddr)
                    .append("cradleCount", cradleCount)
                    .append("latitude", latitude)
                    .append("longitude", longitude)
                    .toString();
            }
        }
    }
}
