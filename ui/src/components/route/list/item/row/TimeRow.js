import React, {Component} from 'react';
import {Col} from 'antd';

import './TimeRow.scss';

class TimeRow extends Component {
    /*
        const parkingRowSpan = Math.round(Math.floor(this.props.item.subPathList[0].parkingRouteInfo.subPathRoute.route.traoptimal[0].summary.duration / 60000) / this.props.item.info.totalTime * 24);
    */

    getSubwayColor = (x) => {
        return x.subPath.lane[0].name === '수도권 1호선' ? '#0052A4'
            : x.subPath.lane[0].name === '수도권 2호선' ? '#009D3E'
                : x.subPath.lane[0].name === '수도권 3호선' ? '#EF7C1C'
                    : x.subPath.lane[0].name === '수도권 4호선' ? '#00A5DE'
                        : x.subPath.lane[0].name === '수도권 5호선' ? '#996CAC'
                            : x.subPath.lane[0].name === '수도권 6호선' ? '#CD7C2F'
                                : x.subPath.lane[0].name === '수도권 7호선' ? '#747F00'
                                    : x.subPath.lane[0].name === '수도권 8호선' ? '#EA545D'
                                        : x.subPath.lane[0].name === '수도권 9호선' ? '#A17E46'
                                            : x.subPath.lane[0].name === '분당선' ? '#F5A200'
                                                : x.subPath.lane[0].name === '경의중앙선' ? '#77C4A3'
                                                    : x.subPath.lane[0].name === '신분당선' ? '#D4003B' : '#0052A4';
    };

    render() {
        return (
            <div className="time-bar">
                {/*
            <Col span={parkingRowSpan < 2 ? 0 : parkingRowSpan}
                 className="parking">
                {Math.floor(this.props.item.subPathList[0].parkingRouteInfo.subPathRoute.route.traoptimal[0].summary.duration / 60000)}분
            </Col>
*/}
                {
                    this.props.item.subPathList.map((x, idx) => {
                            if (x.subPath !== null) {
                                let rowSpan = Math.ceil(x.subPath.sectionTime / this.props.item.info.totalTime * 21);
                                return x.subPath.sectionTime !== 0 ?
                                    <Col key={idx}
                                         span={rowSpan < 2 ? 2 : rowSpan}
                                         style={{backgroundColor : x.subPath.trafficType === 1 && this.getSubwayColor(x)}}
                                         className={x.subPath.trafficType === 3 ? 'walk' : x.subPath.trafficType === 2 ? 'bus' : x.subPath.trafficType === 1 ? 'subway' : 'parking'}>
                                        {x.subPath.sectionTime}분
                                    </Col> : ''
                            } else if (x.parkingRouteInfo !== null) {
                                let rowSpan = Math.ceil(x.parkingRouteInfo.totalTime / this.props.item.info.totalTime * 21);
                                return x.parkingRouteInfo.totalTime !== 0 ?
                                    <Col key={idx}
                                         span={rowSpan < 2 ? 2 : rowSpan}
                                         className={'parking'}>
                                        {x.parkingRouteInfo.totalTime}분
                                    </Col> : ''
                            } else if (x.bikeParkingRouteInfo !== null) {
                                let rowSpan = Math.ceil(x.bikeParkingRouteInfo.totalTime / this.props.item.info.totalTime * 21);
                                return x.bikeParkingRouteInfo.totalTime !== 0 ?
                                    <Col key={idx}
                                         span={rowSpan < 2 ? 2 : rowSpan}
                                         className={'bike'}>
                                        {x.bikeParkingRouteInfo.totalTime}분
                                    </Col> : ''
                            }
                        }
                    )
                }
            </div>
        )
    }
}

export default TimeRow;
