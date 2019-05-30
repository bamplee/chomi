import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {Marker, NaverMap, Polyline, RenderAfterNavermapsLoaded} from 'react-naver-maps'

@inject('searchStore', 'routeStore')
@observer
class RouteMap extends Component {
    render() {
        const {searchStore} = this.props;
        return (
            <div className="route_map_div">
                <RenderAfterNavermapsLoaded
                    // fixme ncpClientId 의 경우 허용 도메인 수정 필요
                    ncpClientId={'epit1z6yed'}
                    error={<p>Maps Load Error</p>}
                    loading={<p>Maps Loading...</p>}
                >
                    <NaverMap
                        mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
                        style={{
                            marginTop: 5,
                            width: '100%',
                            height: window.innerHeight - 378,
                        }}
                        center={this.getDistanceFromLatLonInKm(searchStore.departure.y, searchStore.departure.x, searchStore.destination.y, searchStore.destination.x)}
                        defaultZoom={5}
                    >
                        <Marker
                            title={'abcd'}
                            position={{lat: searchStore.departure.y, lng: searchStore.departure.x}}
                        />
                        <Marker
                            position={{lat: searchStore.destination.y, lng: searchStore.destination.x}}
                        />
                        {
                            this.getGraph()
                        }
                    </NaverMap>
                </RenderAfterNavermapsLoaded>
            </div>
        );
    }

    getDistanceFromLatLonInKm = (lat1, lng1, lat2, lng2) => {
        return {lat: ((lat1 * 1 + lat2 * 1) / 2), lng: ((lng1 * 1 + lng2 * 1) / 2)}
    };

    getGraph = () => {
        const {routeStore} = this.props;
        if (!Object.keys(routeStore.graph).length > 0) {
            return;
        }
        return routeStore.graph.lane.map((x, idx) => {
            return (
                <Polyline
                    key={idx}
                    path={x.section[0].graphPos.map(y => ({lat: y.y, lng: y.x}))}
                    // clickable // 사용자 인터랙션을 받기 위해 clickable을 true로 설정합니다.
                    strokeColor={this.getRandomColor()}
                    strokeWeight={5}
                />)
        })
    };

    getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}

export default (RouteMap);
