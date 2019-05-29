import React, { Component } from 'react';
import { Typography, Tag, Timeline, Icon, List } from 'antd';
import { inject, observer } from 'mobx-react';
import { Conditional } from '../common/Conditional';

@inject('routeStore')
@observer
class SummaryRouteTable extends Component {
    render() {
        const {routeStore} = this.props;
        return (
          <List
            dataSource={routeStore.path}
            renderItem={(item, idx) => (
              <List.Item onClick={() => this.props.history.push({pathname: '/route'})}>
                  <div className="summary_route_table">
                      <div className="header">
                          <span><Tag>경로 {idx + 1}</Tag></span>
                          <span className="content">약 <Typography.Text
                            type="danger">{item.info.totalTime}</Typography.Text>분</span>
                          <span className="content"><Typography.Text type="danger">{item.info.payment}</Typography.Text>원</span>
                          <Typography.Text>총거리 <Typography.Text
                            type="danger">{item.info.totalDistance}</Typography.Text>m</Typography.Text>
                      </div>
                      <List.Item.Meta
                        title={
                            <div className="description">
                                {
                                    item.subPath.map(x =>
                                      <Conditional if={x.trafficType !== 3}>
                                          <div className="content">
                                              <Conditional if={x.trafficType === 1}>
                                                  <Tag color="#f50" className="label">지하철</Tag>
                                                  <Typography.Text className="left"
                                                                   mark>{x.lane ? x.lane[0].name : ''}</Typography.Text>{x.startName}역<Icon
                                                type="swap-right" className="icon"/>{x.endName}역
                                              </Conditional>
                                              <Conditional if={x.trafficType === 2}>
                                                  <Tag color="#2db7f5" className="label">버스</Tag>
                                                  <Typography.Text className="right"
                                                                   mark>{x.lane ? x.lane[0].busNo : ''}</Typography.Text>{x.startName}<Icon
                                                type="swap-right" className="icon"/>{x.endName}
                                              </Conditional>
                                          </div>
                                      </Conditional>)
                                }
                            </div>
                        }
                        description={
                            <div>
                                <Typography.Text>버스정류장 {item.info.busStationCount}개 +
                                    지하철역 {item.info.subwayStationCount}개</Typography.Text>
                            </div>
                        }
                      />
                  </div>
              </List.Item>
            )}>
          </List>
        )
    }
}

export default SummaryRouteTable;
