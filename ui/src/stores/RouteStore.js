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
    @observable useAll = true;
    @observable useRecommend = false;
    @observable useBus = false;
    @observable useSubway = false;
    @observable useBike = false;
    @observable useCar = false;

    constructor(root) {
        this.root = root;
    }

    @action
    handleUseAll = () => {
        this.useAll = true;
        this.useBus = false;
        this.useSubway = false;
        this.useBike = false;
    };

    @action
    handleUseRecommend = () => {
        this.useRecommend = !this.useRecommend;
    };

    @action
    handleUseBus = () => {
        this.useAll = false;
        this.useBus = !this.useBus;
        if(!this.useBus && !this.useSubway && !this.useBike) {
            this.useAll = true;
        }
    };

    @action
    handleUseSubway = () => {
        this.useAll = false;
        this.useSubway = !this.useSubway;
        if(!this.useBus && !this.useSubway && !this.useBike) {
            this.useAll = true;
        }
    };

    @action
    handleUseBike = () => {
        this.useAll = false;
        this.useBike = !this.useBike;
        if(!this.useBus && !this.useSubway && !this.useBike) {
            this.useAll = true;
        }
    };

    @action
    handleUseCar = () => {
        this.useCar = !this.useCar;
    };

    @action
    handleRouteType = (value) => {
        this.routeType = value;
    };

    @computed
    get getPathList() {
        let pathList = this.pathList;
        if (this.useCar) {
            pathList = pathList.filter(x => x.useCar === true);
        }
        else {
            pathList = pathList.filter(x => x.useCar === false);
        }
        if (this.useAll) {
            return pathList;
        } else {
            return pathList.filter(x => this.useBus === x.useBus
                && this.useSubway === x.useSubway
                && this.useBike === x.useBike).sort((a, b) => a.info.totalTime < b.info.totalTime ? -1 : 1);
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
    async * loadLane(idx) {
        let mapObj = this.getPathList[idx].info.mapObj;
        this.detailPath = this.getPathList[idx];
        console.log(this.getPathList[idx]);
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