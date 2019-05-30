import {observable, action} from 'mobx';
import {api} from '../api'
import {asyncAction} from 'mobx-utils';

const searchType = {
    DEPARTURE: Object.freeze('departure'),
    DESTINATION: Object.freeze('destination'),
};

class SearchStore {
    @observable departure = this.dummyStartPoint();
    @observable destination = '';
    @observable departureList = [];
    @observable destinationList = [];
    @observable lastSearchType = searchType.DESTINATION;

    @action handleDeparture = (departure) => {
        this.departure = departure;
    };

    @action handleDestination = (destination) => {
        this.destination = destination;
    };

    @action swap = () => {
        let temp = this.departure;
        this.departure = this.destination;
        this.destination = temp;
    };

    @asyncAction
    async* refreshDepartureSearch() {
        let query = this.departure.name;
        this.lastSearchType = searchType.DEPARTURE;
        if (this.departure && query.length > 0) {
            this.departureList = yield api.search(query).then(res => res.data.places).then(placeList => placeList);
        }
    };

    @asyncAction
    async* departureSearch(query) {
        this.lastSearchType = searchType.DEPARTURE;
        if (query.length > 0) {
            this.departureList = yield api.search(query).then(res => res.data.places).then(placeList => placeList);
        }
    };

    @asyncAction
    async* refreshDestinationSearch() {
        let query = this.destination.name;
        this.lastSearchType = searchType.DESTINATION;
        if (this.destination && query.length > 0) {
            this.destinationList = yield api.search(query).then(res => res.data.places).then(placeList => placeList);
        }
    };

    @asyncAction
    async* destinationSearch(query) {
        this.lastSearchType = searchType.DESTINATION;
        if (query.length > 0) {
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
}

export default new SearchStore();