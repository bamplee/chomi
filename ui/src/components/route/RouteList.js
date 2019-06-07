import React, {Component} from 'react';
import {List, Spin} from 'antd';
import {inject, observer} from 'mobx-react/index';
import RouteListItem from "./RouteListItem";
import RouteListTabs from "./RouteListTabs";
import RouteDriveBar from "./RouteDriveBar";

@inject('routeStore')
@observer
class RouteList extends Component {
    render() {
        const {routeStore} = this.props;
        return (
            <React.Fragment>
                <Spin spinning={routeStore.loading} tip="Loading...">
                    <RouteListTabs/>
                    <RouteDriveBar/>
                    <List dataSource={routeStore.getPathList}
                          renderItem={(item, idx) => (
                              <RouteListItem key={idx} loading={routeStore.loading} item={item}/>
                          )}
                    />
                </Spin>
            </React.Fragment>
        )
    }
}

export default RouteList;
