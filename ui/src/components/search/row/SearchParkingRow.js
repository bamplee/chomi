import React from 'react';
import {Icon, List} from 'antd';

function SearchParkingRow(props) {
    return (
        <List.Item actions={[<Icon type="right" />]}
                   onClick={props.onClick}>
            <List.Item.Meta
                title={props.item.name}
                description={props.item.address}
            />
        </List.Item>
    )
}

export default SearchParkingRow;
