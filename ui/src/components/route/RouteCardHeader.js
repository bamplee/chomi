import React, {Component} from 'react';
import {Typography} from 'antd';
import {inject, observer} from 'mobx-react';

@inject('routeStore')
@observer
class RouteCardHeader extends Component {
    render() {
        const {routeStore} = this.props;
        return (
            <div className="route_result_title">
                <div className="row">
                    <Typography.Text type="danger">
                        {(routeStore.info.totalDistance / 1000)}
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
                        {routeStore.info.totalTime}
                    </Typography.Text>
                    <Typography.Text>
                        분
                    </Typography.Text>
                </div>
                <div>
                    <Typography.Text type="danger">
                        {routeStore.info.payment}
                    </Typography.Text>
                    <Typography.Text>
                        원
                    </Typography.Text>
                </div>
            </div>
        )
    }
}

export default RouteCardHeader;
