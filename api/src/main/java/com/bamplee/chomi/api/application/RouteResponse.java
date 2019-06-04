package com.bamplee.chomi.api.application;

import com.bamplee.chomi.api.datatool.naver.dto.NaverMapsDirectionDrivingResponse;
import com.bamplee.chomi.api.datatool.odsay.dto.OdSaySearchPubTransPathResponse.Result.Info;
import com.bamplee.chomi.api.datatool.odsay.dto.OdSaySearchPubTransPathResponse.Result.Path.SubPath;
import com.bamplee.chomi.api.infrastructure.persistence.jpa.entity.ParkingInfo;
import org.apache.commons.lang3.tuple.ImmutablePair;

import java.util.List;

public class RouteResponse {
    private NaverMapsDirectionDrivingResponse driveRoute;
    private List<Path> pathList;

    public static class Path {
        private Integer pathType;
        private List<ImmutablePair<SubPath, List<ImmutablePair<NaverMapsDirectionDrivingResponse, ParkingInfo>>>> subPathList;
        private Info info;

        public Integer getPathType() {
            return pathType;
        }

        public void setPathType(Integer pathType) {
            this.pathType = pathType;
        }

        public List<ImmutablePair<SubPath, List<ImmutablePair<NaverMapsDirectionDrivingResponse, ParkingInfo>>>> getSubPathList() {
            return subPathList;
        }

        public void setSubPathList(List<ImmutablePair<SubPath, List<ImmutablePair<NaverMapsDirectionDrivingResponse, ParkingInfo>>>> subPathList) {
            this.subPathList = subPathList;
        }

        public Info getInfo() {
            return info;
        }

        public void setInfo(Info info) {
            this.info = info;
        }
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
}
