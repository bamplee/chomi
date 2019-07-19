package com.bamplee.chomi.api.application;

import com.bamplee.chomi.api.datatool.naver.dto.NaverMapsDirectionDrivingResponse;
import com.bamplee.chomi.api.datatool.odsay.dto.OdSaySearchPubTransPathResponse.Result.Info;
import com.bamplee.chomi.api.datatool.odsay.dto.OdSaySearchPubTransPathResponse.Result.Path.SubPath;
import com.bamplee.chomi.api.datatool.openweathermap.dto.ForecastResponse;
import com.bamplee.chomi.api.datatool.seoul.dto.ForecastWarningResponse;
import com.bamplee.chomi.api.infrastructure.persistence.jpa.entity.BikeParkingInfo;
import com.bamplee.chomi.api.infrastructure.persistence.jpa.entity.ParkingInfo;

import java.util.List;

public class RouteResponse {
    private ForecastWarningResponse.Data.Row forecastWarning;
    private ForecastResponse.Item forecast;
    private NaverMapsDirectionDrivingResponse driveRoute;
    private List<Path> pathList;

    public ForecastWarningResponse.Data.Row getForecastWarning() {
        return forecastWarning;
    }

    public void setForecastWarning(ForecastWarningResponse.Data.Row forecastWarning) {
        this.forecastWarning = forecastWarning;
    }

    public ForecastResponse.Item getForecast() {
        return forecast;
    }

    public void setForecast(ForecastResponse.Item forecast) {
        this.forecast = forecast;
    }

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
        private Boolean useBus;
        private Boolean useSubway;
        private Boolean useBike;
        private Boolean useCar;
        private Integer pathType;
        private List<SubPathInfo> subPathList;
        private Info info;

        public Boolean getUseBus() {
            return useBus;
        }

        public void setUseBus(Boolean useBus) {
            this.useBus = useBus;
        }

        public Boolean getUseSubway() {
            return useSubway;
        }

        public void setUseSubway(Boolean useSubway) {
            this.useSubway = useSubway;
        }

        public Boolean getUseBike() {
            return useBike;
        }

        public void setUseBike(Boolean useBike) {
            this.useBike = useBike;
        }

        public Boolean getUseCar() {
            return useCar;
        }

        public void setUseCar(Boolean useCar) {
            this.useCar = useCar;
        }

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
                private Integer totalTime;
                private NaverMapsDirectionDrivingResponse subPathRoute;
                private ParkingInfo parkingInfo;

                public Integer getTotalTime() {
                    return totalTime;
                }

                public void setTotalTime(Integer totalTime) {
                    this.totalTime = totalTime;
                }

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
                private Integer totalTime;
                private NaverMapsDirectionDrivingResponse subPathRoute;
                private BikeParkingInfo startBikeParkingInfo;
                private BikeParkingInfo endBikeParkingInfo;

                public Integer getTotalTime() {
                    return totalTime;
                }

                public void setTotalTime(Integer totalTime) {
                    this.totalTime = totalTime;
                }

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
