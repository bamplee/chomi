import {observable, action, computed} from 'mobx';
import {api} from '../api'
import {asyncAction} from 'mobx-utils';

class RouteStore {
    @observable routeList = [];
    @observable routeIndex = 0;
    @observable graph = {};

    @action decreaseRouteIndex = () => {
        this.routeIndex = this.routeIndex > 0 ? this.routeIndex - 1 : this.routeIndex;
        this.loadLane();
    };

    @action increaseRouteIndex = () => {
        this.routeIndex = this.routeIndex + 1 < this.routeList.path.length ? this.routeIndex + 1 : this.routeIndex;
        this.loadLane();
    };

    @action handleRouteIndex = (index) => {
        this.routeIndex = index;
        this.loadLane();
    };

    @asyncAction
    async * route(departure, destination) {
        let routeList = yield api.route(departure.x, departure.y, destination.x, destination.y).then(res => res.data.result);
        console.log(routeList);
        this.routeList = routeList;
    };

    @asyncAction
    async * loadLane() {
        let info = this.routeList.path[this.routeIndex].info;
        this.graph = yield api.graph(info.mapObj).then(res => res.data.result);
    };

    @computed
    get path() {
        console.log(this.routeList.path);
        return this.routeList.path ? this.routeList.path : [];
    };

    @computed
    get busPath() {
        return this.routeList.path ? this.routeList.path.filter(x => x.info.subwayStationCount === 0) : [];
    };

    @computed
    get subwayPath() {
        return this.routeList.path ? this.routeList.path.filter(x => x.info.busStationCount === 0) : [];
    };

    @computed
    get info() {
        return this.routeList.path ? this.routeList.path[this.routeIndex].info : {};
    };

    @computed
    get subPath() {
        return this.routeList.path ? this.routeList.path[this.routeIndex].subPath : [];
    };
}

export default new RouteStore();