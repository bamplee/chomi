import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import PlaceInput from "../common/PlaceInput";

@inject('searchStore')
@observer
class DeparturePlaceInput extends Component {
    render() {
        const {searchStore} = this.props;
        const {history} = this.props;
        return (
            <PlaceInput history={history}
                        name={searchStore.departure.name}
                        search={(query) => searchStore.departureSearch(query)}/>
        );
    }
}

export default DeparturePlaceInput;
