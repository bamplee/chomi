import { observable, action } from 'mobx';
import { api } from '../api'

class SearchStore {
    @observable departure = this.dummyStartPoint();
    @observable destination = this.dummyEndPoint();
    @observable PlaceList = [];
    @observable historyList = [];
    @observable routeList = [];
    @observable routeIndex = 0;

    constructor() {
        if (this.departure.name && this.destination.name) {
            this.route();
        }
    }

    @action swap = () => {
        let temp = this.departure;
        this.departure = this.destination;
        this.destination = temp;
    };

    @action search = (query) => {
        if (query.length === 0) {
        }
        else if (query) {
            api.search(query).then(res => res.data.places).then(placeList => this.PlaceList = placeList);
        }
        else {
            this.PlaceList = [];
        }
    };

    @action route = () => {
        api.route(this.departure.x, this.departure.y, this.destination.x, this.destination.y).then(res => this.routeList = res.data.result);
    };

    @action handleDeparture = (index) => {
        this.departure = this.PlaceList[index];
    };

    @action handleDestination = (index) => {
        this.destination = this.PlaceList[index];
    };

    @action decreaseRouteIndex = () => {
        this.routeIndex = this.routeIndex > 0 ? this.routeIndex - 1 : this.routeIndex;
    };

    @action increaseRouteIndex = () => {
        this.routeIndex = this.routeIndex + 1 < this.routeList.path.length ? this.routeIndex + 1 : this.routeIndex;
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
}

export default new SearchStore();