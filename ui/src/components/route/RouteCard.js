import React, { Component } from 'react';
import { Card, Icon, Typography } from 'antd';
import { inject, observer } from 'mobx-react';

import RouteCardContent from './RouteCardContent';
import RouteCardHeader from './RouteCardHeader';

@inject('searchStore')
@observer
class RouteResult extends Component {
    render() {
        const {searchStore} = this.props;
        return (
          <React.Fragment>
              {
                  Object.keys(searchStore.routeList).length > 0 ?
                    <div>
                        <Card className="route_result_card"
                              actions={[
                                  <Icon type="left" onClick={searchStore.decreaseRouteIndex}/>,
                                  <Typography.Text>
                                      {this.pagination(searchStore.routeIndex, searchStore.routeList)}
                                  </Typography.Text>,
                                  <Icon type="right" onClick={searchStore.increaseRouteIndex}/>]} bordered={true}>
                            <div className="route_result_scroll">
                                <RouteCardHeader/>
                                <RouteCardContent/>
                            </div>
                        </Card>
                    </div>
                    : ''
              }
          </React.Fragment>
        )
    }

    pagination = (routeIndex, routeList) => {
        return (routeIndex * 1 + 1) + '/' + (routeList.subwayBusCount * 1 + routeList.busCount * 1 + routeList.subwayCount * 1);
    };
}

export default RouteResult;
