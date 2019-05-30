import {observable, action, computed} from 'mobx';
import {api} from '../api'
import {asyncAction} from 'mobx-utils';

class RouteStore {
    @observable routeList = [];
    @observable routeIndex = 0;
    @observable graph = {};

    @action decreaseRouteIndex = () => {
        this.routeIndex = this.routeIndex > 0 ? this.routeIndex - 1 : this.routeIndex;
    };

    @action increaseRouteIndex = () => {
        this.routeIndex = this.routeIndex + 1 < this.routeList.path.length ? this.routeIndex + 1 : this.routeIndex;
    };

    @asyncAction
    async* route(departure, destination) {
        let routeList = yield api.route(departure.x, departure.y, destination.x, destination.y).then(res => res.data.result);
        console.log(routeList);
        this.routeList = routeList;
    };

    @asyncAction
    async* loadLane(mapObj) {
        let graph = yield api.graph(mapObj).then(res => res.data.result);
        this.graph = graph;
    };

    @computed
    get path() {
        return this.routeList.path;
    };

    @computed
    get info() {
        return this.routeList.path[this.routeIndex].info;
    };

    @computed
    get subPath() {
        return this.routeList.path[this.routeIndex].subPath;
    };
}

export default new RouteStore();