import {action, computed, observable} from 'mobx';
import {asyncAction} from 'mobx-utils';
import {api} from "../api";

export default class RouteStore {
    @observable routeType = "TOTAL";
    @observable loading = false;
    @observable graph;
    @observable detailPath;
    @observable driveRoute = {};
    @observable pathList = [];
    @observable forecast = {};
    @observable forecastWarning = {};
    @observable useAll = false;
    @observable useRecommend = false;
    @observable useBus = true;
    @observable useSubway = true;
    @observable useBike = true;
    @observable useCar = false;
    @observable sortType = 'time';
    @observable weatherFilter = false;

    constructor(root) {
        this.root = root;
    }

    @action
    handleWeatherFilter = (weatherFilter) => {
        this.weatherFilter = weatherFilter;
    };

    @action
    handleSortType = (sortType) => {
        this.sortType = sortType;
    };

    @action
    handleUseAll = () => {
        this.useAll = true;
        this.useBus = true;
        this.useSubway = true;
        this.useBike = true;
        this.useCar = true;
    };

    @action
    handleUseRecommend = () => {
        this.useRecommend = !this.useRecommend;
    };

    @action
    handleUseBus = () => {
        this.useAll = false;
        if (!this.useCar && !this.useBus && !this.useSubway && !this.useBike) {
            return
        }
        this.useBus = !this.useBus;
        if (this.useCar && this.useBus && this.useSubway && this.useBike) {
            this.useAll = true;
        }
    };

    @action
    handleUseSubway = () => {
        this.useAll = false;
        if (!this.useCar && !this.useBus && !this.useSubway && !this.useBike) {
            return
        }
        this.useSubway = !this.useSubway;
        if (this.useCar && this.useBus && this.useSubway && this.useBike) {
            this.useAll = true;
        }
    };

    @action
    handleUseBike = () => {
        this.useAll = false;
        if (!this.useCar && !this.useBus && !this.useSubway && !this.useBike) {
            return
        }
        this.useBike = !this.useBike;
        if (this.useCar && this.useBus && this.useSubway && this.useBike) {
            this.useAll = true;
        }
    };

    @action
    handleUseCar = () => {
        this.useAll = false;
        if (!this.useCar && !this.useBus && !this.useSubway && !this.useBike) {
            return
        }
        this.useCar = !this.useCar;
        if (this.useCar && this.useBus && this.useSubway && this.useBike) {
            this.useAll = true;
        }
    };

    @action
    handleRouteType = (value) => {
        this.routeType = value;
    };

    @computed
    get getPathList() {
        let pathList = this.pathList;
        if (this.useAll) {
            return pathList;
        } else {
            return pathList.filter(x => this.useBus === x.useBus || this.useBike === x.useBike || this.useSubway === x.useSubway)
                .filter(x => this.useCar === false ? x.useCar === false : true)
                .filter(x => this.useBus === false ? x.useBus === false : true)
                .filter(x => this.useBike === false ? x.useBike === false : true)
                .filter(x => this.useSubway === false ? x.useSubway === false : true)
                /*
                                .filter(x => this.useBus === x.useBus)
                                .filter(x => this.useBike === x.useBike)
                                .filter(x => this.useSubway === x.useSubway)
                */
                .sort((before, after) => {
                    if (this.sortType === 'walk') {
                        return before.subPathList.filter(x => x.subPath !== null ? x.subPath.trafficType === 3 : false).map(x => x.subPath.sectionTime).reduce((a, b) => a + b)
                        <
                        after.subPathList.filter(x => x.subPath !== null ? x.subPath.trafficType === 3 : false).map(x => x.subPath.sectionTime).reduce((a, b) => a + b) ? -1 : 1;
                    } else if (this.sortType === 'transfer') {
                        return before.subPathList.filter(x => x.subPath !== null).length
                        <
                        after.subPathList.filter(x => x.subPath !== null).length ? -1 : 1;
                    } else if (this.sortType === 'weather') {
                        return before.subPathList.filter(x => x.subPath !== null ? x.subPath.trafficType === 3 : false).map(x => x.subPath.sectionTime).reduce((a, b) => a + b)
                        <
                        after.subPathList.filter(x => x.subPath !== null ? x.subPath.trafficType === 3 : false).map(x => x.subPath.sectionTime).reduce((a, b) => a + b) ? -1 : 1;
                    } else {
                        return before.info.totalTime < after.info.totalTime ? -1 : 1
                    }
                })
                .map(x => {
                    if (this.sortType === 'weather') {
                        if(this.forecast.rain) {
                            if(x.subPathList.filter(x => x.bikeParkingRouteInfo !== null).length > 0) {
                                return null;
                            }
                            else {
                                return x;
                            }
                        }
                        else {
                            return x;
                        }
                    } else {
                        return x;
                    }
                })
                .filter(x => x !== null);
            /*
                        return pathList.filter(x => this.useCar === x.useCar
                            && this.useBus === x.useBus
                            && this.useSubway === x.useSubway
                            && this.useBike === x.useBike).sort((a, b) => a.info.totalTime < b.info.totalTime ? -1 : 1);
            */
        }
        /*return this.pathList.filter(x => {
            if (this.useBus === x.useBus) {
                return true;
            } else if (this.routeType === 'SUBWAY') {
                return x.info.busStationCount <= 0;
            } else if (this.routeType === 'BUS') {
                return x.info.subwayStationCount <= 0;
            } else if (this.routeType === 'BUS_AND_SUBWAY') {
                return x.info.subwayStationCount > 0 && x.info.busStationCount > 0;
            } else {
                return true;
            }
        });*/
    }

    @computed
    get getTotalCount() {
        return this.pathList.length;
    }

    @computed
    get getSubwayPathListCount() {
        return this.pathList.filter(x => x.info.busStationCount <= 0).length;
    }

    @computed
    get getBusPathListCount() {
        return this.pathList.filter(x => x.info.subwayStationCount <= 0).length;
    }

    @computed
    get getTraoptimal() {
        return this.driveRoute.route ? this.driveRoute.route.traoptimal[0] ? this.driveRoute.route.traoptimal[0] : null : null;
    };

    @asyncAction
    async* loadLane(idx) {
        let mapObj = this.getPathList[idx].info.mapObj;
        this.detailPath = this.getPathList[idx];
        this.graph = yield api.graph(mapObj).then(res => res.data.result);
    };

    @asyncAction
    async* course() {
        let departure = this.root.searchStore.departure;
        let destination = this.root.searchStore.destination;
        this.loading = true;
        let result = yield api.route(departure.x, departure.y, destination.x, destination.y).then(res => res.data);
        this.routeType = yield 'TOTAL';
        /*
                result.pathList.forEach(path => {
                    for (let i in path.subPathList) {
                        if (path.subPathList[i].parkingRouteInfo) {
                            path.subPathList = path.subPathList.slice(i, path.subPathList.length);
        /!*
                            let parkingInfo = path.subPathList[0].parkingRouteInfo.parkingInfo;
        *!/
                            let traoptimal = path.subPathList[0].parkingRouteInfo.subPathRoute.route.traoptimal[0];
                            path.info.totalTime = path.subPathList.map(x => x.subPath.sectionTime).reduce((a, b) => a + b) + Math.floor(traoptimal.summary.duration / 60000);
        /!*
                            path.info.payment += traoptimal.summary.fuelPrice;
        *!/
                            break;
                        }
                    }
                });
        */
        this.driveRoute = result.driveRoute;
        this.pathList = result.pathList.sort((a, b) => a.info.totalTime < b.info.totalTime ? -1 : 1);
        this.forecastWarning = result.forecastWarning;
        this.forecast = result.forecast;
        this.loading = yield false;
    };
}