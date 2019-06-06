import {observable} from 'mobx';
import {asyncAction} from 'mobx-utils';
import {api} from "../api";

export default class RouteStore {
    @observable driveRoute = {};
    @observable pathList = [];

    constructor(root) {
        this.root = root;
    }

    @asyncAction
    async* course() {
        let departure = this.root.searchStore.departure;
        let destination = this.root.searchStore.destination;
        let result = yield api.route(departure.x, departure.y, destination.x, destination.y).then(res => res.data);
        this.driveRoute = result.driveRoute;
        this.pathList = result.pathList;
    };
}