import React, {Component} from 'react';
import {List, Typography} from 'antd';
import {inject, observer} from 'mobx-react';
import {Conditional} from "../common/Conditional";

@inject('rootStore')
@observer
class DetailTableTitleRow extends Component {
    render() {
        const {rootStore} = this.props;
        return (
            <Conditional if={rootStore.path}>
                <List className="detail-table"
                      dataSource={[rootStore.path]}
                      renderItem={(item, idx) => (
                          <List.Item className="row"
                                     style={{backgroundColor : '#e6f7ff'}}
                              /*
                                                     actions={[<Tag onClick={() => history.push({pathname: '/detail'})}>상세</Tag>]}
                              */
                                     onClick={() => {
                                     }}>
                              <div className="left">
                                  <div className="title">
                                      <Typography.Text strong>
                                          추천경로
                                      </Typography.Text>
                                  </div>
                                  <div className="time">
                                      <Typography.Text type="danger">
                                          {item.info.totalTime}
                                      </Typography.Text>분
                                  </div>
                                  <div className="summary">
                                      <Typography.Text>
                                          총 {Math.round(item.info.totalDistance / 1000)}km
                                      </Typography.Text>
                                      <Typography.Text>
                                          교통비 {item.info.payment}원
                                      </Typography.Text>
                                  </div>
                                  <div className="summary">
                                      <Typography.Text type="secondary">
                                          도보 {item.info.totalWalk}m
                                      </Typography.Text>
                                      <Conditional if={item.info.subwayStationCount > 0}>
                                          <Typography.Text type="secondary">
                                              지하철 {item.info.subwayStationCount}개역
                                          </Typography.Text>
                                      </Conditional>
                                      <Conditional if={item.info.busStationCount > 0}>
                                          <Typography.Text type="secondary">
                                              버스 {item.info.busStationCount}개역
                                          </Typography.Text>
                                      </Conditional>
                                  </div>
                              </div>
                              <div className="right">
                                  <div className="right-row parking">
                                      <Typography.Text>
                                          {item.parking.PARKING_NAME} 경유
                                      </Typography.Text>
                                  </div>
                                  <div className="right-row">
                                      <Typography.Text>
                                          주차비
                                      </Typography.Text>
                                      <Typography.Text type="secondary">
                                          {item.parking.ADD_RATES}원/{item.parking.ADD_TIME_RATE}분
                                      </Typography.Text>
                                  </div>
                                  <div className="right-row">
                                      <Typography.Text>
                                          주차면
                                      </Typography.Text>
                                      <Typography.Text type="secondary">
                                          잔여 {item.parking.CUR_PARKING}면/총 {item.parking.CAPACITY}면
                                      </Typography.Text>
                                  </div>
                              </div>
                          </List.Item>
                      )}
                />
            </Conditional>
        )
    }

    handleDetail = (item, idx) => {
        const {rootStore} = this.props;
        rootStore.handleRouteIndex(idx);
        /*
                history.push({pathname: '/list'})
        */
    };
}

export default DetailTableTitleRow;
