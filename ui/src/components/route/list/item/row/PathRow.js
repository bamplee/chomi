import {Icon, Timeline, Typography} from "antd";
import React from "react";

import './PathRow.scss';

function PathRow(props) {
    return (
        <div className="path">
            <Timeline>
                <Timeline.Item color="#d4380d">
                    {/*
                                                            time={Math.floor(.route.traoptimal[0].summary.duration / 60000)}
                                                            totalTime={props.item.info.totalTime}/>
*/}

                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <div style={{flex: 1}}>
                            <Typography.Text strong
                                             style={{
                                                 color: '#d4380d',
                                                 fontSize: '0.8rem',
                                                 marginRight: 5
                                             }}>
                                자동차
                            </Typography.Text>
                        </div>
                        <div style={{
                            flex: 3,
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <div>
                                <Typography.Text style={{fontSize: '0.8rem'}}>
                                    {props.item.subPathList[0].parkingRouteInfo.parkingInfo.parkingName} 주차장으로
                                    출발
                                </Typography.Text>
                            </div>
                            <div>
                                <Typography.Text style={{fontSize: '0.8rem'}}
                                                 type="secondary"
                                code>
                                    잔여<Typography.Text
                                    style={{fontSize: '0.7rem'}}
                                    type="danger"> {props.item.subPathList[0].parkingRouteInfo.parkingInfo.capacity - props.item.subPathList[0].parkingRouteInfo.parkingInfo.curParking}</Typography.Text>면
                                    / 총<Typography.Text
                                    style={{
                                        fontSize: '0.7rem',
                                        color: '#002766'
                                    }}> {props.item.subPathList[0].parkingRouteInfo.parkingInfo.capacity}</Typography.Text>면
                                </Typography.Text>
                            </div>
                        </div>
                    </div>
                </Timeline.Item>
                {
                    props.item.subPathList.map((x, idx) =>
                        x.subPath.trafficType !== 3 ?
                            <Timeline.Item
                                key={idx}
                                color={x.subPath.trafficType === 1 ? '#096dd9' : '#389e0d'}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}>
                                    <div style={{flex: 1}}>
                                        <Typography.Text strong
                                                         style={{
                                                             color: x.subPath.trafficType === 1 ? '#096dd9' : '#389e0d',
                                                             fontSize: '0.8rem',
                                                             marginRight: 5
                                                         }}>
                                            {
                                                x.subPath.trafficType === 1 ?
                                                    x.subPath.lane[0].name :
                                                    x.subPath.lane[0].busNo
                                            }
                                        </Typography.Text>
                                    </div>
                                    <div style={{
                                        flex: 3,
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}>
                                        <div>
                                            <Typography.Text
                                                style={{fontSize: '0.8rem'}}>
                                                {x.subPath.startName} <Icon
                                                type="arrow-right"
                                                style={{fontSize: '0.5rem'}}/> {x.subPath.endName}
                                            </Typography.Text>
                                        </div>
                                    </div>
                                </div>
                            </Timeline.Item>
                            : ''
                    )
                }
            </Timeline>
        </div>
    )
}

export default PathRow;