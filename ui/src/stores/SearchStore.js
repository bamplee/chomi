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
    @observable parkingList = this.dummyParkingList();
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
    async* refreshDepartureSearch() {
        let query = this.departure.name;
        this.lastSearchType = searchType.DEPARTURE;
        if (this.departure) {
            this.departureList = yield api.search(query).then(res => res.data.places).then(placeList => placeList);
        }
    };

    @asyncAction
    async* departureSearch(query) {
        this.lastSearchType = searchType.DEPARTURE;
        if (query) {
            this.departureList = yield api.search(query).then(res => res.data.places).then(placeList => placeList);
        }
    };

    @asyncAction
    async* refreshDestinationSearch() {
        let query = this.destination.name;
        this.lastSearchType = searchType.DESTINATION;
        if (this.destination && query) {
            this.destinationList = yield api.search(query).then(res => res.data.places).then(placeList => placeList);
        }
    };

    @asyncAction
    async* destinationSearch(query) {
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
        return [{
            "PARKING_CODE": "1010089",
            "PARKING_NAME": "초안산근린공원주차장(구)",
            "ADDR": "도봉구 창동 24-0",
            "PARKING_TYPE": "NW",
            "PARKING_TYPE_NM": "노외 주차장",
            "OPERATION_RULE": "1",
            "OPERATION_RULE_NM": "시간제 주차장",
            "TEL": "",
            "QUE_STATUS": "0",
            "QUE_STATUS_NM": "미연계중",
            "CAPACITY": 68,
            "CUR_PARKING": 0,
            "CUR_PARKING_TIME": "",
            "PAY_YN": "Y",
            "PAY_NM": "유료",
            "NIGHT_FREE_OPEN": "N",
            "NIGHT_FREE_OPEN_NM": "야간 미개방",
            "WEEKDAY_BEGIN_TIME": "0900",
            "WEEKDAY_END_TIME": "1900",
            "WEEKEND_BEGIN_TIME": "0900",
            "WEEKEND_END_TIME": "1900",
            "HOLIDAY_BEGIN_TIME": "0900",
            "HOLIDAY_END_TIME": "1900",
            "SYNC_TIME": "2018-07-23 13:44:59",
            "SATURDAY_PAY_YN": "N",
            "SATURDAY_PAY_NM": "무료",
            "HOLIDAY_PAY_YN": "N",
            "HOLIDAY_PAY_NM": "무료",
            "FULLTIME_MONTHLY": "0",
            "GRP_PARKNM": "",
            "RATES": 0,
            "TIME_RATE": 0,
            "ADD_RATES": 300,
            "ADD_TIME_RATE": 10,
            "BUS_RATES": 0,
            "BUS_TIME_RATE": 0,
            "BUS_ADD_TIME_RATE": 0,
            "BUS_ADD_RATES": 0,
            "DAY_MAXIMUM": 0,
            "LAT": 37.64927895,
            "LNG": 127.04047436,
            "ASSIGN_CODE": "PIS02",
            "ASSIGN_CODE_NM": "미배정,미점유"
        }, {
            "PARKING_CODE": "1012254",
            "PARKING_NAME": "마들스타디움(근린공원)(구)",
            "ADDR": "노원구 상계동 770-2",
            "PARKING_TYPE": "NW",
            "PARKING_TYPE_NM": "노외 주차장",
            "OPERATION_RULE": "1",
            "OPERATION_RULE_NM": "시간제 주차장",
            "TEL": "02-2289-6735",
            "QUE_STATUS": "0",
            "QUE_STATUS_NM": "미연계중",
            "CAPACITY": 177,
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
            "SYNC_TIME": "2018-09-27 20:05:09",
            "SATURDAY_PAY_YN": "N",
            "SATURDAY_PAY_NM": "무료",
            "HOLIDAY_PAY_YN": "N",
            "HOLIDAY_PAY_NM": "무료",
            "FULLTIME_MONTHLY": "100000",
            "GRP_PARKNM": "",
            "RATES": 150,
            "TIME_RATE": 5,
            "ADD_RATES": 150,
            "ADD_TIME_RATE": 5,
            "BUS_RATES": 0,
            "BUS_TIME_RATE": 0,
            "BUS_ADD_TIME_RATE": 0,
            "BUS_ADD_RATES": 0,
            "DAY_MAXIMUM": 11000,
            "LAT": 37.64391748,
            "LNG": 127.05856743,
            "ASSIGN_CODE": "PIS02",
            "ASSIGN_CODE_NM": "미배정,미점유"
        }, {
            "PARKING_CODE": "1025695",
            "PARKING_NAME": "영등포여자고등학교지하공영(구)",
            "ADDR": "영등포구 신길동 184-3",
            "PARKING_TYPE": "NW",
            "PARKING_TYPE_NM": "노외 주차장",
            "OPERATION_RULE": "1",
            "OPERATION_RULE_NM": "시간제 주차장",
            "TEL": "02-831-6723",
            "QUE_STATUS": "1",
            "QUE_STATUS_NM": "현재~20분이내 연계데이터 존재(현재 주차대수 표현)",
            "CAPACITY": 98,
            "CUR_PARKING": 34,
            "CUR_PARKING_TIME": "2019-05-31 16:17:49",
            "PAY_YN": "Y",
            "PAY_NM": "유료",
            "NIGHT_FREE_OPEN": "N",
            "NIGHT_FREE_OPEN_NM": "야간 미개방",
            "WEEKDAY_BEGIN_TIME": "1000",
            "WEEKDAY_END_TIME": "1900",
            "WEEKEND_BEGIN_TIME": "1000",
            "WEEKEND_END_TIME": "1900",
            "HOLIDAY_BEGIN_TIME": "1000",
            "HOLIDAY_END_TIME": "1900",
            "SYNC_TIME": "2018-07-23 13:45:00",
            "SATURDAY_PAY_YN": "N",
            "SATURDAY_PAY_NM": "무료",
            "HOLIDAY_PAY_YN": "N",
            "HOLIDAY_PAY_NM": "무료",
            "FULLTIME_MONTHLY": "65000",
            "GRP_PARKNM": "",
            "RATES": 50,
            "TIME_RATE": 5,
            "ADD_RATES": 50,
            "ADD_TIME_RATE": 5,
            "BUS_RATES": 0,
            "BUS_TIME_RATE": 0,
            "BUS_ADD_TIME_RATE": 0,
            "BUS_ADD_RATES": 0,
            "DAY_MAXIMUM": 0,
            "LAT": 37.51520496,
            "LNG": 126.91511598,
            "ASSIGN_CODE": "PIS02",
            "ASSIGN_CODE_NM": "미배정,미점유"
        }, {
            "PARKING_CODE": "1025696",
            "PARKING_NAME": "당산근린공원지하공영(구)",
            "ADDR": "영등포구 당산동3가 385-0",
            "PARKING_TYPE": "NW",
            "PARKING_TYPE_NM": "노외 주차장",
            "OPERATION_RULE": "1",
            "OPERATION_RULE_NM": "시간제 주차장",
            "TEL": "02-2633-0298",
            "QUE_STATUS": "0",
            "QUE_STATUS_NM": "미연계중",
            "CAPACITY": 190,
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
            "SYNC_TIME": "2018-07-23 13:45:02",
            "SATURDAY_PAY_YN": "N",
            "SATURDAY_PAY_NM": "무료",
            "HOLIDAY_PAY_YN": "N",
            "HOLIDAY_PAY_NM": "무료",
            "FULLTIME_MONTHLY": "100000",
            "GRP_PARKNM": "",
            "RATES": 150,
            "TIME_RATE": 5,
            "ADD_RATES": 150,
            "ADD_TIME_RATE": 5,
            "BUS_RATES": 0,
            "BUS_TIME_RATE": 0,
            "BUS_ADD_TIME_RATE": 0,
            "BUS_ADD_RATES": 0,
            "DAY_MAXIMUM": 0,
            "LAT": 37.52552609,
            "LNG": 126.89579413,
            "ASSIGN_CODE": "PIS02",
            "ASSIGN_CODE_NM": "미배정,미점유"
        }, {
            "PARKING_CODE": "1025697",
            "PARKING_NAME": "대림운동장(구)",
            "ADDR": "영등포구 대림동 780-0",
            "PARKING_TYPE": "NW",
            "PARKING_TYPE_NM": "노외 주차장",
            "OPERATION_RULE": "1",
            "OPERATION_RULE_NM": "시간제 주차장",
            "TEL": "02-831-3312",
            "QUE_STATUS": "0",
            "QUE_STATUS_NM": "미연계중",
            "CAPACITY": 192,
            "CUR_PARKING": 0,
            "CUR_PARKING_TIME": "",
            "PAY_YN": "Y",
            "PAY_NM": "유료",
            "NIGHT_FREE_OPEN": "N",
            "NIGHT_FREE_OPEN_NM": "야간 미개방",
            "WEEKDAY_BEGIN_TIME": "0600",
            "WEEKDAY_END_TIME": "2200",
            "WEEKEND_BEGIN_TIME": "0600",
            "WEEKEND_END_TIME": "2200",
            "HOLIDAY_BEGIN_TIME": "0600",
            "HOLIDAY_END_TIME": "2200",
            "SYNC_TIME": "2018-07-23 13:45:03",
            "SATURDAY_PAY_YN": "N",
            "SATURDAY_PAY_NM": "무료",
            "HOLIDAY_PAY_YN": "N",
            "HOLIDAY_PAY_NM": "무료",
            "FULLTIME_MONTHLY": "65000",
            "GRP_PARKNM": "",
            "RATES": 50,
            "TIME_RATE": 5,
            "ADD_RATES": 50,
            "ADD_TIME_RATE": 5,
            "BUS_RATES": 0,
            "BUS_TIME_RATE": 0,
            "BUS_ADD_TIME_RATE": 0,
            "BUS_ADD_RATES": 0,
            "DAY_MAXIMUM": 0,
            "LAT": 37.49965667,
            "LNG": 126.89483844,
            "ASSIGN_CODE": "PIS02",
            "ASSIGN_CODE_NM": "미배정,미점유"
        }, {
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
        }, {
            "PARKING_CODE": "1027845",
            "PARKING_NAME": "휘경마을 공영주차장(구)",
            "ADDR": "동대문구 휘경동 308-32",
            "PARKING_TYPE": "NW",
            "PARKING_TYPE_NM": "노외 주차장",
            "OPERATION_RULE": "3",
            "OPERATION_RULE_NM": "시간제 + 거주자 주차장",
            "TEL": "02-2247-9664~6",
            "QUE_STATUS": "0",
            "QUE_STATUS_NM": "미연계중",
            "CAPACITY": 78,
            "CUR_PARKING": 0,
            "CUR_PARKING_TIME": "",
            "PAY_YN": "Y",
            "PAY_NM": "유료",
            "NIGHT_FREE_OPEN": "N",
            "NIGHT_FREE_OPEN_NM": "야간 미개방",
            "WEEKDAY_BEGIN_TIME": "0900",
            "WEEKDAY_END_TIME": "1900",
            "WEEKEND_BEGIN_TIME": "0900",
            "WEEKEND_END_TIME": "1900",
            "HOLIDAY_BEGIN_TIME": "0900",
            "HOLIDAY_END_TIME": "1900",
            "SYNC_TIME": "2018-07-23 13:45:04",
            "SATURDAY_PAY_YN": "N",
            "SATURDAY_PAY_NM": "무료",
            "HOLIDAY_PAY_YN": "N",
            "HOLIDAY_PAY_NM": "무료",
            "FULLTIME_MONTHLY": "",
            "GRP_PARKNM": "",
            "RATES": 1000,
            "TIME_RATE": 60,
            "ADD_RATES": 0,
            "ADD_TIME_RATE": 0,
            "BUS_RATES": 0,
            "BUS_TIME_RATE": 0,
            "BUS_ADD_TIME_RATE": 0,
            "BUS_ADD_RATES": 0,
            "DAY_MAXIMUM": 10000,
            "LAT": 37.5880691,
            "LNG": 127.05809327,
            "ASSIGN_CODE": "PIS02",
            "ASSIGN_CODE_NM": "미배정,미점유"
        }, {
            "PARKING_CODE": "1028036",
            "PARKING_NAME": "중산공영주차장(구)",
            "ADDR": "동대문구 답십리동 23-3",
            "PARKING_TYPE": "NW",
            "PARKING_TYPE_NM": "노외 주차장",
            "OPERATION_RULE": "3",
            "OPERATION_RULE_NM": "시간제 + 거주자 주차장",
            "TEL": "02-2247-9664~6",
            "QUE_STATUS": "0",
            "QUE_STATUS_NM": "미연계중",
            "CAPACITY": 58,
            "CUR_PARKING": 0,
            "CUR_PARKING_TIME": "",
            "PAY_YN": "Y",
            "PAY_NM": "유료",
            "NIGHT_FREE_OPEN": "N",
            "NIGHT_FREE_OPEN_NM": "야간 미개방",
            "WEEKDAY_BEGIN_TIME": "0900",
            "WEEKDAY_END_TIME": "1900",
            "WEEKEND_BEGIN_TIME": "0900",
            "WEEKEND_END_TIME": "1900",
            "HOLIDAY_BEGIN_TIME": "0900",
            "HOLIDAY_END_TIME": "1900",
            "SYNC_TIME": "2018-07-23 13:45:00",
            "SATURDAY_PAY_YN": "N",
            "SATURDAY_PAY_NM": "무료",
            "HOLIDAY_PAY_YN": "N",
            "HOLIDAY_PAY_NM": "무료",
            "FULLTIME_MONTHLY": "",
            "GRP_PARKNM": "",
            "RATES": 1000,
            "TIME_RATE": 60,
            "ADD_RATES": 0,
            "ADD_TIME_RATE": 0,
            "BUS_RATES": 0,
            "BUS_TIME_RATE": 0,
            "BUS_ADD_TIME_RATE": 0,
            "BUS_ADD_RATES": 0,
            "DAY_MAXIMUM": 10000,
            "LAT": 37.56867158,
            "LNG": 127.05892065,
            "ASSIGN_CODE": "PIS02",
            "ASSIGN_CODE_NM": "미배정,미점유"
        }, {
            "PARKING_CODE": "1028245",
            "PARKING_NAME": "방학동 도깨비시장 공영주차장(구)",
            "ADDR": "도봉구 방학동 632-1",
            "PARKING_TYPE": "NW",
            "PARKING_TYPE_NM": "노외 주차장",
            "OPERATION_RULE": "3",
            "OPERATION_RULE_NM": "시간제 + 거주자 주차장",
            "TEL": "02-901-5100",
            "QUE_STATUS": "0",
            "QUE_STATUS_NM": "미연계중",
            "CAPACITY": 80,
            "CUR_PARKING": 0,
            "CUR_PARKING_TIME": "",
            "PAY_YN": "Y",
            "PAY_NM": "유료",
            "NIGHT_FREE_OPEN": "N",
            "NIGHT_FREE_OPEN_NM": "야간 미개방",
            "WEEKDAY_BEGIN_TIME": "0900",
            "WEEKDAY_END_TIME": "2200",
            "WEEKEND_BEGIN_TIME": "0900",
            "WEEKEND_END_TIME": "2200",
            "HOLIDAY_BEGIN_TIME": "0900",
            "HOLIDAY_END_TIME": "2200",
            "SYNC_TIME": "2018-07-23 13:45:03",
            "SATURDAY_PAY_YN": "N",
            "SATURDAY_PAY_NM": "무료",
            "HOLIDAY_PAY_YN": "N",
            "HOLIDAY_PAY_NM": "무료",
            "FULLTIME_MONTHLY": "0",
            "GRP_PARKNM": "",
            "RATES": 100,
            "TIME_RATE": 5,
            "ADD_RATES": 100,
            "ADD_TIME_RATE": 5,
            "BUS_RATES": 0,
            "BUS_TIME_RATE": 0,
            "BUS_ADD_TIME_RATE": 0,
            "BUS_ADD_RATES": 0,
            "DAY_MAXIMUM": 0,
            "LAT": 37.6645806,
            "LNG": 127.03390568,
            "ASSIGN_CODE": "PIS02",
            "ASSIGN_CODE_NM": "미배정,미점유"
        }, {
            "PARKING_CODE": "1032247",
            "PARKING_NAME": "은평평화공원(구)",
            "ADDR": "은평구 녹번동 153-1",
            "PARKING_TYPE": "NW",
            "PARKING_TYPE_NM": "노외 주차장",
            "OPERATION_RULE": "1",
            "OPERATION_RULE_NM": "시간제 주차장",
            "TEL": "02-350-5183",
            "QUE_STATUS": "0",
            "QUE_STATUS_NM": "미연계중",
            "CAPACITY": 143,
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
            "SYNC_TIME": "2018-07-23 13:44:06",
            "SATURDAY_PAY_YN": "N",
            "SATURDAY_PAY_NM": "무료",
            "HOLIDAY_PAY_YN": "N",
            "HOLIDAY_PAY_NM": "무료",
            "FULLTIME_MONTHLY": "120000",
            "GRP_PARKNM": "",
            "RATES": 150,
            "TIME_RATE": 5,
            "ADD_RATES": 150,
            "ADD_TIME_RATE": 5,
            "BUS_RATES": 0,
            "BUS_TIME_RATE": 0,
            "BUS_ADD_TIME_RATE": 0,
            "BUS_ADD_RATES": 0,
            "DAY_MAXIMUM": 0,
            "LAT": 37.60573659,
            "LNG": 126.92310827,
            "ASSIGN_CODE": "PIS02",
            "ASSIGN_CODE_NM": "미배정,미점유"
        }];
    };
}

export default new SearchStore();