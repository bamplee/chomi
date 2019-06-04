package com.bamplee.chomi.api.datatool.naver.dto;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;
import org.apache.commons.lang3.builder.ToStringBuilder;

import java.util.List;
import java.util.Map;

public class NaverMapsDirectionDrivingResponse {
    private Integer code;
    private String message;
    private String currentDateTime;
    private Map<String, List<Route>> route;

    public static class Route {
        private Summary summary;
        private List<Double[]> path;
        private List<Section> section;
        private List<Guide> guide;

        public Summary getSummary() {
            return summary;
        }

        public void setSummary(Summary summary) {
            this.summary = summary;
        }

        public List<Double[]> getPath() {
            return path;
        }

        public void setPath(List<Double[]> path) {
            this.path = path;
        }

        public List<Section> getSection() {
            return section;
        }

        public void setSection(List<Section> section) {
            this.section = section;
        }

        public List<Guide> getGuide() {
            return guide;
        }

        public void setGuide(List<Guide> guide) {
            this.guide = guide;
        }

        public static class Summary {
            private Start start;
            private Goal goal;
            private Integer distance;
            private Integer duration;
            private List<Double[]> bbox;
            private Integer tollFare;
            private Integer taxiFare;
            private Integer fuelPrice;

            public Start getStart() {
                return start;
            }

            public void setStart(Start start) {
                this.start = start;
            }

            public Goal getGoal() {
                return goal;
            }

            public void setGoal(Goal goal) {
                this.goal = goal;
            }

            public Integer getDistance() {
                return distance;
            }

            public void setDistance(Integer distance) {
                this.distance = distance;
            }

            public Integer getDuration() {
                return duration;
            }

            public void setDuration(Integer duration) {
                this.duration = duration;
            }

            public List<Double[]> getBbox() {
                return bbox;
            }

            public void setBbox(List<Double[]> bbox) {
                this.bbox = bbox;
            }

            public Integer getTollFare() {
                return tollFare;
            }

            public void setTollFare(Integer tollFare) {
                this.tollFare = tollFare;
            }

            public Integer getTaxiFare() {
                return taxiFare;
            }

            public void setTaxiFare(Integer taxiFare) {
                this.taxiFare = taxiFare;
            }

            public Integer getFuelPrice() {
                return fuelPrice;
            }

            public void setFuelPrice(Integer fuelPrice) {
                this.fuelPrice = fuelPrice;
            }

            public static class Start {
                private List<Double> location;

                public List<Double> getLocation() {
                    return location;
                }

                public void setLocation(List<Double> location) {
                    this.location = location;
                }
            }

            public static class Goal {
                private List<Double> location;
                private Integer dir;

                public List<Double> getLocation() {
                    return location;
                }

                public void setLocation(List<Double> location) {
                    this.location = location;
                }

                public Integer getDir() {
                    return dir;
                }

                public void setDir(Integer dir) {
                    this.dir = dir;
                }
            }
        }

        public static class Section {
            private Integer pointIndex;
            private Integer pointCount;
            private Integer distance;
            private String name;
            private Integer congestion;
            private Integer speed;

            public Integer getPointIndex() {
                return pointIndex;
            }

            public void setPointIndex(Integer pointIndex) {
                this.pointIndex = pointIndex;
            }

            public Integer getPointCount() {
                return pointCount;
            }

            public void setPointCount(Integer pointCount) {
                this.pointCount = pointCount;
            }

            public Integer getDistance() {
                return distance;
            }

            public void setDistance(Integer distance) {
                this.distance = distance;
            }

            public String getName() {
                return name;
            }

            public void setName(String name) {
                this.name = name;
            }

            public Integer getCongestion() {
                return congestion;
            }

            public void setCongestion(Integer congestion) {
                this.congestion = congestion;
            }

            public Integer getSpeed() {
                return speed;
            }

            public void setSpeed(Integer speed) {
                this.speed = speed;
            }

            @Override
            public boolean equals(Object o) {
                if (this == o) {
                    return true;
                }
                if (o == null || getClass() != o.getClass()) {
                    return false;
                }
                Section section = (Section) o;
                return new EqualsBuilder()
                    .append(pointIndex, section.pointIndex)
                    .append(pointCount, section.pointCount)
                    .append(distance, section.distance)
                    .append(name, section.name)
                    .append(congestion, section.congestion)
                    .append(speed, section.speed)
                    .isEquals();
            }

            @Override
            public int hashCode() {
                return new HashCodeBuilder(17, 37)
                    .append(pointIndex)
                    .append(pointCount)
                    .append(distance)
                    .append(name)
                    .append(congestion)
                    .append(speed)
                    .toHashCode();
            }

            @Override
            public String toString() {
                return new ToStringBuilder(this)
                    .append("pointIndex", pointIndex)
                    .append("pointCount", pointCount)
                    .append("distance", distance)
                    .append("name", name)
                    .append("congestion", congestion)
                    .append("speed", speed)
                    .toString();
            }
        }

        public static class Guide {
            private Integer pointIndex;
            private Integer type;
            private String instructions;
            private Integer distance;
            private Integer duration;

            public Integer getPointIndex() {
                return pointIndex;
            }

            public void setPointIndex(Integer pointIndex) {
                this.pointIndex = pointIndex;
            }

            public Integer getType() {
                return type;
            }

            public void setType(Integer type) {
                this.type = type;
            }

            public String getInstructions() {
                return instructions;
            }

            public void setInstructions(String instructions) {
                this.instructions = instructions;
            }

            public Integer getDistance() {
                return distance;
            }

            public void setDistance(Integer distance) {
                this.distance = distance;
            }

            public Integer getDuration() {
                return duration;
            }

            public void setDuration(Integer duration) {
                this.duration = duration;
            }

            @Override
            public boolean equals(Object o) {
                if (this == o) {
                    return true;
                }
                if (o == null || getClass() != o.getClass()) {
                    return false;
                }
                Guide guide = (Guide) o;
                return new EqualsBuilder()
                    .append(pointIndex, guide.pointIndex)
                    .append(type, guide.type)
                    .append(instructions, guide.instructions)
                    .append(distance, guide.distance)
                    .append(duration, guide.duration)
                    .isEquals();
            }

            @Override
            public int hashCode() {
                return new HashCodeBuilder(17, 37)
                    .append(pointIndex)
                    .append(type)
                    .append(instructions)
                    .append(distance)
                    .append(duration)
                    .toHashCode();
            }

            @Override
            public String toString() {
                return new ToStringBuilder(this)
                    .append("pointIndex", pointIndex)
                    .append("type", type)
                    .append("instructions", instructions)
                    .append("distance", distance)
                    .append("duration", duration)
                    .toString();
            }
        }
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getCurrentDateTime() {
        return currentDateTime;
    }

    public void setCurrentDateTime(String currentDateTime) {
        this.currentDateTime = currentDateTime;
    }

    public Map<String, List<Route>> getRoute() {
        return route;
    }

    public void setRoute(Map<String, List<Route>> route) {
        this.route = route;
    }
}
