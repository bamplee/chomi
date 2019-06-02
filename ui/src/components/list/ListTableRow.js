import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Typography, List, Tag} from 'antd';
import {Conditional} from "../common/Conditional";

@inject('rootStore')
@observer
class ListTableRow extends Component {
    render() {
        const {rootStore} = this.props;
        return (
            <List.Item className="row"
                       style={{backgroundColor: this.props.idx === rootStore.routeIndex ? '#e6f7ff' : ''}}
/*
                       actions={[<Tag onClick={() => this.props.history.push({pathname: '/detail'})}>상세</Tag>]}
*/
                       onClick={this.props.onClick}>
                <div className="left">
                    <div className="title">
                        <Typography.Text strong>
                            추천경로
                        </Typography.Text>
                    </div>
                    <div className="time">
                        <Typography.Text type="danger">
                            {this.props.item.info.totalTime}
                        </Typography.Text>분
                    </div>
                    <div className="summary">
                        <Typography.Text>
                            총 {Math.round(this.props.item.info.totalDistance / 1000)}km
                        </Typography.Text>
                        <Typography.Text>
                            교통비 {this.props.item.info.payment}원
                        </Typography.Text>
                    </div>
                    <div className="summary">
                        <Typography.Text type="secondary">
                            도보 {this.props.item.info.totalWalk}m
                        </Typography.Text>
                        <Conditional if={this.props.item.info.subwayStationCount > 0}>
                            <Typography.Text type="secondary">
                                지하철 {this.props.item.info.subwayStationCount}개역
                            </Typography.Text>
                        </Conditional>
                        <Conditional if={this.props.item.info.busStationCount > 0}>
                            <Typography.Text type="secondary">
                                버스 {this.props.item.info.busStationCount}개역
                            </Typography.Text>
                        </Conditional>
                    </div>
                </div>
                <div className="right">
                    <div className="right-row parking">
                        <Typography.Text>
                            {this.props.item.parking.PARKING_NAME} 경유
                        </Typography.Text>
                    </div>
                    <div className="right-row">
                        <Typography.Text>
                            주차비
                        </Typography.Text>
                        <Typography.Text type="secondary">
                            {this.props.item.parking.ADD_RATES}원/{this.props.item.parking.ADD_TIME_RATE}분
                        </Typography.Text>
                    </div>
                    <div className="right-row">
                        <Typography.Text>
                            주차면
                        </Typography.Text>
                        <Typography.Text type="secondary">
                            잔여 {this.props.item.parking.CUR_PARKING}면/총 {this.props.item.parking.CAPACITY}면
                        </Typography.Text>
                    </div>
                </div>
            </List.Item>
        )
    }
}

export default ListTableRow;
