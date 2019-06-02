import React from 'react';
import {List} from 'antd';

function DepartureTableRow(props) {
    return (
        <List.Item className="row"
                   onClick={props.onClick}>
            <List.Item.Meta
                title={props.item.name}
                description={props.item.road_address}
            />
        </List.Item>
    )
}

export default DepartureTableRow;
