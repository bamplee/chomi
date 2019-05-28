package com.bamplee.chomi.api.datatool.odsay.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;
import org.apache.commons.lang3.builder.ToStringBuilder;

import java.util.List;


public class OdSayLoadLaneResponse {
    private Result result;

    public Result getResult() {
        return result;
    }

    public void setResult(Result result) {
        this.result = result;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        OdSayLoadLaneResponse that = (OdSayLoadLaneResponse) o;
        return new EqualsBuilder()
            .append(result, that.result)
            .isEquals();
    }

    @Override
    public int hashCode() {
        return new HashCodeBuilder(17, 37)
            .append(result)
            .toHashCode();
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this)
            .append("result", result)
            .toString();
    }

    public static class Result {
        private List<Lane> lane;
        private Boundary boundary;

        public List<Lane> getLane() {
            return lane;
        }

        public void setLane(List<Lane> lane) {
            this.lane = lane;
        }

        public Boundary getBoundary() {
            return boundary;
        }

        public void setBoundary(Boundary boundary) {
            this.boundary = boundary;
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
                .append(lane, result.lane)
                .append(boundary, result.boundary)
                .isEquals();
        }

        @Override
        public int hashCode() {
            return new HashCodeBuilder(17, 37)
                .append(lane)
                .append(boundary)
                .toHashCode();
        }

        @Override
        public String toString() {
            return new ToStringBuilder(this)
                .append("lane", lane)
                .append("boundary", boundary)
                .toString();
        }

        public static class Lane {
            @JsonProperty("class")
            private Integer clazz;
            private Integer type;
            private List<Section> section;

            public Integer getClazz() {
                return clazz;
            }

            public void setClazz(Integer clazz) {
                this.clazz = clazz;
            }

            public Integer getType() {
                return type;
            }

            public void setType(Integer type) {
                this.type = type;
            }

            public List<Section> getSection() {
                return section;
            }

            public void setSection(List<Section> section) {
                this.section = section;
            }

            @Override
            public boolean equals(Object o) {
                if (this == o) {
                    return true;
                }
                if (o == null || getClass() != o.getClass()) {
                    return false;
                }
                Lane lane = (Lane) o;
                return new EqualsBuilder()
                    .append(clazz, lane.clazz)
                    .append(type, lane.type)
                    .append(section, lane.section)
                    .isEquals();
            }

            @Override
            public int hashCode() {
                return new HashCodeBuilder(17, 37)
                    .append(clazz)
                    .append(type)
                    .append(section)
                    .toHashCode();
            }

            @Override
            public String toString() {
                return new ToStringBuilder(this)
                    .append("clazz", clazz)
                    .append("type", type)
                    .append("section", section)
                    .toString();
            }
        }

        public static class Section {
            private List<GraphPos> graphPos;

            public List<GraphPos> getGraphPos() {
                return graphPos;
            }

            public void setGraphPos(List<GraphPos> graphPos) {
                this.graphPos = graphPos;
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
                    .append(graphPos, section.graphPos)
                    .isEquals();
            }

            @Override
            public int hashCode() {
                return new HashCodeBuilder(17, 37)
                    .append(graphPos)
                    .toHashCode();
            }

            @Override
            public String toString() {
                return new ToStringBuilder(this)
                    .append("graphPos", graphPos)
                    .toString();
            }

            public static class GraphPos {
                private Double x;
                private Double y;

                public Double getX() {
                    return x;
                }

                public void setX(Double x) {
                    this.x = x;
                }

                public Double getY() {
                    return y;
                }

                public void setY(Double y) {
                    this.y = y;
                }

                @Override
                public boolean equals(Object o) {
                    if (this == o) {
                        return true;
                    }
                    if (o == null || getClass() != o.getClass()) {
                        return false;
                    }
                    GraphPos graphPos = (GraphPos) o;
                    return new EqualsBuilder()
                        .append(x, graphPos.x)
                        .append(y, graphPos.y)
                        .isEquals();
                }

                @Override
                public int hashCode() {
                    return new HashCodeBuilder(17, 37)
                        .append(x)
                        .append(y)
                        .toHashCode();
                }

                @Override
                public String toString() {
                    return new ToStringBuilder(this)
                        .append("x", x)
                        .append("y", y)
                        .toString();
                }
            }
        }


        public static class Boundary {
            private Double left;
            private Double top;
            private Double right;
            private Double bottom;

            public Double getLeft() {
                return left;
            }

            public void setLeft(Double left) {
                this.left = left;
            }

            public Double getTop() {
                return top;
            }

            public void setTop(Double top) {
                this.top = top;
            }

            public Double getRight() {
                return right;
            }

            public void setRight(Double right) {
                this.right = right;
            }

            public Double getBottom() {
                return bottom;
            }

            public void setBottom(Double bottom) {
                this.bottom = bottom;
            }

            @Override
            public boolean equals(Object o) {
                if (this == o) {
                    return true;
                }
                if (o == null || getClass() != o.getClass()) {
                    return false;
                }
                Boundary boundary = (Boundary) o;
                return new EqualsBuilder()
                    .append(left, boundary.left)
                    .append(top, boundary.top)
                    .append(right, boundary.right)
                    .append(bottom, boundary.bottom)
                    .isEquals();
            }

            @Override
            public int hashCode() {
                return new HashCodeBuilder(17, 37)
                    .append(left)
                    .append(top)
                    .append(right)
                    .append(bottom)
                    .toHashCode();
            }

            @Override
            public String toString() {
                return new ToStringBuilder(this)
                    .append("left", left)
                    .append("top", top)
                    .append("right", right)
                    .append("bottom", bottom)
                    .toString();
            }
        }
    }
}
