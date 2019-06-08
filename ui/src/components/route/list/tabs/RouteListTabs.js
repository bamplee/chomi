import React, {Component} from 'react';
import {Tabs} from 'antd';
import {inject, observer} from 'mobx-react/index';

import './RouteListTabs.scss';

@inject('routeStore')
@observer
class RouteListTabs extends Component {
    render() {
        const {routeStore} = this.props;
        return (
            <Tabs className="route-list-tabs" activeKey={routeStore.routeType}
                  onChange={routeStore.handleRouteType}>
                <Tabs.TabPane tab={'전체 ' + routeStore.getTotalCount} key="TOTAL"/>
                <Tabs.TabPane tab={'버스 ' + routeStore.getBusPathListCount} key="BUS"/>
                <Tabs.TabPane tab={'지하철 ' + routeStore.getSubwayPathListCount} key="SUBWAY"/>
                {/*
                <Tabs.TabPane tab="버스+지하철" key="BUS_AND_SUBWAY"/>
*/}
            </Tabs>
        )
    }
}

export default RouteListTabs;
