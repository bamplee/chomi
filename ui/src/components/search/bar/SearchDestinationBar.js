import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import SearchPlaceBar from "../common/SearchPlaceBar";

@inject('rootStore')
@observer
class SearchDestinationBar extends Component {
    render() {
        const {rootStore} = this.props;
        const {history} = this.props;
        return (
            <SearchPlaceBar history={history}
                            name={rootStore.destination.name}
                            search={(query) => rootStore.destinationSearch(query)}/>
        );
    }
}

export default SearchDestinationBar;
