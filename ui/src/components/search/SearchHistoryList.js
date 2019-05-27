import React, { Component } from 'react';
import { List } from 'antd';
import { inject, observer } from 'mobx-react';

@inject('uiStore', 'searchStore')
@observer
class SearchHistoryList extends Component {
    render() {
        const {searchStore} = this.props;
        return (
          <List
            dataSource={searchStore.historyList}
            renderItem={(item, idx) => (
              <List.Item onClick={() => {}}>
                  <div className="search_list_table">
                      <List.Item.Meta
                        title={item.name}
                        description={item.road_address}
                      />
                  </div>
              </List.Item>
            )}
          />
        )
    }
}

export default SearchHistoryList;
