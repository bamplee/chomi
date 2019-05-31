import React from 'react';
import {Icon, List} from 'antd';

function PlaceInfoRow(props) {
    return (
        <List.Item className="place_info_row" onClick={props.onClick}>
            <List.Item.Meta
                title={props.item.name}
                description={props.item.road_address}
            />
        </List.Item>
    )
}

export default PlaceInfoRow;
