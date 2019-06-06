import {Icon, List, Timeline, Typography} from "antd";
import React from "react";
import RouteListTimeBar from "./RouteListTimeBar";

import './RouteListItem.scss';

function RouteListItem(props) {
    return (
        <List.Item>
            <List.Item.Meta
                className="route-list-item"
                title={
                    <div className="title">
                        <div>
                            <Typography.Text strong>
                                {props.item.info.totalTime}분
                            </Typography.Text>
                        </div>
                        <div>
                            <Typography.Text strong type="secondary">
                                {props.item.info.payment}원
                            </Typography.Text>
                        </div>
                    </div>
                }
                description={
                    <React.Fragment>
                        <div className="time-bar">
                            {
                                props.item.subPathList.map(x =>
                                    x.subPath.sectionTime !== 0 ?
                                        <RouteListTimeBar type={x.subPath.trafficType}
                                                          time={x.subPath.sectionTime}
                                                          totalTime={props.item.info.totalTime}/> : ''
                                )
                            }
                        </div>
                        <div className="path">
                            <Timeline>
                                {
                                    props.item.subPathList.map(x =>
                                        x.subPath.trafficType !== 3 ?
                                            <Timeline.Item color={x.subPath.trafficType === 1 ? '#096dd9' : '#389e0d'}>
                                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                                    <div style={{flex: 1}}>
                                                        <Typography.Text strong
                                                                         style={{color: x.subPath.trafficType === 1 ? '#096dd9' : '#389e0d', fontSize: '0.8rem', marginRight: 5}}>
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
                                                                {x.subPath.startName} <Icon type="arrow-right"
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
        </List.Item>
    )
}

export default RouteListItem;