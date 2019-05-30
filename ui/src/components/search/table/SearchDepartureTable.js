import React, {Component} from 'react';
import {List} from 'antd';
import {inject, observer} from 'mobx-react';

import SearchPlaceRow from '../row/SearchPlaceRow';

@inject('searchStore', 'routeStore')
@observer
class SearchDepartureTable extends Component {
    render() {
        const {searchStore} = this.props;
        return (
            <List
                dataSource={searchStore.departureList}
                renderItem={(item, idx) => (
                    <SearchPlaceRow key={idx} item={item} onClick={() => this.handleDeparture(item)}/>
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
