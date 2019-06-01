import React from 'react';
import {Icon, List, Typography} from 'antd';

function SearchParkingRow(props) {
    return (
        <List.Item actions={[<Icon type="right"/>]}
                   onClick={props.onClick}>
            <img style={{display: 'flex', justifyContent: 'center', marginBottom: 10, width: '100%'}}
                 height={150}
                 alt="logo"
                 src={'http://101.101.161.132/api/v1/maps/image?x=' + props.item.LNG + '&y=' + props.item.LAT}
            />
            <List.Item.Meta
                title={props.item.PARKING_NAME}
                description={
                    <div className="search_parking_row_description">
                        <Typography.Text type="secondary">{props.item.ADDR}</Typography.Text>
                        <div className="price">
                            <div>
                                <Typography.Text>시간당 </Typography.Text>
                                <Typography.Text type="danger">
                                    {props.item.ADD_RATES * (60 / props.item.ADD_TIME_RATE)}
                                </Typography.Text>
                                <Typography.Text>원,</Typography.Text>
                            </div>
                            <div>
                                <Typography.Text>
                                    {props.item.ADD_TIME_RATE}
                                </Typography.Text>
                                <Typography.Text>분당 </Typography.Text>
                                <Typography.Text type="danger">
                                    {props.item.ADD_RATES}
                                </Typography.Text>
                                <Typography.Text>
                                    원
                                </Typography.Text>
                            </div>
                        </div>
                        <div className="holiday">
                            <div>
                                <Typography.Text>주말 </Typography.Text>
                                <Typography.Text>{props.item.SATURDAY_PAY_NM},</Typography.Text>
                            </div>
                            <div>
                                <Typography.Text>공휴일 </Typography.Text>
                                <Typography.Text>{props.item.HOLIDAY_PAY_NM}</Typography.Text>
                            </div>
                        </div>
                    </div>}
            />
        </List.Item>
    )
}

export default SearchParkingRow;
