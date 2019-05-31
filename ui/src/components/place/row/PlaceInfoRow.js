import React from 'react';
import {Icon, List} from 'antd';

function PlaceInfoRow(props) {
    return (
        <List.Item actions={[<Icon type="right" />]} onClick={props.onClick}>
            <List.Item.Meta
                className="place_info_row"
                title={props.item.name}
                description={props.item.road_address}
            />
        </List.Item>
    )
}

export default PlaceInfoRow;
