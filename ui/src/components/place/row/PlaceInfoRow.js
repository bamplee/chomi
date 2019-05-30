import React from 'react';
import {List} from 'antd';

function PlaceInfoRow(props) {
    return (
        <List.Item onClick={props.onClick}>
            <div className="place_table_row">
                <List.Item.Meta
                    className="item_meta"
                    title={props.item.name}
                    description={props.item.road_address}
                />
            </div>
        </List.Item>
    )
}

export default PlaceInfoRow;
