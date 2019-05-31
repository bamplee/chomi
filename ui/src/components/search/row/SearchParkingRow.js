import React from 'react';
import {Icon, List, Typography} from 'antd';

function SearchParkingRow(props) {
    return (
        <List.Item actions={[<Icon type="right"/>]}
                   onClick={props.onClick}>
            <div style={{display: 'flex', justifyContent: 'center', marginBottom: 10, width: '100%'}}>
                <img height={150}
                     alt="logo"
                     src={'http://101.101.161.132/api/v1/maps/image?x=' + props.item.LNG + '&y=' + props.item.LAT}
                />
            </div>
            <List.Item.Meta
                title={props.item.PARKING_NAME}
                description={
                    <div>
                        <div>
                            {props.item.ADDR}
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', paddingTop: 8}}>
                            {props.item.ADD_RATES}원/{props.item.ADD_TIME_RATE}분
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            주말 {props.item.SATURDAY_PAY_NM}, 공휴일 {props.item.HOLIDAY_PAY_NM}
                        </div>
                    </div>}
            />
        </List.Item>
    )
}

export default SearchParkingRow;
