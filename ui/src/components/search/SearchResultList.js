import React, { Component } from 'react';
import { List } from 'antd';
import { inject, observer } from 'mobx-react';

@inject('uiStore', 'searchStore')
@observer
class SearchResultList extends Component {
    render() {
        const {searchStore} = this.props;
        return (
          <List
            dataSource={searchStore.PlaceList}
            renderItem={(item, idx) => (
              <List.Item onClick={() => this.handleItem(idx)}>
                  <div className="search_list_table">
                      <List.Item.Meta
                        className="content"
                        title={item.name}
                        description={item.road_address}
                      />
                  </div>
              </List.Item>
            )}
          />
        )
    }

    handleItem = (idx) => {
        const {searchStore, uiStore} = this.props;
        if (uiStore.clickSearchInput === '' || uiStore.clickSearchInput === 'destination') {
            searchStore.handleDestination(idx)
        }
        else {
            searchStore.handleDeparture(idx)
        }

        searchStore.route();
        this.props.history.push({pathname: '/'})
    };
}

export default SearchResultList;
