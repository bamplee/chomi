import React, {Component} from 'react';
import {Badge, Button, Checkbox, Icon, Radio, Typography} from 'antd';
import {inject, observer} from 'mobx-react/index';

import './RouteListTabs.scss';

@inject('routeStore')
@observer
class RouteListTabs extends Component {
    constructor(props) {
        super(props);
        this.state = this.initState();
    };

    initState = () => {
        return {
            isOpenTrafficType: false,
            isOpenSortType: false,
        };
    };

    handleIsOpenTrafficType = () => {
        this.setState({isOpenTrafficType: !this.state.isOpenTrafficType, isOpenSortType: false});
    };

    handleIsOpenSortType = () => {
        this.setState({isOpenTrafficType: false, isOpenSortType: !this.state.isOpenSortType});
    };

    render() {
        const {routeStore} = this.props;
        return (
            <React.Fragment>
                <div className="route-list-tabs-main">
                    <Button style={{marginRight: 10}} className={this.state.isOpenTrafficType ? "all-selected" : ''}
                            onClick={this.handleIsOpenTrafficType}>
                        {
                            <React.Fragment>
                                {
                                    routeStore.useCar &&
                                    <Typography.Text style={{color: this.state.isOpenTrafficType && '#ffffff'}}>
                                        자동차
                                    </Typography.Text>
                                }
                                {
                                    routeStore.useBus &&
                                    <Typography.Text style={{color: this.state.isOpenTrafficType && '#ffffff'}}>
                                        {routeStore.useCar && ', '}
                                        버스
                                    </Typography.Text>
                                }
                                {
                                    routeStore.useSubway &&
                                    <Typography.Text style={{color: this.state.isOpenTrafficType && '#ffffff'}}>
                                        {(routeStore.useCar || routeStore.useBus) && ', '}
                                        지하철
                                    </Typography.Text>
                                }
                                {
                                    routeStore.useBike &&
                                    <Typography.Text style={{color: this.state.isOpenTrafficType && '#ffffff'}}>
                                        {(routeStore.useCar || routeStore.useBus || routeStore.useSubway) && ', '}
                                        자전거
                                    </Typography.Text>
                                }
                            </React.Fragment>
                        }
                    </Button>
                    <Button style={{marginRight: 10}} className={this.state.isOpenSortType ? "all-selected" : ''}
                            onClick={this.handleIsOpenSortType}>
                        {
                            routeStore.sortType === 'transfer' ? '환승' : routeStore.sortType === 'time' ? '시간' : routeStore.sortType === 'weather' ? '날씨' : '걸음'
                        }
                    </Button>
                </div>
                {
                    this.state.isOpenTrafficType &&
                    <div className="route-list-tabs">
                        <div style={{
                            marginBottom: 8,
                            borderBottom: '1px solid #e8e8e8',
                            paddingBottom: 8,
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <Typography.Text strong>이용할 교통수단을 선택하세요</Typography.Text>
                            <Icon style={{marginTop: 4}} type="close" onClick={this.handleIsOpenTrafficType}/>
                        </div>
                        <div style={{
                            marginBottom: 8,
                            paddingBottom: 8,
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <Checkbox indeterminate={true} onChange={routeStore.handleUseAll}
                                      checked={routeStore.useAll}>전체</Checkbox>
                        </div>
                        <div>
                            <Checkbox onChange={routeStore.handleUseCar} checked={routeStore.useCar}>자동차</Checkbox>
                            <Checkbox onChange={routeStore.handleUseBus} checked={routeStore.useBus}>버스</Checkbox>
                            <Checkbox onChange={routeStore.handleUseSubway}
                                      checked={routeStore.useSubway}>지하철</Checkbox>
                            <Checkbox onChange={routeStore.handleUseBike} checked={routeStore.useBike}>자전거</Checkbox>
                        </div>
                        {/*
                    <Button type={routeStore.useCar ? "primary" : "dashed"} size="small"
                            onClick={routeStore.handleUseCar}>
                        자동차
                    </Button>
*/}
                    </div>
                }
                {
                    this.state.isOpenSortType &&
                    <div className="route-list-tabs">
                        <div style={{
                            marginBottom: 8,
                            borderBottom: '1px solid #e8e8e8',
                            paddingBottom: 8,
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <Typography.Text strong>경로 탐색 기준을 골라주세요</Typography.Text>
                            <Icon style={{marginTop: 4}} type="close" onClick={this.handleIsOpenSortType}/>
                        </div>
                        <div style={{
                            marginBottom: 8,
                            paddingBottom: 8,
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <Radio.Group onChange={this.handleSortType} value={routeStore.sortType}>
                                <Radio value={'time'}>시간</Radio>
                                <Radio value={'transfer'}>환승</Radio>
                                <Radio value={'walk'}>걸음</Radio>
                                <Radio value={'weather'}>날씨</Radio>
                            </Radio.Group>
                        </div>
{/*
                        <div>
                        <Radio.Group onChange={this.handleSortType} value={routeStore.sortType}>
                            <Radio value={'time'}>시간</Radio>
                            <Radio value={'transfer'}>환승</Radio>
                            <Radio value={'walk'}>걸음</Radio>
                            <Radio value={'weather'}>날씨</Radio>
                        </Radio.Group>
                        </div>
*/}
                        {/*
                    <Button type={routeStore.useCar ? "primary" : "dashed"} size="small"
                            onClick={routeStore.handleUseCar}>
                        자동차
                    </Button>
*/}
                    </div>
                }
                {
                    routeStore.sortType === 'weather' ?
                    <div className="route-list-footer"
                         style={{cursor: 'pointer', backgroundColor: '#e6f7ff'}}>
                        <div className="top">
                            <div style={{display: 'flex'}}>
                                <div className="forecast-warning"
                                     style={{textAlign: 'center', fontSize: '0.6rem', marginRight: 16}}>
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
                                    <div className="forecast"
                                         style={{
                                             width: '50px',
                                             textAlign: 'center',
                                             fontSize: '0.8rem',
                                             marginRight: 2
                                         }}>
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
                                <span style={{marginRight: 8}}>
                                    <Badge dot>
                                        <Icon type="notification"/>
                                </Badge>
                            </span>
                                    {
                                        routeStore.forecast ?
                                            routeStore.forecastWarning.CAISTEP === '좋음' && !routeStore.forecast.rain ?
                                                <Typography.Text>화창한 날 좋은길 보실래요?</Typography.Text>
                                                : routeStore.forecast.rain ?
                                                <Typography.Text>비 많이 안맞는 길 추천해드려요!</Typography.Text> : ''
                                            : ''
                                    }
                                </div>
                            </div>
                        </div>
                    </div> : ''
                }
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

    handleSortType = (e) => {
        const {routeStore} = this.props;
        routeStore.handleSortType(e.target.value);
    };

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
