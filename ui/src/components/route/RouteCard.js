import React, { Component } from 'react';
import { Card, Icon, Typography } from 'antd';
import { inject, observer } from 'mobx-react';

import RouteCardContent from './RouteCardContent';
import RouteCardHeader from './RouteCardHeader';

@inject('routeStore')
@observer
class RouteResult extends Component {
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
              <div className="route_result_scroll">
                  <RouteCardHeader/>
                  <RouteCardContent/>
              </div>
          </Card>
        )
    }

    pagination = (routeIndex, routeList) => {
        return (routeIndex * 1 + 1) + '/' + (routeList.subwayBusCount * 1 + routeList.busCount * 1 + routeList.subwayCount * 1);
    };
}

export default RouteResult;
