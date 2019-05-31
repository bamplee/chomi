import React, {Component} from 'react';
import {Card, Icon, Typography} from 'antd';
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
                      <Icon type="left" onClick={this.decreaseRouteIndex}/>,
                      <Typography.Text>
                          {this.pagination(routeStore.routeIndex, routeStore.routeList)}
                      </Typography.Text>,
                      <Icon type="right" onClick={this.increaseRouteIndex}/>]} bordered={true}>
                <RouteInfoTitleRow/>
                <RouteInfoDescriptionRow/>
            </Card>
        )
    }

    pagination = (routeIndex, routeList) => {
        return (routeIndex * 1 + 1) + '/' + (routeList.subwayBusCount * 1 + routeList.busCount * 1 + routeList.subwayCount * 1);
    };

    decreaseRouteIndex = () => {
        const {routeStore} = this.props;
        window.scrollTo(0, 0);
        routeStore.decreaseRouteIndex();
    };

    increaseRouteIndex = () => {
        const {routeStore} = this.props;
        window.scrollTo(0, 0);
        routeStore.increaseRouteIndex();
    };
}

export default RouteInfoTable;
