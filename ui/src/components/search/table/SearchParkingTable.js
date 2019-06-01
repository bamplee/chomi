import React, {Component} from 'react';
import {Typography, List} from 'antd';
import {inject, observer} from 'mobx-react';
import SearchParkingRow from '../row/SearchParkingRow';

@inject('searchStore', 'routeStore')
@observer
class SearchParkingTable extends Component {
    render() {
        const {searchStore} = this.props;
        return (
            <List className="search_route_table"
                  header={<Typography.Text style={{color : 'black'}}>추천 경유 주차장</Typography.Text>}
                  bordered
                  dataSource={searchStore.parkingList}
                  renderItem={(item, idx) => (
                      <SearchParkingRow item={item} onClick={() => this.handleSummary(item)}/>
                  )}
            />
        )
    }

    handleSummary = (parking) => {
        const {searchStore, routeStore} = this.props;
        searchStore.handleParking(parking);
        routeStore.route(searchStore.departure, searchStore.destination);
        window.scrollTo(0, 0);
        this.props.history.push({pathname: '/summary'});
    };
}

export default SearchParkingTable;
