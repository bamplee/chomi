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
    async* route(departure, destination) {
        this.routeList = yield api.route(departure.x, departure.y, destination.x, destination.y).then(res => res.data.result);
    };

    @asyncAction
    async* loadLane() {
        let info = this.routeList.path[this.routeIndex].info;
        this.graph = yield api.graph(info.mapObj).then(res => res.data.result);
    };

    @computed
    get path() {
        return this.routeList.path ? this.routeList.path : [];
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