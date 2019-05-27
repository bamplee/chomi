import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import NaverMap from '../common/NaverMap';

@inject('uiStore', 'searchStore')
@observer
class RouteMap extends Component {
    render() {
        const {searchStore} = this.props;
        return (
          <div style={{paddingLeft: 5, paddingRight: 5}}>
              <NaverMap
                center={this.getDistanceFromLatLonInKm(searchStore.departure.y, searchStore.departure.x, searchStore.destination.y, searchStore.destination.x)}
                startX={searchStore.departure.x}
                startY={searchStore.departure.y}
                endX={searchStore.destination.x}
                endY={searchStore.destination.y}/>
          </div>
        )
    }

    getDistanceFromLatLonInKm = (lat1, lng1, lat2, lng2) => {
        return {lat: ((lat1 * 1 + lat2 * 1) / 2), lng: ((lng1 * 1 + lng2 * 1) / 2)}
    };
}

export default RouteMap;
