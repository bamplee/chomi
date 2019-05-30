import React from 'react';
import {List} from 'antd';

function SearchParkingRow(props) {
    return (
        <List.Item onClick={props.onClick}>
            <div>
                <List.Item.Meta
                    className="item_meta"
                    title={props.item.name}
                    description={props.item.address}
                />
            </div>
        </List.Item>
    )
}

export default SearchParkingRow;
