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
            distance: 12117.830189421165,
            jibun_address: '서울특별시 강남구 수서동 214-3',
            name: '수서역 수서평택고속선',
            phone_number: '1800-1472',
            road_address: '서울특별시 강남구 밤고개로 99 수서역사',
            sessionId: '0E_D72oBe9kwkY1_OQRw',
            x: '127.1043773',
            y: '37.4855438'
        };
    };

    route = autorun(() => {
        if (this.departure && this.destination) {
            this.root.routeStore.course();
        }
    });
}