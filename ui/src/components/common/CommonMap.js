import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {Marker, NaverMap, Polyline, RenderAfterNavermapsLoaded} from 'react-naver-maps'

@inject('routeStore')
@observer
class CommonMap extends Component {
    render() {
        const {routeStore} = this.props;
        return (
            <div className="common-map">
                <RenderAfterNavermapsLoaded
                    // fixme ncpClientId 의 경우 허용 도메인 수정 필요
                    ncpClientId={'epit1z6yed'}
                    error={<p>Maps Load Error</p>}
                    loading={<p>Maps Loading...</p>}
                >
                    <NaverMap
                        mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
                        style={{
                            width: '100%',
                            height: this.props.height,
                        }}
                        center={this.getDistanceFromLatLonInKm(routeStore.departure.y, routeStore.departure.x, routeStore.destination.y, routeStore.destination.x)}
                        defaultZoom={5}
                    >
                        <Marker
                            title={'abcd'}
                            position={{lat: routeStore.departure.y, lng: routeStore.departure.x}}
                        />
                        <Marker
                            position={{lat: routeStore.destination.y, lng: routeStore.destination.x}}
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
                    strokeColor="#1883FB"
                    strokeWeight={5}
                />)
        })
    };
}

export default (CommonMap);