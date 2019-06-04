import React, {Component} from 'react';
import {List} from 'antd';

import './SearchPlaceTable.scss'

function SearchPlaceTable(props) {
    return (
        <List className="search-place-table"
              dataSource={props.itemList}
              renderItem={(item, idx) => (
                  <List.Item className="row"
                             onClick={() => props.handleSearchTableRow(item)}>
                      <List.Item.Meta
                          title={item.name}
                          description={item.road_address}
                      />
                  </List.Item>
              )}
        />
    );
}

export default SearchPlaceTable;
