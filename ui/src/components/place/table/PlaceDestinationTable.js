import React, { Component } from 'react';
import { List } from 'antd';
import { inject, observer } from 'mobx-react';

import PlaceInfoRow from '../row/PlaceInfoRow';
import { Conditional } from '../../common/Conditional';

@inject('searchStore')
@observer
class PlaceDestinationTable extends Component {
    render() {
        const {searchStore} = this.props;
        return (
          <Conditional if={searchStore.lastSearchType === 'destination'}>
              <List
                dataSource={searchStore.destinationList}
                renderItem={(item, idx) => (
                  <PlaceInfoRow item={item} onClick={() => this.handleDestination(item)}/>
                )}
              />
          </Conditional>
        )
    }

    handleDestination = (item) => {
        const {searchStore} = this.props;
        searchStore.handleDestination(item);
        this.props.history.push({pathname: '/'})
    };
}

export default PlaceDestinationTable;
