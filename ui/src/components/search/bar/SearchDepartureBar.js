import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import SearchPlaceBar from "../common/SearchPlaceBar";

@inject('rootStore')
@observer
class SearchDepartureBar extends Component {
    render() {
        const {rootStore} = this.props;
        const {history} = this.props;
        return (
            <SearchPlaceBar history={history}
                            name={rootStore.departure.name}
                            search={(query) => rootStore.departureSearch(query)}/>
        );
    }
}

export default SearchDepartureBar;
