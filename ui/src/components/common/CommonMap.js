import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {Marker, NaverMap, Polyline, RenderAfterNavermapsLoaded} from 'react-naver-maps'

@inject('routeStore', 'searchStore')
@observer
class CommonMap extends Component {
    render() {
        const {searchStore} = this.props;
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
                            height: '350px',
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
                            this.getParkingPoint()
                        }
                        {
                            this.getBikeParkingPoint()
                        }
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

    getParkingPoint = () => {
        const {routeStore} = this.props;
        if(!routeStore.detailPath) {
            return;
        }
        let parkingRouteInfoList = routeStore.detailPath.subPathList.filter(x => x.parkingRouteInfo !== null);
        if(parkingRouteInfoList.length > 0) {
            return <React.Fragment>
            <Marker
                title={'parking'}
                position={{lat: parkingRouteInfoList[0].parkingRouteInfo.parkingInfo.lat, lng: parkingRouteInfoList[0].parkingRouteInfo.parkingInfo.lng}}
            />
            </React.Fragment>
        }
    };

    getBikeParkingPoint = () => {
        const {routeStore} = this.props;
        if(!routeStore.detailPath) {
            return;
        }
        let bikeParkingRouteInfoList = routeStore.detailPath.subPathList.filter(x => x.bikeParkingRouteInfo !== null);
        if(bikeParkingRouteInfoList.length > 0) {
            return <React.Fragment>
            <Marker
                title={'bikeParkingStart'}
                position={{lat: bikeParkingRouteInfoList[0].bikeParkingRouteInfo.startBikeParkingInfo.stationLatitude, lng: bikeParkingRouteInfoList[0].bikeParkingRouteInfo.startBikeParkingInfo.stationLongitude}}
            />
            <Marker
                title={'bikeParkingEnd'}
                position={{lat: bikeParkingRouteInfoList[0].bikeParkingRouteInfo.endBikeParkingInfo.stationLatitude, lng: bikeParkingRouteInfoList[0].bikeParkingRouteInfo.endBikeParkingInfo.stationLongitude}}
            />
            </React.Fragment>
        }
    };

    getGraph = () => {
        const {routeStore} = this.props;
        if(!routeStore.graph) {
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
