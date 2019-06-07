import {action, computed, observable} from 'mobx';
import {asyncAction} from 'mobx-utils';
import {api} from "../api";

export default class RouteStore {
    @observable routeType = "TOTAL";
    @observable loading = false;
    @observable driveRoute = {};
    @observable pathList = [];

    constructor(root) {
        this.root = root;
    }

    @action
    handleRouteType = (value) => {
        this.routeType = value;
    };

    @computed
    get getPathList() {
        return this.pathList.filter(x => {
            if (this.routeType === 'TOTAL') {
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
        });
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

    @asyncAction
    async* course() {
        let departure = this.root.searchStore.departure;
        let destination = this.root.searchStore.destination;
        this.loading = true;
        let result = yield api.route(departure.x, departure.y, destination.x, destination.y).then(res => res.data);
        this.routeType = yield 'TOTAL';
        console.log(result.pathList);
        this.driveRoute = result.driveRoute;
        this.pathList = result.pathList;
        this.loading = yield false;
    };
}