import React, {Component} from 'react';
import {List} from 'antd';
import {inject, observer} from 'mobx-react';

import SearchPlaceRow from '../row/SearchPlaceRow';

@inject('searchStore', 'routeStore')
@observer
class SearchDestinationTable extends Component {
    render() {
        const {searchStore} = this.props;
        return (
            <List
                dataSource={searchStore.destinationList}
                renderItem={(item, idx) => (
                    <SearchPlaceRow item={item} onClick={() => this.handleDestination(item)}/>
                )}
            />
        )
    }

    handleDestination = (item) => {
        const {searchStore, routeStore} = this.props;
        searchStore.handleDestination(item);
        routeStore.route(searchStore.departure, searchStore.destination);
        this.props.history.push({pathname: '/'})
    };
}

export default SearchDestinationTable;
