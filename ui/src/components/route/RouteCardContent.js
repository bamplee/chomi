import React, { Component } from 'react';
import { Typography, Tag, Timeline, Icon } from 'antd';
import { inject, observer } from 'mobx-react';

@inject('searchStore')
@observer
class RouteCardContent extends Component {
    render() {
        const {searchStore} = this.props;
        return (
          <Timeline>
              {
                  searchStore.routeList.path[searchStore.routeIndex].subPath.map((x, idx) => {
                      return (
                        <Timeline.Item key={idx} color={this.getTrafficTypeColor(x.trafficType)}>
                            {this.getTrafficTypeName(x.trafficType)}
                            <Typography.Text type="secondary">{x.sectionTime}분</Typography.Text>
                            {/*
                            <Typography.Text type="secondary">{x.distance / 1000}km</Typography.Text>
*/}
                            {
                                x.trafficType === 2 ?
                                  <div className="route_card_sub_title">
                                      <Typography.Text className="route_card_sub_description"
                                                       mark>{x.lane[0].busNo}번버스</Typography.Text>
                                      <Typography.Text strong>{x.startName}</Typography.Text>
                                      <Icon type="swap-right"/>
                                      <Typography.Text strong>{x.endName}</Typography.Text>
                                  </div> : ''
                            }
                            {
                                x.trafficType === 1 ?
                                  <div className="route_card_sub_title">
                                      <Typography.Text className="route_card_sub_description"
                                                       mark>{x.lane[0].name}</Typography.Text>
                                      <Typography.Text strong>{x.startName}역</Typography.Text>
                                      <Icon type="swap-right"/>
                                      <Typography.Text strong>{x.endName}역</Typography.Text>
                                  </div> : ''
                            }
                        </Timeline.Item>
                      )
                  })
              }
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

    getTrafficTypeName = (trafficType) => {
        if (trafficType === 1) {
            return <Tag color="#f50">지하철</Tag>;
        }
        else if (trafficType === 2) {
            return <Tag color="#2db7f5">버스</Tag>;
        }
        else if (trafficType === 3) {
            return <Tag color="#87d068">도보</Tag>;
        }
    };
}

export default RouteCardContent;
