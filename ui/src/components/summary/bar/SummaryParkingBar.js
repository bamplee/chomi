import React, {Component} from 'react';
import {Card, List} from 'antd';
import {inject, observer} from 'mobx-react';

@inject('searchStore')
@observer
class SummaryParkingBar extends Component {
    render() {
        const {searchStore} = this.props;
        return (
            <Card className="summary_parking_bar" size="small"
                  title="경유할 주차장">
                <img className="image"
                     height={150}
                     alt="logo"
                     src={'http://101.101.161.132/api/v1/maps/image?x=' + searchStore.parking.LNG + '&y=' + searchStore.parking.LAT}
                />
                <List.Item.Meta
                    title={searchStore.parking.PARKING_NAME}
                    description={
                        <div>
                            <div>
                                {searchStore.parking.ADDR}
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between', paddingTop: 8}}>
                                {searchStore.parking.ADD_RATES}원/{searchStore.parking.ADD_TIME_RATE}분
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                주말 {searchStore.parking.SATURDAY_PAY_NM}, 공휴일 {searchStore.parking.HOLIDAY_PAY_NM}
                            </div>
                        </div>}
                />
            </Card>
        )
    }
}

export default SummaryParkingBar;
