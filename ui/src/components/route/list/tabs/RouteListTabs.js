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
                <div className="route-list-tabs-header" style={{backgroundColor: routeStore.useCar ? '#e6f7ff' : ''}}>
                    <Badge dot>
                        <Icon type="notification" />
                    </Badge>
                    <Typography.Text style={{marginLeft: 10, marginRight: 6}}>자동차로 출발하시나요?</Typography.Text>
                    <Checkbox onChange={routeStore.handleUseCar}/>
                </div>
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
}

export default RouteListTabs;
