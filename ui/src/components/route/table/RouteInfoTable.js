import React, {Component} from 'react';
import { Card, Icon, Typography } from 'antd';
import {inject, observer} from 'mobx-react';

import RouteInfoDescriptionRow from '../row/RouteInfoDescriptionRow';
import RouteInfoTitleRow from '../row/RouteInfoTitleRow';

@inject('routeStore')
@observer
class RouteInfoTable extends Component {
    render() {
        const {routeStore} = this.props;
        return (
            <Card className="route_result_card"
                  actions={[
                      <Icon type="left" onClick={routeStore.decreaseRouteIndex}/>,
                      <Typography.Text>
                          {this.pagination(routeStore.routeIndex, routeStore.routeList)}
                      </Typography.Text>,
                      <Icon type="right" onClick={routeStore.increaseRouteIndex}/>]} bordered={true}>
                <RouteInfoTitleRow/>
                <RouteInfoDescriptionRow/>
            </Card>
        )
    }

    pagination = (routeIndex, routeList) => {
        return (routeIndex * 1 + 1) + '/' + (routeList.subwayBusCount * 1 + routeList.busCount * 1 + routeList.subwayCount * 1);
    };

    decreaseRouteIndex = () => {
        this.decreaseRouteIndex();
    };

    increaseRouteIndex = () => {
        this.increaseRouteIndex();
    };
}

export default RouteInfoTable;
