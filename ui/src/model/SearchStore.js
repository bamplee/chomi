import {observable, action} from 'mobx';

class SearchStore {
    /*
    observable
    Mobx에서 Rerendering 대상이 되는 state(상태, 값)를 관찰 대상(observable value)라고 칭하며 @observable 데코레이터로 지정한 State는 관찰대상으로 지정되고 그 State는 값이 변경될 때 마다 Rerendering됩니다.
     */
    @observable departure = this.dummyStartPoint();
    @observable destination = this.dummyEndPoint();

    @action swap = () => {
        let temp = this.departure;
        this.departure = this.destination;
        this.destination = temp;
    };

    dummyStartPoint = () => {
        return {
            distance: 22744.950016794694,
            jibun_address: "경기도 성남시 분당구 정자동 178-1",
            name: "그린팩토리",
            phone_number: "",
            road_address: "경기도 성남시 분당구 불정로 6 그린팩토리",
            sessionId: "dezD72oBOAUY6uUlM0gM",
            x: "127.1054328",
            y: "37.3595963",
        };
    };

    dummyEndPoint = () => {
        return {
            distance: 12117.830189421165,
            jibun_address: "서울특별시 강남구 수서동 214-3",
            name: "수서역 수서평택고속선",
            phone_number: "1800-1472",
            road_address: "서울특별시 강남구 밤고개로 99 수서역사",
            sessionId: "0E_D72oBe9kwkY1_OQRw",
            x: "127.1043773",
            y: "37.4855438"
        };
    };
}

export default new SearchStore();