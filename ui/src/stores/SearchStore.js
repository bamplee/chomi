import {action, autorun, observable} from 'mobx';
import {asyncAction} from 'mobx-utils';
import {api} from "../api";

export default class SearchStore {
    @observable departure = this.dummyStartPoint();
    @observable destination = this.dummyEndPoint();
    @observable departureList = [];
    @observable destinationList = [];

    constructor(root) {
        this.root = root;
    }

    @action handleDeparture = (departure) => {
        this.departure = departure;
    };

    @action handleDestination = (destination) => {
        this.destination = destination;
    };

    @action handleRouteIndex = (index) => {
        this.routeIndex = index;
    };

    @action swap = () => {
        let temp = this.departure;
        this.departure = this.destination;
        this.destination = temp;
    };

    @action course = () => {
        if (this.departure && this.destination) {
            this.root.routeStore.course();
        }
    };

    @asyncAction
    async* departureSearch(query) {
        if (query) {
            this.departureList = yield api.search(query).then(res => res.data.places).then(placeList => placeList);
        }
    };

    @asyncAction
    async* destinationSearch(query) {
        if (query) {
            this.destinationList = yield api.search(query).then(res => res.data.places).then(placeList => placeList);
        }
    };

    dummyStartPoint = () => {
        return {
            distance: 22744.950016794694,
            jibun_address: '경기도 성남시 분당구 정자동 178-1',
            name: '그린팩토리',
            phone_number: '',
            road_address: '경기도 성남시 분당구 불정로 6 그린팩토리',
            sessionId: 'dezD72oBOAUY6uUlM0gM',
            x: '127.1054328',
            y: '37.3595963',
        };
    };

    dummyEndPoint = () => {
        return {
            "name": "노원역 4호선",
            "x": "127.0634931",
            "y": "37.6563525",
            "distance": 14520.59037026419,
            "sessionId": "QygbHmsBOAUY6uUlN9l0",
            "road_address": "서울특별시 노원구 상계로 69-1",
            "jibun_address": "서울특별시 노원구 상계동 602-5",
            "phone_number": "02-6110-4111"
        };
    };

    route = autorun(() => {
        this.course();
    });
}