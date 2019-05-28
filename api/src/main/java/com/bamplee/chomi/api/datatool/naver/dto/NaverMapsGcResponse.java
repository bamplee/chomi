package com.bamplee.chomi.api.datatool.naver.dto;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;
import org.apache.commons.lang3.builder.ToStringBuilder;

public class NaverMapsGcResponse {
    private Status status;
    private Result[] results;

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public Result[] getResults() {
        return results;
    }

    public void setResults(Result[] results) {
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
        NaverMapsGcResponse that = (NaverMapsGcResponse) o;
        return new EqualsBuilder()
            .append(status, that.status)
            .append(results, that.results)
            .isEquals();
    }

    @Override
    public int hashCode() {
        return new HashCodeBuilder(17, 37)
            .append(status)
            .append(results)
            .toHashCode();
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this)
            .append("status", status)
            .append("results", results)
            .toString();
    }

    public static class Status {
        private Integer code;
        private String name;
        private String message;

        public Integer getCode() {
            return code;
        }

        public void setCode(Integer code) {
            this.code = code;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
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
            Status status = (Status) o;
            return new EqualsBuilder()
                .append(code, status.code)
                .append(name, status.name)
                .append(message, status.message)
                .isEquals();
        }

        @Override
        public int hashCode() {
            return new HashCodeBuilder(17, 37)
                .append(code)
                .append(name)
                .append(message)
                .toHashCode();
        }

        @Override
        public String toString() {
            return new ToStringBuilder(this)
                .append("code", code)
                .append("name", name)
                .append("message", message)
                .toString();
        }
    }

    public static class Result {
        private String name;
        private Code code;
        private Region region;

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public Code getCode() {
            return code;
        }

        public void setCode(Code code) {
            this.code = code;
        }

        public Region getRegion() {
            return region;
        }

        public void setRegion(Region region) {
            this.region = region;
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
                .append(name, result.name)
                .append(code, result.code)
                .append(region, result.region)
                .isEquals();
        }

        @Override
        public int hashCode() {
            return new HashCodeBuilder(17, 37)
                .append(name)
                .append(code)
                .append(region)
                .toHashCode();
        }

        @Override
        public String toString() {
            return new ToStringBuilder(this)
                .append("name", name)
                .append("code", code)
                .append("region", region)
                .toString();
        }

        public static class Code {
            private String id;
            private String type;
            private String mappingId;

            public String getId() {
                return id;
            }

            public void setId(String id) {
                this.id = id;
            }

            public String getType() {
                return type;
            }

            public void setType(String type) {
                this.type = type;
            }

            public String getMappingId() {
                return mappingId;
            }

            public void setMappingId(String mappingId) {
                this.mappingId = mappingId;
            }

            @Override
            public boolean equals(Object o) {
                if (this == o) {
                    return true;
                }
                if (o == null || getClass() != o.getClass()) {
                    return false;
                }
                Code code = (Code) o;
                return new EqualsBuilder()
                    .append(id, code.id)
                    .append(type, code.type)
                    .append(mappingId, code.mappingId)
                    .isEquals();
            }

            @Override
            public int hashCode() {
                return new HashCodeBuilder(17, 37)
                    .append(id)
                    .append(type)
                    .append(mappingId)
                    .toHashCode();
            }

            @Override
            public String toString() {
                return new ToStringBuilder(this)
                    .append("id", id)
                    .append("type", type)
                    .append("mappingId", mappingId)
                    .toString();
            }
        }

        public static class Region {
            private Area area0;
            private Area area1;
            private Area area2;
            private Area area3;
            private Area area4;

            public Area getArea0() {
                return area0;
            }

            public void setArea0(Area area0) {
                this.area0 = area0;
            }

            public Area getArea1() {
                return area1;
            }

            public void setArea1(Area area1) {
                this.area1 = area1;
            }

            public Area getArea2() {
                return area2;
            }

            public void setArea2(Area area2) {
                this.area2 = area2;
            }

            public Area getArea3() {
                return area3;
            }

            public void setArea3(Area area3) {
                this.area3 = area3;
            }

            public Area getArea4() {
                return area4;
            }

            public void setArea4(Area area4) {
                this.area4 = area4;
            }

            @Override
            public boolean equals(Object o) {
                if (this == o) {
                    return true;
                }
                if (o == null || getClass() != o.getClass()) {
                    return false;
                }
                Region region = (Region) o;
                return new EqualsBuilder()
                    .append(area0, region.area0)
                    .append(area1, region.area1)
                    .append(area2, region.area2)
                    .append(area3, region.area3)
                    .append(area4, region.area4)
                    .isEquals();
            }

            @Override
            public int hashCode() {
                return new HashCodeBuilder(17, 37)
                    .append(area0)
                    .append(area1)
                    .append(area2)
                    .append(area3)
                    .append(area4)
                    .toHashCode();
            }

            @Override
            public String toString() {
                return new ToStringBuilder(this)
                    .append("area0", area0)
                    .append("area1", area1)
                    .append("area2", area2)
                    .append("area3", area3)
                    .append("area4", area4)
                    .toString();
            }

            public static class Area {
                private String name;
                private Coords coords;

                public String getName() {
                    return name;
                }

                public void setName(String name) {
                    this.name = name;
                }

                public Coords getCoords() {
                    return coords;
                }

                public void setCoords(Coords coords) {
                    this.coords = coords;
                }

                @Override
                public boolean equals(Object o) {
                    if (this == o) {
                        return true;
                    }
                    if (o == null || getClass() != o.getClass()) {
                        return false;
                    }
                    Area area = (Area) o;
                    return new EqualsBuilder()
                        .append(name, area.name)
                        .append(coords, area.coords)
                        .isEquals();
                }

                @Override
                public int hashCode() {
                    return new HashCodeBuilder(17, 37)
                        .append(name)
                        .append(coords)
                        .toHashCode();
                }

                @Override
                public String toString() {
                    return new ToStringBuilder(this)
                        .append("name", name)
                        .append("coords", coords)
                        .toString();
                }
            }

            public static class Coords {
                private Center center;

                public Center getCenter() {
                    return center;
                }

                public void setCenter(Center center) {
                    this.center = center;
                }

                @Override
                public boolean equals(Object o) {
                    if (this == o) {
                        return true;
                    }
                    if (o == null || getClass() != o.getClass()) {
                        return false;
                    }
                    Coords coords = (Coords) o;
                    return new EqualsBuilder()
                        .append(center, coords.center)
                        .isEquals();
                }

                @Override
                public int hashCode() {
                    return new HashCodeBuilder(17, 37)
                        .append(center)
                        .toHashCode();
                }

                @Override
                public String toString() {
                    return new ToStringBuilder(this)
                        .append("center", center)
                        .toString();
                }

                public static class Center {
                    private String crs;
                    private String x;
                    private String y;

                    public String getCrs() {
                        return crs;
                    }

                    public void setCrs(String crs) {
                        this.crs = crs;
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

                    @Override
                    public boolean equals(Object o) {
                        if (this == o) {
                            return true;
                        }
                        if (o == null || getClass() != o.getClass()) {
                            return false;
                        }
                        Center center = (Center) o;
                        return new EqualsBuilder()
                            .append(crs, center.crs)
                            .append(x, center.x)
                            .append(y, center.y)
                            .isEquals();
                    }

                    @Override
                    public int hashCode() {
                        return new HashCodeBuilder(17, 37)
                            .append(crs)
                            .append(x)
                            .append(y)
                            .toHashCode();
                    }

                    @Override
                    public String toString() {
                        return new ToStringBuilder(this)
                            .append("crs", crs)
                            .append("x", x)
                            .append("y", y)
                            .toString();
                    }
                }
            }
        }
    }
}
