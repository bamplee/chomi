import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import PlaceInput from "../common/PlaceInput";

@inject('searchStore')
@observer
class DestinationPlaceInput extends Component {
    render() {
        const {searchStore} = this.props;
        const {history} = this.props;
        return (
            <PlaceInput history={history}
                        name={searchStore.destination && searchStore.destination.name}
                        search={(query) => searchStore.destinationSearch(query)}/>
        );
    }
}

export default DestinationPlaceInput;
