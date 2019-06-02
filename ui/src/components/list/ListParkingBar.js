import React, {Component} from 'react';
import {Icon, List, Typography} from 'antd';
import {inject, observer} from "mobx-react";
import {Conditional} from "../common/Conditional";

@inject('rootStore')
@observer
class ListParkingBar extends Component {
    render() {
        const {rootStore} = this.props;
        return (
            <Conditional if={this.props.idx === rootStore.routeIndex}>
                <List dataSource={[rootStore.parking]}
                      renderItem={(item, idx) => (
                          <List.Item className="parking"
                                     actions={[<Icon type="right"/>]}>
                              <div className="left">
                                  <div className="title">
                                      <Typography.Text>
                                          {item.ADDR}
                                      </Typography.Text>
                                  </div>
                                  <div className="parking">
                                      <Typography.Text>
                                          {item.PARKING_NAME}
                                      </Typography.Text>
                                  </div>
                              </div>
                              <div className="right">
                                  <div className="row">
                                      <Typography.Text>시간</Typography.Text>
                                      <Typography.Text type="danger">
                                          {item.ADD_RATES * (60 / item.ADD_TIME_RATE)}
                                      </Typography.Text>
                                      <Typography.Text>원</Typography.Text>
                                  </div>
                                  <div className="row">
                                      <Typography.Text>주말 </Typography.Text>
                                      <Typography.Text>{item.SATURDAY_PAY_NM}</Typography.Text>
                                  </div>
                              </div>
                          </List.Item>
                      )}
                />
            </Conditional>
        )
    }
}

export default ListParkingBar;
