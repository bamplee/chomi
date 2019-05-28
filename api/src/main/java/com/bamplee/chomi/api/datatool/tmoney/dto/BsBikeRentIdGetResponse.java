package com.bamplee.chomi.api.datatool.tmoney.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;
import org.apache.commons.lang3.builder.ToStringBuilder;

public class BsBikeRentIdGetResponse {
    @JsonProperty("tgtEOT_S1_TBEOTM100_DEVInput")
    private Input input;
    @JsonProperty("RENT_ID")
    private String rentId;
    @JsonProperty("tgtEOT_S1_TBEOTM100_DEVOutput")
    private Output output;

    public Input getInput() {
        return input;
    }

    public void setInput(Input input) {
        this.input = input;
    }

    public String getRentId() {
        return rentId;
    }

    public void setRentId(String rentId) {
        this.rentId = rentId;
    }

    public Output getOutput() {
        return output;
    }

    public void setOutput(Output output) {
        this.output = output;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        BsBikeRentIdGetResponse that = (BsBikeRentIdGetResponse) o;
        return new EqualsBuilder()
            .append(input, that.input)
            .append(rentId, that.rentId)
            .append(output, that.output)
            .isEquals();
    }

    @Override
    public int hashCode() {
        return new HashCodeBuilder(17, 37)
            .append(input)
            .append(rentId)
            .append(output)
            .toHashCode();
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this)
            .append("input", input)
            .append("rentId", rentId)
            .append("output", output)
            .toString();
    }

    public static class Input {
        @JsonProperty("RENT_ID")
        private String rentId;

        public String getRentId() {
            return rentId;
        }

        public void setRentId(String rentId) {
            this.rentId = rentId;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) {
                return true;
            }
            if (o == null || getClass() != o.getClass()) {
                return false;
            }
            Input input = (Input) o;
            return new EqualsBuilder()
                .append(rentId, input.rentId)
                .isEquals();
        }

        @Override
        public int hashCode() {
            return new HashCodeBuilder(17, 37)
                .append(rentId)
                .toHashCode();
        }

        @Override
        public String toString() {
            return new ToStringBuilder(this)
                .append("rentId", rentId)
                .toString();
        }
    }

    public static class Output {
        @JsonProperty("results")
        private Place[] results;

        public Place[] getResults() {
            return results;
        }

        public void setResults(Place[] results) {
            this.results = results;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) {
                return true;
            }
            if (o == null || getClass() != o.getClass()) {
                return false;
            }
            Output output = (Output) o;
            return new EqualsBuilder()
                .append(results, output.results)
                .isEquals();
        }

        @Override
        public int hashCode() {
            return new HashCodeBuilder(17, 37)
                .append(results)
                .toHashCode();
        }

        @Override
        public String toString() {
            return new ToStringBuilder(this)
                .append("results", results)
                .toString();
        }

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

            public String getLatitude() {
                return latitude;
            }

            public void setLatitude(String latitude) {
                this.latitude = latitude;
            }

            public String getLongitude() {
                return longitude;
            }

            public void setLongitude(String longitude) {
                this.longitude = longitude;
            }

            public String getEsbCrdt() {
                return esbCrdt;
            }

            public void setEsbCrdt(String esbCrdt) {
                this.esbCrdt = esbCrdt;
            }

            @Override
            public boolean equals(Object o) {
                if (this == o) {
                    return true;
                }
                if (o == null || getClass() != o.getClass()) {
                    return false;
                }
                Place place = (Place) o;
                return new EqualsBuilder()
                    .append(addrGu, place.addrGu)
                    .append(rentId, place.rentId)
                    .append(contentId, place.contentId)
                    .append(contentNm, place.contentNm)
                    .append(newAddr, place.newAddr)
                    .append(cradleCount, place.cradleCount)
                    .append(latitude, place.latitude)
                    .append(longitude, place.longitude)
                    .append(esbCrdt, place.esbCrdt)
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
                    .append(esbCrdt)
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
                    .append("esbCrdt", esbCrdt)
                    .toString();
            }
        }
    }
}
