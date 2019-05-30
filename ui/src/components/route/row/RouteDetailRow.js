import React, {Component} from 'react';
import {Typography, Tag, Timeline, Icon} from 'antd';
import {inject, observer} from 'mobx-react';
import {Conditional} from '../../common/Conditional';

@inject('searchStore', 'routeStore')
@observer
class RouteDetailRow extends Component {
    render() {
        const {searchStore, routeStore} = this.props;
        return (
            <Timeline>
                <Timeline.Item color="#002766">
                    <Typography.Text>{searchStore.departure.name} 출발</Typography.Text>
                </Timeline.Item>
                {
                    routeStore.subPath ? routeStore.subPath.map((x, idx) => {
                        return (
                            <Timeline.Item key={idx} color={this.getTrafficTypeColor(x.trafficType)}>
                                <Conditional if={x.trafficType === 1}>
                                    <Tag color="#f50">지하철</Tag>
                                    <div className="route_card_sub_title">
                                        <Typography.Text className="route_card_sub_description"
                                                         mark>{x.lane ? x.lane[0].name : ''}</Typography.Text>
                                        <Typography.Text strong>{x.startName}역</Typography.Text>
                                        <Icon type="swap-right"/>
                                        <Typography.Text strong>{x.endName}역</Typography.Text>
                                    </div>
                                </Conditional>
                                <Conditional if={x.trafficType === 2}>
                                    <Tag color="#2db7f5">버스</Tag>
                                    <div className="route_card_sub_title">
                                        <Typography.Text className="route_card_sub_description"
                                                         mark>{x.lane ? x.lane[0].busNo : ''}</Typography.Text>
                                        <Typography.Text strong>{x.startName}</Typography.Text>
                                        <Icon type="swap-right"/>
                                        <Typography.Text strong>{x.endName}</Typography.Text>
                                    </div>
                                </Conditional>
                                <Conditional if={x.trafficType === 3}>
                                    <Tag color="#87d068">도보</Tag>
                                </Conditional>
                                <div className="route_card_sub_title">
                                    <Typography.Text type="secondary"
                                                     className="route_card_sub_bottom">{x.sectionTime}분</Typography.Text>
                                    <Typography.Text type="secondary"
                                                     className="route_card_sub_bottom">{x.distance}m</Typography.Text>
                                    <Typography.Text
                                        type="secondary">{x.lane ? x.lane.length + '개 정류장 이동' : ''}</Typography.Text>
                                </div>
                            </Timeline.Item>
                        )
                    }) : ''
                }
                <Timeline.Item color="#002766">
                    <Typography.Text>{searchStore.destination.name} 도착</Typography.Text>
                </Timeline.Item>
            </Timeline>
        )
    }

    getTrafficTypeColor = (trafficType) => {
        if (trafficType === 1) {
            return '#f50';
        }
        else if (trafficType === 2) {
            return '#2db7f5';
        }
        else if (trafficType === 3) {
            return '#87d068';
        }
    };
}

export default RouteDetailRow;
