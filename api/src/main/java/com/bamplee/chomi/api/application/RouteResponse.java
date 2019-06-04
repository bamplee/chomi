package com.bamplee.chomi.api.application;

import com.bamplee.chomi.api.datatool.naver.dto.NaverMapsDirectionDrivingResponse;
import com.bamplee.chomi.api.datatool.odsay.dto.OdSaySearchPubTransPathResponse.Result.Info;
import com.bamplee.chomi.api.datatool.odsay.dto.OdSaySearchPubTransPathResponse.Result.Path.SubPath;
import com.bamplee.chomi.api.infrastructure.persistence.jpa.entity.ParkingInfo;
import com.google.common.collect.Lists;

import java.util.List;

public class RouteResponse {
    private NaverMapsDirectionDrivingResponse driveRoute;
    private List<Path> pathList;

    public NaverMapsDirectionDrivingResponse getDriveRoute() {
        return driveRoute;
    }

    public void setDriveRoute(NaverMapsDirectionDrivingResponse driveRoute) {
        this.driveRoute = driveRoute;
    }

    public List<Path> getPathList() {
        return pathList;
    }

    public void setPathList(List<Path> pathList) {
        this.pathList = pathList;
    }

    public static class Path {
        private Integer pathType;
        private List<SubPathInfo> subPathList;
        private Info info;

        public Integer getPathType() {
            return pathType;
        }

        public void setPathType(Integer pathType) {
            this.pathType = pathType;
        }

        public List<SubPathInfo> getSubPathList() {
            return subPathList;
        }

        public void setSubPathList(List<SubPathInfo> subPathList) {
            this.subPathList = subPathList;
        }

        public Info getInfo() {
            return info;
        }

        public void setInfo(Info info) {
            this.info = info;
        }

        public static class SubPathInfo {
            private SubPath subPath;
            private List<ParkingRouteInfo> parkingRouteInfoList;

            public SubPath getSubPath() {
                return subPath;
            }

            public void setSubPath(SubPath subPath) {
                this.subPath = subPath;
            }

            public List<ParkingRouteInfo> getParkingRouteInfoList() {
                return parkingRouteInfoList;
            }

            public void setParkingRouteInfoList(List<ParkingRouteInfo> parkingRouteInfoList) {
                this.parkingRouteInfoList = parkingRouteInfoList;
            }

            public static class ParkingRouteInfo {
                private NaverMapsDirectionDrivingResponse subPathRoute;
                private ParkingInfo parkingInfo;

                public NaverMapsDirectionDrivingResponse getSubPathRoute() {
                    return subPathRoute;
                }

                public void setSubPathRoute(NaverMapsDirectionDrivingResponse subPathRoute) {
                    this.subPathRoute = subPathRoute;
                }

                public ParkingInfo getParkingInfo() {
                    return parkingInfo;
                }

                public void setParkingInfo(ParkingInfo parkingInfo) {
                    this.parkingInfo = parkingInfo;
                }
            }
        }
    }
}
