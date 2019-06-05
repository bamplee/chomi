import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import PlaceList from "../common/PlaceList";

@inject('searchStore')
@observer
class DestinationPlaceList extends Component {
    render() {
        const {searchStore} = this.props;
        return (
            <PlaceList itemList={searchStore.destinationList}
                       handleSearchTableRow={this.handleSearchTableRow}/>
        );
    }

    handleSearchTableRow = (item) => {
        const {searchStore} = this.props;
        const {history} = this.props;
        searchStore.handleDestination(item);
        history.push('/list');
    };
}

export default DestinationPlaceList;
