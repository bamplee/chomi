import React, { Component } from 'react';
import { Typography } from 'antd';
import { inject, observer } from 'mobx-react';

@inject('routeStore')
@observer
class RouteCardHeader extends Component {
    render() {
        const {routeStore} = this.props;
        return (
          <React.Fragment>
              {
                  routeStore.path ?
                    <div className="route_result_title">
                        <div className="row">
                            <Typography.Text type="danger">
                                {(routeStore.path.info.totalDistance / 1000)}
                            </Typography.Text>
                            <Typography.Text>
                                km
                            </Typography.Text>
                        </div>
                        <div className="row">
                            <Typography.Text>
                                약
                            </Typography.Text>
                            <Typography.Text type="danger">
                                {routeStore.path.info.totalTime}
                            </Typography.Text>
                            <Typography.Text>
                                분
                            </Typography.Text>
                        </div>
                        <div>
                            <Typography.Text type="danger">
                                {routeStore.path.info.payment}
                            </Typography.Text>
                            <Typography.Text>
                                원
                            </Typography.Text>
                        </div>
                    </div> : ''
              }
          </React.Fragment>
        )
    }
}

export default RouteCardHeader;
