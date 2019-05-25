package com.bamplee.chomi.api.datatool.odsay.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class OdSaySearchPubTransPathResponse {
    private Result result;

    @Data
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

        @Data
        public static class Path {
            // 결과 종류, 1-지하철, 2-버스, 3-버스+지하철
            private Integer pathType;
            @JsonProperty("subPath")
            // 이동 교통 수단 정보 확장 노드
            private List<SubPath> subPathList;
            // 요약 정보 확장 노드
            private Info info;

            @Data
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

                @Data
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
                }

                @Data
                public static class PassStopList {
                    // 정류장 정보 그룹노드
                    private List<Station> stations;

                    @Data
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
                    }
                }
            }
        }

        @Data
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
        }
    }
}
