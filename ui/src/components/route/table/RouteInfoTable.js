import React, {Component} from 'react';
import {Card, Icon, Typography} from 'antd';
import {inject, observer} from 'mobx-react';

import RouteDetailRow from '../row/RouteDetailRow';
import RouteSummaryRow from '../row/RouteSummaryRow';

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
                <RouteSummaryRow/>
                <RouteDetailRow/>
            </Card>
        )
    }

    pagination = (routeIndex, routeList) => {
        return (routeIndex * 1 + 1) + '/' + (routeList.subwayBusCount * 1 + routeList.busCount * 1 + routeList.subwayCount * 1);
    };
}

export default RouteInfoTable;
