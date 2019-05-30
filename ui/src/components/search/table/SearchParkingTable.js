import React, { Component } from 'react';
import { Typography, List } from 'antd';
import { inject, observer } from 'mobx-react';
import { Conditional } from '../../common/Conditional';
import SearchParkingRow from '../row/SearchParkingRow';

@inject('searchStore', 'routeStore')
@observer
class SearchParkingTable extends Component {
    render() {
        const {searchStore} = this.props;
        return (
            <List className="search_route_table"
                  header={<Typography.Text strong>주차장</Typography.Text>}
                  bordered
                  dataSource={searchStore.parkingList}
                  renderItem={(item, idx) => (
                      <SearchParkingRow item={item} onClick={() => this.handleSummary()}/>
                  )}
            />
        )
    }

    handleSummary = () => {
        const {searchStore, routeStore} = this.props;
        routeStore.route(searchStore.departure, searchStore.destination);
        this.props.history.push({pathname: '/summary'});
    };
}

export default SearchParkingTable;
