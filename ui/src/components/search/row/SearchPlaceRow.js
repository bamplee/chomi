import React from 'react';
import {List} from 'antd';

function SearchTableRow(props) {
    return (
        <List.Item onClick={props.onClick}>
            <div className="search_table_row">
                <List.Item.Meta
                    className="item_meta"
                    title={props.item.name}
                    description={props.item.road_address}
                />
            </div>
        </List.Item>
    )
}

export default SearchTableRow;
