package com.bamplee.chomi.api.datatool.naver.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;
import org.apache.commons.lang3.builder.ToStringBuilder;

public class NaverMapsSearchPlacesResponse {
    private String status;
    private Meta meta;
    private Place[] places;
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

    public Place[] getPlaces() {
        return places;
    }

    public void setPlaces(Place[] places) {
        this.places = places;
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
        NaverMapsSearchPlacesResponse that = (NaverMapsSearchPlacesResponse) o;
        return new EqualsBuilder()
            .append(status, that.status)
            .append(meta, that.meta)
            .append(places, that.places)
            .append(errorMessage, that.errorMessage)
            .isEquals();
    }

    @Override
    public int hashCode() {
        return new HashCodeBuilder(17, 37)
            .append(status)
            .append(meta)
            .append(places)
            .append(errorMessage)
            .toHashCode();
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this)
            .append("status", status)
            .append("meta", meta)
            .append("places", places)
            .append("errorMessage", errorMessage)
            .toString();
    }

    public static class Meta {
        private Integer totalCount;
        private Integer count;

        public Integer getTotalCount() {
            return totalCount;
        }

        public void setTotalCount(Integer totalCount) {
            this.totalCount = totalCount;
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
                .append(count, meta.count)
                .isEquals();
        }

        @Override
        public int hashCode() {
            return new HashCodeBuilder(17, 37)
                .append(totalCount)
                .append(count)
                .toHashCode();
        }

        @Override
        public String toString() {
            return new ToStringBuilder(this)
                .append("totalCount", totalCount)
                .append("count", count)
                .toString();
        }
    }

    
    public static class Place {
        private String name;
        @JsonProperty("road_address")
        private String roadAddress;
        @JsonProperty("jibun_address")
        private String jibunAddress;
        @JsonProperty("phone_number")
        private String phoneNumber;
        private String x;
        private String y;
        private Double distance;
        private String sessionId;

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

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

        public String getPhoneNumber() {
            return phoneNumber;
        }

        public void setPhoneNumber(String phoneNumber) {
            this.phoneNumber = phoneNumber;
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

        public String getSessionId() {
            return sessionId;
        }

        public void setSessionId(String sessionId) {
            this.sessionId = sessionId;
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
                .append(name, place.name)
                .append(roadAddress, place.roadAddress)
                .append(jibunAddress, place.jibunAddress)
                .append(phoneNumber, place.phoneNumber)
                .append(x, place.x)
                .append(y, place.y)
                .append(distance, place.distance)
                .append(sessionId, place.sessionId)
                .isEquals();
        }

        @Override
        public int hashCode() {
            return new HashCodeBuilder(17, 37)
                .append(name)
                .append(roadAddress)
                .append(jibunAddress)
                .append(phoneNumber)
                .append(x)
                .append(y)
                .append(distance)
                .append(sessionId)
                .toHashCode();
        }

        @Override
        public String toString() {
            return new ToStringBuilder(this)
                .append("name", name)
                .append("roadAddress", roadAddress)
                .append("jibunAddress", jibunAddress)
                .append("phoneNumber", phoneNumber)
                .append("x", x)
                .append("y", y)
                .append("distance", distance)
                .append("sessionId", sessionId)
                .toString();
        }
    }
}
