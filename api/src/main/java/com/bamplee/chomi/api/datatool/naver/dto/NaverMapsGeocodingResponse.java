package com.bamplee.chomi.api.datatool.naver.dto;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;
import org.apache.commons.lang3.builder.ToStringBuilder;

public class NaverMapsGeocodingResponse {
    private String status;
    private Meta meta;
    private Address[] addresses;
    private String errorMessage;

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Meta getMeta() {
        return meta;
    }

    public void setMeta(Meta meta) {
        this.meta = meta;
    }

    public Address[] getAddresses() {
        return addresses;
    }

    public void setAddresses(Address[] addresses) {
        this.addresses = addresses;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        NaverMapsGeocodingResponse that = (NaverMapsGeocodingResponse) o;
        return new EqualsBuilder()
            .append(status, that.status)
            .append(meta, that.meta)
            .append(addresses, that.addresses)
            .append(errorMessage, that.errorMessage)
            .isEquals();
    }

    @Override
    public int hashCode() {
        return new HashCodeBuilder(17, 37)
            .append(status)
            .append(meta)
            .append(addresses)
            .append(errorMessage)
            .toHashCode();
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this)
            .append("status", status)
            .append("meta", meta)
            .append("addresses", addresses)
            .append("errorMessage", errorMessage)
            .toString();
    }

    public static class Meta {
        private Integer totalCount;
        private Integer page;
        private Integer count;

        public Integer getTotalCount() {
            return totalCount;
        }

        public void setTotalCount(Integer totalCount) {
            this.totalCount = totalCount;
        }

        public Integer getPage() {
            return page;
        }

        public void setPage(Integer page) {
            this.page = page;
        }

        public Integer getCount() {
            return count;
        }

        public void setCount(Integer count) {
            this.count = count;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) {
                return true;
            }
            if (o == null || getClass() != o.getClass()) {
                return false;
            }
            Meta meta = (Meta) o;
            return new EqualsBuilder()
                .append(totalCount, meta.totalCount)
                .append(page, meta.page)
                .append(count, meta.count)
                .isEquals();
        }

        @Override
        public int hashCode() {
            return new HashCodeBuilder(17, 37)
                .append(totalCount)
                .append(page)
                .append(count)
                .toHashCode();
        }

        @Override
        public String toString() {
            return new ToStringBuilder(this)
                .append("totalCount", totalCount)
                .append("page", page)
                .append("count", count)
                .toString();
        }
    }

    public static class Address {
        private String roadAddress;
        private String jibunAddress;
        private String englishAddress;
        private Element[] addressElements;
        private String x;
        private String y;
        private Double distance;

        public String getRoadAddress() {
            return roadAddress;
        }

        public void setRoadAddress(String roadAddress) {
            this.roadAddress = roadAddress;
        }

        public String getJibunAddress() {
            return jibunAddress;
        }

        public void setJibunAddress(String jibunAddress) {
            this.jibunAddress = jibunAddress;
        }

        public String getEnglishAddress() {
            return englishAddress;
        }

        public void setEnglishAddress(String englishAddress) {
            this.englishAddress = englishAddress;
        }

        public Element[] getAddressElements() {
            return addressElements;
        }

        public void setAddressElements(Element[] addressElements) {
            this.addressElements = addressElements;
        }

        public String getX() {
            return x;
        }

        public void setX(String x) {
            this.x = x;
        }

        public String getY() {
            return y;
        }

        public void setY(String y) {
            this.y = y;
        }

        public Double getDistance() {
            return distance;
        }

        public void setDistance(Double distance) {
            this.distance = distance;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) {
                return true;
            }
            if (o == null || getClass() != o.getClass()) {
                return false;
            }
            Address address = (Address) o;
            return new EqualsBuilder()
                .append(roadAddress, address.roadAddress)
                .append(jibunAddress, address.jibunAddress)
                .append(englishAddress, address.englishAddress)
                .append(addressElements, address.addressElements)
                .append(x, address.x)
                .append(y, address.y)
                .append(distance, address.distance)
                .isEquals();
        }

        @Override
        public int hashCode() {
            return new HashCodeBuilder(17, 37)
                .append(roadAddress)
                .append(jibunAddress)
                .append(englishAddress)
                .append(addressElements)
                .append(x)
                .append(y)
                .append(distance)
                .toHashCode();
        }

        @Override
        public String toString() {
            return new ToStringBuilder(this)
                .append("roadAddress", roadAddress)
                .append("jibunAddress", jibunAddress)
                .append("englishAddress", englishAddress)
                .append("addressElements", addressElements)
                .append("x", x)
                .append("y", y)
                .append("distance", distance)
                .toString();
        }

        public static class Element {
            private String[] types;
            private String longName;
            private String shortName;
            private String code;

            public String[] getTypes() {
                return types;
            }

            public void setTypes(String[] types) {
                this.types = types;
            }

            public String getLongName() {
                return longName;
            }

            public void setLongName(String longName) {
                this.longName = longName;
            }

            public String getShortName() {
                return shortName;
            }

            public void setShortName(String shortName) {
                this.shortName = shortName;
            }

            public String getCode() {
                return code;
            }

            public void setCode(String code) {
                this.code = code;
            }

            @Override
            public boolean equals(Object o) {
                if (this == o) {
                    return true;
                }
                if (o == null || getClass() != o.getClass()) {
                    return false;
                }
                Element element = (Element) o;
                return new EqualsBuilder()
                    .append(types, element.types)
                    .append(longName, element.longName)
                    .append(shortName, element.shortName)
                    .append(code, element.code)
                    .isEquals();
            }

            @Override
            public int hashCode() {
                return new HashCodeBuilder(17, 37)
                    .append(types)
                    .append(longName)
                    .append(shortName)
                    .append(code)
                    .toHashCode();
            }

            @Override
            public String toString() {
                return new ToStringBuilder(this)
                    .append("types", types)
                    .append("longName", longName)
                    .append("shortName", shortName)
                    .append("code", code)
                    .toString();
            }
        }
    }
}
