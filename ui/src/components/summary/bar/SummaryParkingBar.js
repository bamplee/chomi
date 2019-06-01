import React, {Component} from 'react';
import {Card, List, Typography} from 'antd';
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
                        <div className="summary_parking_bar_description">
                            <Typography.Text type="secondary">{searchStore.parking.ADDR}</Typography.Text>
                            <div className="price">
                                <div>
                                    <Typography.Text>시간당 </Typography.Text>
                                    <Typography.Text type="danger">
                                        {searchStore.parking.ADD_RATES * (60 / searchStore.parking.ADD_TIME_RATE)}
                                    </Typography.Text>
                                    <Typography.Text>원,</Typography.Text>
                                </div>
                                <div>
                                    <Typography.Text>
                                        {searchStore.parking.ADD_TIME_RATE}
                                    </Typography.Text>
                                    <Typography.Text>분당 </Typography.Text>
                                    <Typography.Text type="danger">
                                        {searchStore.parking.ADD_RATES}
                                    </Typography.Text>
                                    <Typography.Text>
                                        원
                                    </Typography.Text>
                                </div>
                            </div>
                            <div className="holiday">
                                <div>
                                    <Typography.Text>주말 </Typography.Text>
                                    <Typography.Text>{searchStore.parking.SATURDAY_PAY_NM},</Typography.Text>
                                </div>
                                <div>
                                    <Typography.Text>공휴일 </Typography.Text>
                                    <Typography.Text>{searchStore.parking.HOLIDAY_PAY_NM}</Typography.Text>
                                </div>
                            </div>
                        </div>}
                />
            </Card>
        )
    }
}

export default SummaryParkingBar;
