import React, { Component } from 'react';
import { Radio, Card, Icon, Input, PageHeader, Timeline, Typography, Checkbox, Button } from 'antd';
import { API_MODULE } from './utils/api';
import MapView from './common/MapView';

class ChomiRoute extends Component {
    constructor(props) {
        super(props);

        this.state = this.initState();
    }

    initState = () => {
        return {
            routeIndex: 0,
            optionValue: 0,
            slideIndex: 0,
            route: {}
        }
    };

    componentWillMount = () => {
        const {startPoint, endPoint} = this.props;
        let startKeys = Object.keys(startPoint);
        let endKeys = Object.keys(endPoint);
        if (startKeys.length > 0 && endKeys.length > 0) {
            API_MODULE.route(startPoint.x, startPoint.y, endPoint.x, endPoint.y, (response) => {
                if (response.status === 200) {
                    let data = response.data.result;
                    this.setState({route: data});
                }
                else {
                    //fixme
                }
            })
        }
    };

    convertMToKm = (m) => {
        return m / 1000;
    };

    handleOptionChange = (e) => {
        this.setState({optionValue: e.target.value});
    };

    handleRouteIndex = (routeIndex) => {
        const {route} = this.state;
        if (routeIndex < 0 || routeIndex === route.subwayBusCount + route.busCount + route.subwayCount) {
            return;
        }
        this.setState({routeIndex: routeIndex});
    };

    render() {
        const {route, routeIndex} = this.state;
        const {startPoint, endPoint} = this.props;
        return (
          <React.Fragment>
              {/*
              <PageHeader title="Title" subTitle="This is a subtitle"/>
*/}
              <Input.Search
                style={{paddingLeft: 5, paddingRight: 5, paddingTop: 5, paddingBottom: 2}}
                size="large"
                addonBefore="출발"
                placeholder="출발지 검색"
                value={startPoint.name}
                onClick={() => this.props.history.push({
                    pathname: '/search',
                    search: (startPoint.name ? 'query=' + startPoint.name : ''),
                    state: {type: 'start'}
                })}
                onSearch={value => console.log(value)}
              />
              <Input.Search
                style={{paddingLeft: 5, paddingRight: 5, paddingTop: 2, paddingBottom: 2}}
                size="large"
                addonBefore="도착"
                placeholder="목적지 검색"
                value={endPoint.name}
                onClick={() => this.props.history.push({
                    pathname: '/search',
                    search: (endPoint.name ? 'query=' + endPoint.name : ''),
                    state: {type: 'end'}
                })}
                onSearch={value => console.log(value)}
              />
              {
                  Object.keys(route).length > 0 ?
                    <Card
                      actions={[<Icon type="left"
                                      onClick={() => this.handleRouteIndex(routeIndex - 1)}/>,
                          <Typography.Text>{routeIndex + 1}
                              / {route.subwayBusCount + route.busCount + route.subwayCount}</Typography.Text>,
                          <Icon type="right"
                                onClick={() => this.handleRouteIndex(routeIndex + 1)}/>]}
                      title={
                          <span></span>
                      } bordered={true} style={{margin: 5}}>
                        <div style={{marginBottom: -50}}>
                            <div style={{marginBottom: 20}}>
                                {/*
                              <Typography.Text code style={{marginRight: 10}}>경로 {routeIndex + 1} / {route.subwayBusCount + route.busCount + route.subwayCount}</Typography.Text>
*/}
                                <Typography.Text
                                  type="danger">{this.convertMToKm(route.path[routeIndex].info.totalDistance)}</Typography.Text>
                                <Typography.Text>km,&nbsp;&nbsp;&nbsp;</Typography.Text>
                                <Typography.Text>약 </Typography.Text>
                                <Typography.Text type="danger">{route.path[routeIndex].info.totalTime}</Typography.Text>
                                <Typography.Text>분,&nbsp;&nbsp;&nbsp;</Typography.Text>
                                <Typography.Text type="warning">{route.path[routeIndex].info.payment}</Typography.Text>
                                <Typography.Text>원</Typography.Text>
                            </div>
                            <Timeline>
                                <Timeline.Item>{route.path[routeIndex].info.firstStartStation}</Timeline.Item>
                                <Timeline.Item color="orange">TEST - 주차장</Timeline.Item>
                                {/*
                            <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">ABCD</Timeline.Item>
*/}
                                <Timeline.Item
                                  color="green">{route.path[routeIndex].info.lastEndStation}</Timeline.Item>
                                {/*
                            <Timeline.Item color="orange">도착</Timeline.Item>
                            <Timeline.Item color="red">도착</Timeline.Item>
*/}
                            </Timeline>
                        </div>
                    </Card> : ''
              }
          </React.Fragment>
        )
    }
}

export default ChomiRoute;
