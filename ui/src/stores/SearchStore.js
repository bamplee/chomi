import {observable, action, computed} from 'mobx';
import {api} from '../api'
import {asyncAction} from 'mobx-utils';

const searchType = {
    DEPARTURE: Object.freeze('departure'),
    DESTINATION: Object.freeze('destination'),
};

class SearchStore {
    @observable departure = this.dummyStartPoint();
    @observable destination = this.dummyEndPoint();
    @observable parking = '';
    @observable departureList = [];
    @observable destinationList = [];
    @observable parkingList = [];
    @observable lastSearchType = searchType.DESTINATION;

    @action handleDeparture = (departure) => {
        this.departure = departure;
        this.parkingList = this.dummyParkingList();
    };

    @action handleDestination = (destination) => {
        this.destination = destination;
        this.parkingList = this.dummyParkingList();
    };

    @action handleParking = (parking) => {
        this.parking = parking;
    };

    @action swap = () => {
        let temp = this.departure;
        this.departure = this.destination;
        this.destination = temp;
    };

    @asyncAction
    async * refreshDepartureSearch() {
        let query = this.departure.name;
        this.lastSearchType = searchType.DEPARTURE;
        if (this.departure) {
            this.departureList = yield api.search(query).then(res => res.data.places).then(placeList => placeList);
        }
    };

    @asyncAction
    async * departureSearch(query) {
        this.lastSearchType = searchType.DEPARTURE;
        if (query) {
            this.departureList = yield api.search(query).then(res => res.data.places).then(placeList => placeList);
        }
    };

    @asyncAction
    async * refreshDestinationSearch() {
        let query = this.destination.name;
        this.lastSearchType = searchType.DESTINATION;
        if (this.destination && query) {
            this.destinationList = yield api.search(query).then(res => res.data.places).then(placeList => placeList);
        }
    };

    @asyncAction
    async * destinationSearch(query) {
        this.lastSearchType = searchType.DESTINATION;
        if (query) {
            this.destinationList = yield api.search(query).then(res => res.data.places).then(placeList => placeList);
        }
    };

    @computed
    get isSearchRoute() {
        console.log(this.parkingList);
        return this.parkingList.length > 0;
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

    dummyParkingList = () => {
        return [
            {name: '주차장1', address: '주소1'},
            {name: '주차장2', address: '주소2'},
            {name: '주차장3', address: '주소3'},
            {name: '주차장4', address: '주소4'},
            {name: '주차장5', address: '주소5'},
            {name: '주차장6', address: '주소6'},
        ];
    };
}

export default new SearchStore();