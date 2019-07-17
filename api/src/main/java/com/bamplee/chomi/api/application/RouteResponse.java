package com.bamplee.chomi.api.application;

import com.bamplee.chomi.api.datatool.naver.dto.NaverMapsDirectionDrivingResponse;
import com.bamplee.chomi.api.datatool.odsay.dto.OdSaySearchPubTransPathResponse.Result.Info;
import com.bamplee.chomi.api.datatool.odsay.dto.OdSaySearchPubTransPathResponse.Result.Path.SubPath;
import com.bamplee.chomi.api.infrastructure.persistence.jpa.entity.BikeParkingInfo;
import com.bamplee.chomi.api.infrastructure.persistence.jpa.entity.ParkingInfo;

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
            private ParkingRouteInfo parkingRouteInfo;
            private BikeParkingRouteInfo bikeParkingRouteInfo;

            public SubPath getSubPath() {
                return subPath;
            }

            public void setSubPath(SubPath subPath) {
                this.subPath = subPath;
            }

            public ParkingRouteInfo getParkingRouteInfo() {
                return parkingRouteInfo;
            }

            public void setParkingRouteInfo(ParkingRouteInfo parkingRouteInfo) {
                this.parkingRouteInfo = parkingRouteInfo;
            }

            public BikeParkingRouteInfo getBikeParkingRouteInfo() {
                return bikeParkingRouteInfo;
            }

            public void setBikeParkingRouteInfo(BikeParkingRouteInfo bikeParkingRouteInfo) {
                this.bikeParkingRouteInfo = bikeParkingRouteInfo;
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

            public static class BikeParkingRouteInfo {
                private NaverMapsDirectionDrivingResponse subPathRoute;
                private BikeParkingInfo startBikeParkingInfo;
                private BikeParkingInfo endBikeParkingInfo;

                public NaverMapsDirectionDrivingResponse getSubPathRoute() {
                    return subPathRoute;
                }

                public void setSubPathRoute(NaverMapsDirectionDrivingResponse subPathRoute) {
                    this.subPathRoute = subPathRoute;
                }

                public BikeParkingInfo getStartBikeParkingInfo() {
                    return startBikeParkingInfo;
                }

                public void setStartBikeParkingInfo(BikeParkingInfo startBikeParkingInfo) {
                    this.startBikeParkingInfo = startBikeParkingInfo;
                }

                public BikeParkingInfo getEndBikeParkingInfo() {
                    return endBikeParkingInfo;
                }

                public void setEndBikeParkingInfo(BikeParkingInfo endBikeParkingInfo) {
                    this.endBikeParkingInfo = endBikeParkingInfo;
                }
            }
        }
    }
}
