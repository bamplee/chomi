import React, { Component } from 'react';
import { List } from 'antd';
import { inject, observer } from 'mobx-react';

import PlaceInfoRow from '../row/PlaceInfoRow';
import { Conditional } from '../../common/Conditional';

@inject('searchStore')
@observer
class PlaceDepartureTable extends Component {
    render() {
        const {searchStore} = this.props;
        return (
          <Conditional if={searchStore.lastSearchType === 'departure'}>
              <List
                dataSource={searchStore.departureList}
                renderItem={(item, idx) => (
                  <PlaceInfoRow key={idx} item={item} onClick={() => this.handleDeparture(item)}/>
                )}
              />
          </Conditional>
        )
    }

    handleDeparture = (item) => {
        const {searchStore} = this.props;
        searchStore.handleDeparture(item);
        this.props.history.push({pathname: '/'})
    };
}

export default PlaceDepartureTable;
