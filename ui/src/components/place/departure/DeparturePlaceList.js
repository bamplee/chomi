import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import PlaceList from "../common/PlaceList";

@inject('searchStore')
@observer
class DeparturePlaceList extends Component {
    render() {
        const {searchStore} = this.props;
        return (
            <PlaceList itemList={searchStore.departureList}
                       handleSearchTableRow={this.handleSearchTableRow}/>
        );
    }

    handleSearchTableRow = (item) => {
        const {searchStore} = this.props;
        const {history} = this.props;
        searchStore.handleDeparture(item);
        history.goBack();
    };
}

export default DeparturePlaceList;
