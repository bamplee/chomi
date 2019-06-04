import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import SearchPlaceTable from "../common/SearchPlaceTable";

@inject('rootStore')
@observer
class SearchDepartureTable extends Component {
    render() {
        const {rootStore} = this.props;
        return (
            <SearchPlaceTable itemList={rootStore.departureList}
                              handleSearchTableRow={this.handleSearchTableRow}/>
        );
    }

    handleSearchTableRow = (item) => {
        const {rootStore} = this.props;
        const {history} = this.props;
        rootStore.handleDeparture(item);
        history.push('/list');
    };
}

export default SearchDepartureTable;
