import React, {Component} from 'react';
import {Badge, Button, Checkbox, Icon, Typography} from 'antd';
import {inject, observer} from 'mobx-react/index';

import './RouteListTabs.scss';

@inject('routeStore')
@observer
class RouteListTabs extends Component {
    render() {
        const {routeStore} = this.props;
        return (
            <React.Fragment>
                <div className="route-list-tabs">
                    <Button style={{marginRight: 10}} className={routeStore.useAll ? "all-selected" : ""} size="small"
                            onClick={routeStore.handleUseAll}>
                        추천경로
                    </Button>
                    <span style={{borderRight: '1px solid #e2e2e2', marginRight: 10}}/>
                    <Button type={routeStore.useBus ? "primary" : "dashed"} size="small"
                            onClick={routeStore.handleUseBus}>
                        버스
                    </Button>
                    <Button type={routeStore.useSubway ? "primary" : "dashed"} size="small"
                            onClick={routeStore.handleUseSubway}>
                        지하철
                    </Button>
                    <Button type={routeStore.useBike ? "primary" : "dashed"} size="small"
                            onClick={routeStore.handleUseBike}>
                        자전거
                    </Button>
                    {/*
                    <Button type={routeStore.useCar ? "primary" : "dashed"} size="small"
                            onClick={routeStore.handleUseCar}>
                        자동차
                    </Button>
*/}
                </div>
                <div className="route-list-tabs-header"
                     style={{cursor: 'pointer', backgroundColor: routeStore.useCar ? '#e6f7ff' : ''}}>
                    <div className="item">
                        <Badge dot>
                            <Icon type="notification"/>
                        </Badge>
                        <Typography.Text style={{marginLeft: 10, marginRight: 6}}>자동차로 출발하시나요?</Typography.Text>
                    </div>
                    <div className="item">
                        <Checkbox onChange={routeStore.handleUseCar} defaultChecked={routeStore.useCar}>주차장 경유 경로</Checkbox>
                    </div>
                </div>
                <div className="route-list-footer"
                     style={{cursor: 'pointer', backgroundColor: routeStore.useRecommend ? '#e6f7ff' : ''}}>
                    <div className="top">
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <div className="forecast-warning" style={{textAlign: 'center', fontSize: '0.6rem', marginRight: 16}}>
                                <div style={{marginTop: 3, paddingBottom: 2}}>
                                    {
                                        routeStore.forecastWarning.CAISTEP === '좋음' ?
                                            <img src="https://imgur.com/ptAjDjW.png" alt={"face"}
                                                 style={{width: 26, height: 26}}/>
                                            :
                                            <img src="https://imgur.com/Ewu55gU.png" alt={"bad"}
                                                 style={{width: 26, height: 26}}/>
                                    }
                                </div>
                                <div className="description">
                                    <div>
                                        <Typography.Text type="secondary">미세먼지</Typography.Text>
                                    </div>
                                    <div style={{marginTop: -4}}>
                                        <Typography.Text type="secondary">
                                            {
                                                routeStore.forecastWarning.CAISTEP
                                            }
                                        </Typography.Text>
                                    </div>
                                </div>
                            </div>
                            {
                                routeStore.forecast &&
                                <div className="forecast" style={{width: '50px', textAlign: 'center', fontSize: '0.8rem', marginRight: 2}}>
                                    <div style={{paddingRight: 3}}>
                                        {
                                            routeStore.forecast.rain ?
                                                <img src="https://imgur.com/NywhKKt.png" alt={"rain"}
                                                     style={{width: 30, height: 30}}/>
                                                :
                                                <img src="https://imgur.com/XSOby2y.png" alt={"normal"}
                                                     style={{width: 30, height: 30}}/>
                                        }
                                    </div>
                                    <div className="description">
                                        <Typography.Text type="secondary">
                                            {
                                                ((routeStore.forecast.main && routeStore.forecast.main.temp - 273.15) * 1).toFixed(1) + '°'
                                            }
                                        </Typography.Text>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="right">
                            <div className="description">
                                <Checkbox onChange={routeStore.handleUseRecommend} defaultChecked={routeStore.useRecommend}>날씨별 추천 경로</Checkbox>
                            </div>
                            {/*
                            <div className="time">
                                <Typography.Text disabled
                                                 style={{fontSize: '0.7rem'}}>{this.getTimeStamp()}</Typography.Text>
                            </div>
*/}
                        </div>
                    </div>
                </div>
            </React.Fragment>
            /*
                        <Tabs className="route-list-tabs" activeKey={routeStore.routeType}
                              onChange={routeStore.handleRouteType}>
                            <Tabs.TabPane tab={'추천 ' + routeStore.getTotalCount} key="TOTAL"/>
                            <Tabs.TabPane tab={'버스 ' + routeStore.getBusPathListCount} key="BUS"/>
                            <Tabs.TabPane tab={'지하철 ' + routeStore.getSubwayPathListCount} key="SUBWAY"/>
                        </Tabs>
            */
        )
    }

    getTimeStamp = () => {
        let d = new Date();
        let s =
            this.leadingZeros(d.getFullYear(), 4) + '-' +
            this.leadingZeros(d.getMonth() + 1, 2) + '-' +
            this.leadingZeros(d.getDate(), 2) + ' ' +
            this.leadingZeros(d.getHours(), 2) + ':' +
            this.leadingZeros(d.getMinutes(), 2) + ':' +
            this.leadingZeros(d.getSeconds(), 2);

        return s;
    };

    leadingZeros = (n, digits) => {
        let zero = '';
        n = n.toString();

        if (n.length < digits) {
            for (let i = 0; i < digits - n.length; i++)
                zero += '0';
        }
        return zero + n;
    };
}

export default RouteListTabs;
