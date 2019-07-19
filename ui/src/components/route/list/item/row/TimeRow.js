import React from 'react';
import {Col} from 'antd';

import './TimeRow.scss';

function TimeRow(props) {
    /*
        const parkingRowSpan = Math.round(Math.floor(props.item.subPathList[0].parkingRouteInfo.subPathRoute.route.traoptimal[0].summary.duration / 60000) / props.item.info.totalTime * 24);
    */
    return (
        <div className="time-bar">
            {/*
            <Col span={parkingRowSpan < 2 ? 0 : parkingRowSpan}
                 className="parking">
                {Math.floor(props.item.subPathList[0].parkingRouteInfo.subPathRoute.route.traoptimal[0].summary.duration / 60000)}분
            </Col>
*/}
            {
                props.item.subPathList.map((x, idx) => {
                        if (x.subPath !== null) {
                            let rowSpan = Math.ceil(x.subPath.sectionTime / props.item.info.totalTime * 21);
                            return x.subPath.sectionTime !== 0 ?
                                <Col key={idx}
                                     span={rowSpan < 2 ? 2 : rowSpan}
                                     className={x.subPath.trafficType === 3 ? 'walk' : x.subPath.trafficType === 2 ? 'bus' : x.subPath.trafficType === 1 ? 'subway' : 'parking'}>
                                    {x.subPath.sectionTime}분
                                </Col> : ''
                        }
                        else if(x.parkingRouteInfo !== null) {
                            let rowSpan = Math.ceil(x.parkingRouteInfo.totalTime / props.item.info.totalTime * 21);
                            return x.parkingRouteInfo.totalTime !== 0 ?
                                <Col key={idx}
                                     span={rowSpan < 2 ? 2 : rowSpan}
                                     className={'parking'}>
                                    {x.parkingRouteInfo.totalTime}분
                                </Col> : ''
                        }
                        else if(x.bikeParkingRouteInfo !== null) {
                            let rowSpan = Math.ceil(x.bikeParkingRouteInfo.totalTime / props.item.info.totalTime * 21);
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

export default TimeRow;
