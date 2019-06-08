import React from 'react';
import {Col} from 'antd';

import './TimeRow.scss';

function TimeRow(props) {
    const parkingRowSpan = Math.round(Math.floor(props.item.subPathList[0].parkingRouteInfoList[0].subPathRoute.route.traoptimal[0].summary.duration / 60000) / props.item.info.totalTime * 24);
    return (
        <div className="time-bar">
            <Col span={parkingRowSpan < 2 ? 0 : parkingRowSpan}
                 className="parking">
                {Math.floor(props.item.subPathList[0].parkingRouteInfoList[0].subPathRoute.route.traoptimal[0].summary.duration / 60000)}분
            </Col>
            {
                props.item.subPathList.map((x, idx) => {
                        const rowSpan = Math.round(x.subPath.sectionTime / props.item.info.totalTime * 24);
                        return x.subPath.sectionTime !== 0 ?
                            <Col key={idx}
                                 span={rowSpan < 2 ? 0 : rowSpan}
                                 className={x.subPath.trafficType === 3 ? 'walk' : x.subPath.trafficType === 2 ? 'bus' : x.subPath.trafficType === 1 ? 'subway' : 'parking'}>
                                {x.subPath.sectionTime}분
                            </Col> : ''
                    }
                )
            }
        </div>
    )
}

export default TimeRow;
