import {action, computed, observable} from 'mobx';
import {asyncAction} from 'mobx-utils';
import {api} from "../api";

class RootStore {
    @observable departure = this.dummyStartPoint();
    @observable departureList = [];
    @observable destination = this.dummyEndPoint();
    @observable destinationList = [];
    @observable routeIndex = 0;
    @observable routeList = [];
    @observable graph = {};

    @action handleDeparture = (departure) => {
        this.departure = departure;
        this.calculateRoute();
    };

    @action handleDestination = (destination) => {
        this.destination = destination;
        this.calculateRoute();
    };

    @action handleRouteIndex = (index) => {
        this.routeIndex = index;
        this.loadLane();
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

    @asyncAction
    async* calculateRoute() {
        let departure = this.departure;
        let destination = this.destination;
        let routeList = yield api.route(departure.x, departure.y, destination.x, destination.y).then(res => res.data.result);
        routeList.path = routeList.path.map(x => {
            x.parking = this.dummyParking();
            return x;
        });
        this.routeList = routeList;
        this.loadLane();
    };

    @asyncAction
    async * loadLane() {
        let info = this.routeList.path[this.routeIndex].info;
        this.graph = yield api.graph(info.mapObj).then(res => res.data.result);
    };

    @computed
    get subPath() {
        return this.routeList.path ? this.routeList.path[this.routeIndex].subPath : [];
    };

    @computed
    get path() {
        return this.routeList.path && this.routeList.path.length > 0 ? this.routeList.path[this.routeIndex] : '';
    };

    @computed
    get summaryPath() {
        return this.routeList.path ? this.routeList.path.length > 2 ? this.routeList.path.slice(0, 2) : this.routeList.path : [];
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

    dummyParking = () => {
        return {
            "PARKING_CODE": "1025717",
            "PARKING_NAME": "양재역환승주차장(시)",
            "ADDR": "서초구 양재동 23-0",
            "PARKING_TYPE": "NW",
            "PARKING_TYPE_NM": "노외 주차장",
            "OPERATION_RULE": "1",
            "OPERATION_RULE_NM": "시간제 주차장",
            "TEL": "",
            "QUE_STATUS": "0",
            "QUE_STATUS_NM": "미연계중",
            "CAPACITY": 894,
            "CUR_PARKING": 0,
            "CUR_PARKING_TIME": "",
            "PAY_YN": "Y",
            "PAY_NM": "유료",
            "NIGHT_FREE_OPEN": "N",
            "NIGHT_FREE_OPEN_NM": "야간 미개방",
            "WEEKDAY_BEGIN_TIME": "0000",
            "WEEKDAY_END_TIME": "2400",
            "WEEKEND_BEGIN_TIME": "0000",
            "WEEKEND_END_TIME": "2400",
            "HOLIDAY_BEGIN_TIME": "0000",
            "HOLIDAY_END_TIME": "2400",
            "SYNC_TIME": "2018-07-23 13:45:03",
            "SATURDAY_PAY_YN": "N",
            "SATURDAY_PAY_NM": "무료",
            "HOLIDAY_PAY_YN": "N",
            "HOLIDAY_PAY_NM": "무료",
            "FULLTIME_MONTHLY": "120000",
            "GRP_PARKNM": "",
            "RATES": 1500,
            "TIME_RATE": 30,
            "ADD_RATES": 500,
            "ADD_TIME_RATE": 10,
            "BUS_RATES": 0,
            "BUS_TIME_RATE": 0,
            "BUS_ADD_TIME_RATE": 0,
            "BUS_ADD_RATES": 0,
            "DAY_MAXIMUM": 20000,
            "LAT": 37.48352522,
            "LNG": 127.03434202,
            "ASSIGN_CODE": "PIS02",
            "ASSIGN_CODE_NM": "미배정,미점유"
        };
    };
}

export default new RootStore();