import React, { Component } from 'react';
import { List } from 'antd';
import { inject, observer } from 'mobx-react';

import SearchTableRow from './SearchTableRow';

@inject('searchStore')
@observer
class SearchDepartureTable extends Component {
    render() {
        const {searchStore} = this.props;
        return (
          <List
            dataSource={searchStore.departureList}
            renderItem={(item, idx) => (
              <SearchTableRow item={item} onClick={() => this.handleDeparture(item)}/>
            )}
          />
        )
    }

    handleDeparture = (item) => {
        const {searchStore, routeStore} = this.props;
        searchStore.handleDeparture(item);
        routeStore.route(searchStore.departure, searchStore.destination);
        this.props.history.push({pathname: '/'})
    };
}

export default SearchDepartureTable;
