import React from 'react';
import {List} from 'antd';

import './PlaceList.scss'

function PlaceList(props) {
    return (
        <List dataSource={props.itemList}
              renderItem={(item, idx) => (
                  <List.Item key={idx}
                             className="place-list-row"
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

export default PlaceList;
