import React from 'react';
import {Col} from 'antd';

import './RouteListTimeBar.scss';

function RouteListTimeBar(props) {
    const span = Math.round(props.time / props.totalTime * 24);
    return (
        <Col span={span < 2 ? '' : span}
             className={props.type === 3 ? 'walk' : props.type === 2 ? 'bus' : props.type === 1 ? 'subway' : 'parking'}>
            {props.time}분
        </Col>
    )
}

export default RouteListTimeBar;
