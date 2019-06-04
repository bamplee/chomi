import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import SearchPlaceTable from "../common/SearchPlaceTable";

@inject('rootStore')
@observer
class SearchDestinationTable extends Component {
    render() {
        const {rootStore} = this.props;
        return (
            <SearchPlaceTable itemList={rootStore.destinationList}
                              handleSearchTableRow={this.handleSearchTableRow}/>
        );
    }

    handleSearchTableRow = (item) => {
        const {rootStore} = this.props;
        const {history} = this.props;
        rootStore.handleDestination(item);
        history.push('/list');
    };
}

export default SearchDestinationTable;
