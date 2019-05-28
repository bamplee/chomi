package com.bamplee.chomi.api.datatool.odsay.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;
import org.apache.commons.lang3.builder.ToStringBuilder;

import java.util.List;


public class OdSaySearchPubTransPathResponse {
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
        OdSaySearchPubTransPathResponse that = (OdSaySearchPubTransPathResponse) o;
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
        @JsonProperty("path")
        private List<Path> pathList;
        // 결과 구분 (도시내 or 도시간 직통 or 도시간 환승), 0-도시내, 1-도시간 직통, 2-도시간 환승
        private String searchType;
        // 출발지 반경
        private Integer startRadius;
        // 도착지 반경
        private Integer endRadius;
        // 지하철 결과 개수
        private Integer subwayCount;
        // 버스 결과 개수
        private Integer busCount;
        // “버스+지하철” 결과 개수
        private Integer subwayBusCount;
        // 출발지(SX, SY)와 도착지(EX, EY)의 직선 거리(미터)
        private Integer pointDistance;
        // 도시간 "직통" 탐색 결과 유무(환승 X), 0-False, 1-True
        private Integer outTrafficCheck;

        public List<Path> getPathList() {
            return pathList;
        }

        public void setPathList(List<Path> pathList) {
            this.pathList = pathList;
        }

        public String getSearchType() {
            return searchType;
        }

        public void setSearchType(String searchType) {
            this.searchType = searchType;
        }

        public Integer getStartRadius() {
            return startRadius;
        }

        public void setStartRadius(Integer startRadius) {
            this.startRadius = startRadius;
        }

        public Integer getEndRadius() {
            return endRadius;
        }

        public void setEndRadius(Integer endRadius) {
            this.endRadius = endRadius;
        }

        public Integer getSubwayCount() {
            return subwayCount;
        }

        public void setSubwayCount(Integer subwayCount) {
            this.subwayCount = subwayCount;
        }

        public Integer getBusCount() {
            return busCount;
        }

        public void setBusCount(Integer busCount) {
            this.busCount = busCount;
        }

        public Integer getSubwayBusCount() {
            return subwayBusCount;
        }

        public void setSubwayBusCount(Integer subwayBusCount) {
            this.subwayBusCount = subwayBusCount;
        }

        public Integer getPointDistance() {
            return pointDistance;
        }

        public void setPointDistance(Integer pointDistance) {
            this.pointDistance = pointDistance;
        }

        public Integer getOutTrafficCheck() {
            return outTrafficCheck;
        }

        public void setOutTrafficCheck(Integer outTrafficCheck) {
            this.outTrafficCheck = outTrafficCheck;
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
                .append(pathList, result.pathList)
                .append(searchType, result.searchType)
                .append(startRadius, result.startRadius)
                .append(endRadius, result.endRadius)
                .append(subwayCount, result.subwayCount)
                .append(busCount, result.busCount)
                .append(subwayBusCount, result.subwayBusCount)
                .append(pointDistance, result.pointDistance)
                .append(outTrafficCheck, result.outTrafficCheck)
                .isEquals();
        }

        @Override
        public int hashCode() {
            return new HashCodeBuilder(17, 37)
                .append(pathList)
                .append(searchType)
                .append(startRadius)
                .append(endRadius)
                .append(subwayCount)
                .append(busCount)
                .append(subwayBusCount)
                .append(pointDistance)
                .append(outTrafficCheck)
                .toHashCode();
        }

        @Override
        public String toString() {
            return new ToStringBuilder(this)
                .append("pathList", pathList)
                .append("searchType", searchType)
                .append("startRadius", startRadius)
                .append("endRadius", endRadius)
                .append("subwayCount", subwayCount)
                .append("busCount", busCount)
                .append("subwayBusCount", subwayBusCount)
                .append("pointDistance", pointDistance)
                .append("outTrafficCheck", outTrafficCheck)
                .toString();
        }

        public static class Path {
            // 결과 종류, 1-지하철, 2-버스, 3-버스+지하철
            private Integer pathType;
            @JsonProperty("subPath")
            // 이동 교통 수단 정보 확장 노드
            private List<SubPath> subPathList;
            // 요약 정보 확장 노드
            private Info info;

            public Integer getPathType() {
                return pathType;
            }

            public void setPathType(Integer pathType) {
                this.pathType = pathType;
            }

            public List<SubPath> getSubPathList() {
                return subPathList;
            }

            public void setSubPathList(List<SubPath> subPathList) {
                this.subPathList = subPathList;
            }

            public Info getInfo() {
                return info;
            }

            public void setInfo(Info info) {
                this.info = info;
            }

            @Override
            public boolean equals(Object o) {
                if (this == o) {
                    return true;
                }
                if (o == null || getClass() != o.getClass()) {
                    return false;
                }
                Path path = (Path) o;
                return new EqualsBuilder()
                    .append(pathType, path.pathType)
                    .append(subPathList, path.subPathList)
                    .append(info, path.info)
                    .isEquals();
            }

            @Override
            public int hashCode() {
                return new HashCodeBuilder(17, 37)
                    .append(pathType)
                    .append(subPathList)
                    .append(info)
                    .toHashCode();
            }

            @Override
            public String toString() {
                return new ToStringBuilder(this)
                    .append("pathType", pathType)
                    .append("subPathList", subPathList)
                    .append("info", info)
                    .toString();
            }

            public static class SubPath {
                // 이동 수단 종류 (도보, 버스, 지하철), 1-지하철, 2-버스, 3-도보
                private Integer trafficType;
                // 이동 거리
                private Integer distance;
                // 이동 소요 시간
                private Integer sectionTime;
                // 교통 수단 정보 확장 노드
                private List<Lane> lane;
                // 이동 역 수
                private Integer stationCount;
                // 경로 상세구간 정보 확장 노드
                private PassStopList passStopList;
                // 방면 정보 (지하철인 경우에만 필수)
                private String way;
                // 방면 정보 코드(지하철의 첫번째 경로에만 필수), 1 : 상행, 2: 하행
                private Integer wayCode;
                // 지하철 빠른 환승 위치 (지하철인 경우에만 필수)
                private String door;
                // 승차 정류장/역 X 좌표
                private Double startX;
                // 승차 정류장/역 Y 좌표
                private Double startY;
                // 출발 정류장/역 코드
                private Integer startId;
                // 승차 역명
                private String startName;
                // 지하철 나가는 출구 번호(지하철인 경우에만 사용되지만 해당 태그가 없을 수도 있다.)
                private String endExitNo;
                // 지하철 나가는 출구 X좌표(지하철인 경우에만 사용되지만 해당 태그가 없을 수도 있다.)
                private Double endExitX;
                // 지하철 나가는 출구 Y좌표(지하철인 경우에만 사용되지만 해당 태그가 없을 수도 있다.)
                private Double endExitY;
                // 도착역 X 좌표
                private Double endX;
                // 도착역 Y 좌표
                private Double endY;
                @JsonProperty("endID")
                // 도착역 id
                private Integer endId;
                // 도착역명
                private String endName;

                public Integer getTrafficType() {
                    return trafficType;
                }

                public void setTrafficType(Integer trafficType) {
                    this.trafficType = trafficType;
                }

                public Integer getDistance() {
                    return distance;
                }

                public void setDistance(Integer distance) {
                    this.distance = distance;
                }

                public Integer getSectionTime() {
                    return sectionTime;
                }

                public void setSectionTime(Integer sectionTime) {
                    this.sectionTime = sectionTime;
                }

                public List<Lane> getLane() {
                    return lane;
                }

                public void setLane(List<Lane> lane) {
                    this.lane = lane;
                }

                public Integer getStationCount() {
                    return stationCount;
                }

                public void setStationCount(Integer stationCount) {
                    this.stationCount = stationCount;
                }

                public PassStopList getPassStopList() {
                    return passStopList;
                }

                public void setPassStopList(PassStopList passStopList) {
                    this.passStopList = passStopList;
                }

                public String getWay() {
                    return way;
                }

                public void setWay(String way) {
                    this.way = way;
                }

                public Integer getWayCode() {
                    return wayCode;
                }

                public void setWayCode(Integer wayCode) {
                    this.wayCode = wayCode;
                }

                public String getDoor() {
                    return door;
                }

                public void setDoor(String door) {
                    this.door = door;
                }

                public Double getStartX() {
                    return startX;
                }

                public void setStartX(Double startX) {
                    this.startX = startX;
                }

                public Double getStartY() {
                    return startY;
                }

                public void setStartY(Double startY) {
                    this.startY = startY;
                }

                public Integer getStartId() {
                    return startId;
                }

                public void setStartId(Integer startId) {
                    this.startId = startId;
                }

                public String getStartName() {
                    return startName;
                }

                public void setStartName(String startName) {
                    this.startName = startName;
                }

                public String getEndExitNo() {
                    return endExitNo;
                }

                public void setEndExitNo(String endExitNo) {
                    this.endExitNo = endExitNo;
                }

                public Double getEndExitX() {
                    return endExitX;
                }

                public void setEndExitX(Double endExitX) {
                    this.endExitX = endExitX;
                }

                public Double getEndExitY() {
                    return endExitY;
                }

                public void setEndExitY(Double endExitY) {
                    this.endExitY = endExitY;
                }

                public Double getEndX() {
                    return endX;
                }

                public void setEndX(Double endX) {
                    this.endX = endX;
                }

                public Double getEndY() {
                    return endY;
                }

                public void setEndY(Double endY) {
                    this.endY = endY;
                }

                public Integer getEndId() {
                    return endId;
                }

                public void setEndId(Integer endId) {
                    this.endId = endId;
                }

                public String getEndName() {
                    return endName;
                }

                public void setEndName(String endName) {
                    this.endName = endName;
                }

                @Override
                public boolean equals(Object o) {
                    if (this == o) {
                        return true;
                    }
                    if (o == null || getClass() != o.getClass()) {
                        return false;
                    }
                    SubPath subPath = (SubPath) o;
                    return new EqualsBuilder()
                        .append(trafficType, subPath.trafficType)
                        .append(distance, subPath.distance)
                        .append(sectionTime, subPath.sectionTime)
                        .append(lane, subPath.lane)
                        .append(stationCount, subPath.stationCount)
                        .append(passStopList, subPath.passStopList)
                        .append(way, subPath.way)
                        .append(wayCode, subPath.wayCode)
                        .append(door, subPath.door)
                        .append(startX, subPath.startX)
                        .append(startY, subPath.startY)
                        .append(startId, subPath.startId)
                        .append(startName, subPath.startName)
                        .append(endExitNo, subPath.endExitNo)
                        .append(endExitX, subPath.endExitX)
                        .append(endExitY, subPath.endExitY)
                        .append(endX, subPath.endX)
                        .append(endY, subPath.endY)
                        .append(endId, subPath.endId)
                        .append(endName, subPath.endName)
                        .isEquals();
                }

                @Override
                public int hashCode() {
                    return new HashCodeBuilder(17, 37)
                        .append(trafficType)
                        .append(distance)
                        .append(sectionTime)
                        .append(lane)
                        .append(stationCount)
                        .append(passStopList)
                        .append(way)
                        .append(wayCode)
                        .append(door)
                        .append(startX)
                        .append(startY)
                        .append(startId)
                        .append(startName)
                        .append(endExitNo)
                        .append(endExitX)
                        .append(endExitY)
                        .append(endX)
                        .append(endY)
                        .append(endId)
                        .append(endName)
                        .toHashCode();
                }

                @Override
                public String toString() {
                    return new ToStringBuilder(this)
                        .append("trafficType", trafficType)
                        .append("distance", distance)
                        .append("sectionTime", sectionTime)
                        .append("lane", lane)
                        .append("stationCount", stationCount)
                        .append("passStopList", passStopList)
                        .append("way", way)
                        .append("wayCode", wayCode)
                        .append("door", door)
                        .append("startX", startX)
                        .append("startY", startY)
                        .append("startId", startId)
                        .append("startName", startName)
                        .append("endExitNo", endExitNo)
                        .append("endExitX", endExitX)
                        .append("endExitY", endExitY)
                        .append("endX", endX)
                        .append("endY", endY)
                        .append("endId", endId)
                        .append("endName", endName)
                        .toString();
                }

                public static class Lane {
                    // 지하철 노선명 (지하철인 경우에만 필수)
                    private String name;
                    // 버스 번호 (버스인 경우에만 필수)
                    private String busNo;
                    // 버스 타입 (버스인 경우에만 필수,최하단 참조)
                    private String type;
                    // 버스 코드 (버스인 경우에만 필수)
                    private String busId;
                    // 지하철 노선 번호 (지하철인 경우에만 필수)
                    private Integer subwayCode;
                    // 지하철 도시코드 (지하철인 경우에만 필수)
                    private Integer subwayCityCode;

                    public String getName() {
                        return name;
                    }

                    public void setName(String name) {
                        this.name = name;
                    }

                    public String getBusNo() {
                        return busNo;
                    }

                    public void setBusNo(String busNo) {
                        this.busNo = busNo;
                    }

                    public String getType() {
                        return type;
                    }

                    public void setType(String type) {
                        this.type = type;
                    }

                    public String getBusId() {
                        return busId;
                    }

                    public void setBusId(String busId) {
                        this.busId = busId;
                    }

                    public Integer getSubwayCode() {
                        return subwayCode;
                    }

                    public void setSubwayCode(Integer subwayCode) {
                        this.subwayCode = subwayCode;
                    }

                    public Integer getSubwayCityCode() {
                        return subwayCityCode;
                    }

                    public void setSubwayCityCode(Integer subwayCityCode) {
                        this.subwayCityCode = subwayCityCode;
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
                            .append(name, lane.name)
                            .append(busNo, lane.busNo)
                            .append(type, lane.type)
                            .append(busId, lane.busId)
                            .append(subwayCode, lane.subwayCode)
                            .append(subwayCityCode, lane.subwayCityCode)
                            .isEquals();
                    }

                    @Override
                    public int hashCode() {
                        return new HashCodeBuilder(17, 37)
                            .append(name)
                            .append(busNo)
                            .append(type)
                            .append(busId)
                            .append(subwayCode)
                            .append(subwayCityCode)
                            .toHashCode();
                    }

                    @Override
                    public String toString() {
                        return new ToStringBuilder(this)
                            .append("name", name)
                            .append("busNo", busNo)
                            .append("type", type)
                            .append("busId", busId)
                            .append("subwayCode", subwayCode)
                            .append("subwayCityCode", subwayCityCode)
                            .toString();
                    }
                }

                
                public static class PassStopList {
                    // 정류장 정보 그룹노드
                    private List<Station> stations;

                    public List<Station> getStations() {
                        return stations;
                    }

                    public void setStations(List<Station> stations) {
                        this.stations = stations;
                    }

                    @Override
                    public boolean equals(Object o) {
                        if (this == o) {
                            return true;
                        }
                        if (o == null || getClass() != o.getClass()) {
                            return false;
                        }
                        PassStopList that = (PassStopList) o;
                        return new EqualsBuilder()
                            .append(stations, that.stations)
                            .isEquals();
                    }

                    @Override
                    public int hashCode() {
                        return new HashCodeBuilder(17, 37)
                            .append(stations)
                            .toHashCode();
                    }

                    @Override
                    public String toString() {
                        return new ToStringBuilder(this)
                            .append("stations", stations)
                            .toString();
                    }

                    public static class Station {
                        // 정류장 순번
                        private Integer index;
                        // 정류장 명칭
                        private String stationName;
                        @JsonProperty("stationID")
                        // 정류장 ID
                        private Integer stationId;
                        // 정류장 X좌표
                        private Double x;
                        // 정류장 Y좌표
                        private Double y;

                        public Integer getIndex() {
                            return index;
                        }

                        public void setIndex(Integer index) {
                            this.index = index;
                        }

                        public String getStationName() {
                            return stationName;
                        }

                        public void setStationName(String stationName) {
                            this.stationName = stationName;
                        }

                        public Integer getStationId() {
                            return stationId;
                        }

                        public void setStationId(Integer stationId) {
                            this.stationId = stationId;
                        }

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
                            Station station = (Station) o;
                            return new EqualsBuilder()
                                .append(index, station.index)
                                .append(stationName, station.stationName)
                                .append(stationId, station.stationId)
                                .append(x, station.x)
                                .append(y, station.y)
                                .isEquals();
                        }

                        @Override
                        public int hashCode() {
                            return new HashCodeBuilder(17, 37)
                                .append(index)
                                .append(stationName)
                                .append(stationId)
                                .append(x)
                                .append(y)
                                .toHashCode();
                        }

                        @Override
                        public String toString() {
                            return new ToStringBuilder(this)
                                .append("index", index)
                                .append("stationName", stationName)
                                .append("stationId", stationId)
                                .append("x", x)
                                .append("y", y)
                                .toString();
                        }
                    }
                }
            }
        }

        
        public static class Info {
            // 경로그래프 정보를 호출하기 위한 파라미터 값
            private String mapObj;
            // 요금
            private Integer payment;
            // 버스 환승 카운트
            private Integer busTransitCount;
            // 지하철 환승 카운트
            private Integer subwayTransitCount;
            // 버스 정류장 합
            private Integer busStationCount;
            // 지하철 정류장 합
            private Integer subwayStationCount;
            private Integer totalStationCount;
            // 총 소요시간
            private Integer totalTime;
            // 총 도보 이동 거리
            private Integer totalWalk;
            // 도보를 제외한 총 이동 거리
            private Integer trafficDistance;
            // 총 거리
            private Integer totalDistance;
            // 최초 출발역/정류장
            private String firstStartStation;
            // 최종 도착역/정류장
            private String lastEndStation;
            private Integer totalWalkTime;

            public String getMapObj() {
                return mapObj;
            }

            public void setMapObj(String mapObj) {
                this.mapObj = mapObj;
            }

            public Integer getPayment() {
                return payment;
            }

            public void setPayment(Integer payment) {
                this.payment = payment;
            }

            public Integer getBusTransitCount() {
                return busTransitCount;
            }

            public void setBusTransitCount(Integer busTransitCount) {
                this.busTransitCount = busTransitCount;
            }

            public Integer getSubwayTransitCount() {
                return subwayTransitCount;
            }

            public void setSubwayTransitCount(Integer subwayTransitCount) {
                this.subwayTransitCount = subwayTransitCount;
            }

            public Integer getBusStationCount() {
                return busStationCount;
            }

            public void setBusStationCount(Integer busStationCount) {
                this.busStationCount = busStationCount;
            }

            public Integer getSubwayStationCount() {
                return subwayStationCount;
            }

            public void setSubwayStationCount(Integer subwayStationCount) {
                this.subwayStationCount = subwayStationCount;
            }

            public Integer getTotalStationCount() {
                return totalStationCount;
            }

            public void setTotalStationCount(Integer totalStationCount) {
                this.totalStationCount = totalStationCount;
            }

            public Integer getTotalTime() {
                return totalTime;
            }

            public void setTotalTime(Integer totalTime) {
                this.totalTime = totalTime;
            }

            public Integer getTotalWalk() {
                return totalWalk;
            }

            public void setTotalWalk(Integer totalWalk) {
                this.totalWalk = totalWalk;
            }

            public Integer getTrafficDistance() {
                return trafficDistance;
            }

            public void setTrafficDistance(Integer trafficDistance) {
                this.trafficDistance = trafficDistance;
            }

            public Integer getTotalDistance() {
                return totalDistance;
            }

            public void setTotalDistance(Integer totalDistance) {
                this.totalDistance = totalDistance;
            }

            public String getFirstStartStation() {
                return firstStartStation;
            }

            public void setFirstStartStation(String firstStartStation) {
                this.firstStartStation = firstStartStation;
            }

            public String getLastEndStation() {
                return lastEndStation;
            }

            public void setLastEndStation(String lastEndStation) {
                this.lastEndStation = lastEndStation;
            }

            public Integer getTotalWalkTime() {
                return totalWalkTime;
            }

            public void setTotalWalkTime(Integer totalWalkTime) {
                this.totalWalkTime = totalWalkTime;
            }

            @Override
            public boolean equals(Object o) {
                if (this == o) {
                    return true;
                }
                if (o == null || getClass() != o.getClass()) {
                    return false;
                }
                Info info = (Info) o;
                return new EqualsBuilder()
                    .append(mapObj, info.mapObj)
                    .append(payment, info.payment)
                    .append(busTransitCount, info.busTransitCount)
                    .append(subwayTransitCount, info.subwayTransitCount)
                    .append(busStationCount, info.busStationCount)
                    .append(subwayStationCount, info.subwayStationCount)
                    .append(totalStationCount, info.totalStationCount)
                    .append(totalTime, info.totalTime)
                    .append(totalWalk, info.totalWalk)
                    .append(trafficDistance, info.trafficDistance)
                    .append(totalDistance, info.totalDistance)
                    .append(firstStartStation, info.firstStartStation)
                    .append(lastEndStation, info.lastEndStation)
                    .append(totalWalkTime, info.totalWalkTime)
                    .isEquals();
            }

            @Override
            public int hashCode() {
                return new HashCodeBuilder(17, 37)
                    .append(mapObj)
                    .append(payment)
                    .append(busTransitCount)
                    .append(subwayTransitCount)
                    .append(busStationCount)
                    .append(subwayStationCount)
                    .append(totalStationCount)
                    .append(totalTime)
                    .append(totalWalk)
                    .append(trafficDistance)
                    .append(totalDistance)
                    .append(firstStartStation)
                    .append(lastEndStation)
                    .append(totalWalkTime)
                    .toHashCode();
            }

            @Override
            public String toString() {
                return new ToStringBuilder(this)
                    .append("mapObj", mapObj)
                    .append("payment", payment)
                    .append("busTransitCount", busTransitCount)
                    .append("subwayTransitCount", subwayTransitCount)
                    .append("busStationCount", busStationCount)
                    .append("subwayStationCount", subwayStationCount)
                    .append("totalStationCount", totalStationCount)
                    .append("totalTime", totalTime)
                    .append("totalWalk", totalWalk)
                    .append("trafficDistance", trafficDistance)
                    .append("totalDistance", totalDistance)
                    .append("firstStartStation", firstStartStation)
                    .append("lastEndStation", lastEndStation)
                    .append("totalWalkTime", totalWalkTime)
                    .toString();
            }
        }
    }
}
