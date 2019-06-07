import React, {Component} from 'react';
import {Card, Icon, Typography} from 'antd';
import {inject, observer} from 'mobx-react/index';

import './RouteDriveBar.scss';

@inject('routeStore')
@observer
class RouteDriveBar extends Component {
    render() {
        const {routeStore} = this.props;
        return (
            <div className="route-drive-bar">
                {
                    routeStore.getTraoptimal ?
                        <Card>
                            <div>
                                <Icon type="car" theme="twoTone"/>
                                <Typography.Text style={{fontSize: '0.7rem'}} type="primary"> 자동차
                                    이용시</Typography.Text>
                            </div>
                            <div>
                                <Typography.Text strong style={{fontSize: '1.1rem', marginRight: 5}}
                                                 type="primary">{this.millisToMinutesAndSeconds(routeStore.getTraoptimal.summary.duration)*1.5}분</Typography.Text>
                                <Typography.Text style={{fontSize: '0.7rem'}}
                                                 type="secondary">유류비 <Typography.Text
                                    type="warning">{Math.round((routeStore.getTraoptimal.summary.fuelPrice + routeStore.getTraoptimal.summary.tollFare)*1.5)}</Typography.Text>원</Typography.Text>
                            </div>
                        </Card> : ''
                }
            </div>
        )
    }

    millisToMinutesAndSeconds = (millis) => {
        return Math.floor(millis / 60000);
    }
}

export default RouteDriveBar;
