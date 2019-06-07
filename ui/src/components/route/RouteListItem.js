import {Icon, List, Skeleton, Timeline, Typography} from "antd";
import React from "react";
import RouteListTimeBar from "./RouteListTimeBar";

import './RouteListItem.scss';

function RouteListItem(props) {
    return (
        <List.Item className="route-list-item"
                   onClick={() => alert('개발중')}>
            <Skeleton loading={props.loading} active>
                <List.Item.Meta title={
                    <div className="title">
                        <div>
                            <Typography.Text className="minute" strong>
                                {props.item.info.totalTime}분
                            </Typography.Text>
                        </div>
                        <div>
                            <Typography.Text className="price" type="secondary">
                                교통비+유류비 <Typography.Text type="warning">{props.item.info.payment + props.item.subPathList[0].parkingRouteInfoList[0].subPathRoute.route.traoptimal[0].summary.fuelPrice}</Typography.Text>원
                            </Typography.Text>
                        </div>
{/*
                        <div>
                            <Typography.Text className="price" type="secondary">
                                유류비 <Typography.Text
                                type="warning">{props.item.subPathList[0].parkingRouteInfoList[0].subPathRoute.route.traoptimal[0].summary.fuelPrice}</Typography.Text>원
                            </Typography.Text>
                        </div>
*/}
                        <div>
                            {
                                props.item.subPathList[0].parkingRouteInfoList[0].parkingInfo.payYn === 'Y' ?
                                    props.item.subPathList[0].parkingRouteInfoList[0].parkingInfo.holidayPayYn === 'N' ?
                                        <Typography.Text className="price" type="secondary">
                                            주차 <Typography.Text
                                            type="warning">{props.item.subPathList[0].parkingRouteInfoList[0].parkingInfo.rates * (60 / props.item.subPathList[0].parkingRouteInfoList[0].parkingInfo.timeRate)}</Typography.Text>원/시간
                                        </Typography.Text>
                                        :
                                        <Typography.Text className="price" type="warning">
                                            무료
                                        </Typography.Text>
                                    : <Typography.Text className="price" type="warning">
                                        주말무료
                                    </Typography.Text>
                            }
                        </div>
                    </div>
                }
                                description={
                                    <React.Fragment>
                                        <div className="time-bar">
                                            <RouteListTimeBar type={4}
                                                              time={Math.floor(props.item.subPathList[0].parkingRouteInfoList[0].subPathRoute.route.traoptimal[0].summary.duration / 60000)}
                                                              totalTime={props.item.info.totalTime}/>
                                            {
                                                props.item.subPathList.map((x, idx) =>
                                                    x.subPath.sectionTime !== 0 ?
                                                        <RouteListTimeBar key={idx}
                                                                          type={x.subPath.trafficType}
                                                                          time={x.subPath.sectionTime}
                                                                          totalTime={props.item.info.totalTime}/> : ''
                                                )
                                            }
                                        </div>
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
                                                                    {props.item.subPathList[0].parkingRouteInfoList[0].parkingInfo.parkingName} 주차장으로
                                                                    출발
                                                                </Typography.Text>
                                                            </div>
                                                            <div>
                                                                <Typography.Text style={{fontSize: '0.8rem'}}
                                                                                 type="secondary">
                                                                    잔여<Typography.Text
                                                                    style={{fontSize: '0.8rem'}}
                                                                    type="danger">{props.item.subPathList[0].parkingRouteInfoList[0].parkingInfo.capacity - props.item.subPathList[0].parkingRouteInfoList[0].parkingInfo.curParking}</Typography.Text>면
                                                                    / 총<Typography.Text
                                                                    style={{
                                                                        fontSize: '0.8rem',
                                                                        color: '#002766'
                                                                    }}>{props.item.subPathList[0].parkingRouteInfoList[0].parkingInfo.capacity}</Typography.Text>면
                                                                    (최근 20분 내)
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
                                    </React.Fragment>
                                }
                />
            </Skeleton>
        </List.Item>
    )
}

export default RouteListItem;