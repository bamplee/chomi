import React, {Component} from 'react';
import {Card, Icon, Typography} from 'antd';
import {inject, observer} from 'mobx-react/index';

import './RouteListCarItem.scss';

@inject('routeStore')
@observer
class RouteListCarItem extends Component {
    render() {
        const {routeStore} = this.props;
        return (
            <div className="route-drive-bar">
                {
                    routeStore.getTraoptimal ?
                        <Card style={{marginTop: 4}}>
                            <div>
                                <Icon type="car" theme="twoTone"/>
                                <Typography.Text style={{fontSize: '0.7rem', paddingLeft: 4, paddingRight: 4}}
                                                 type="primary">자동차
                                    이용시</Typography.Text>
                            </div>
                            <div>
                                <Typography.Text strong style={{fontSize: '1.1rem', marginRight: 5}}
                                                 type="primary">{Math.floor(this.millisToMinutesAndSeconds(routeStore.getTraoptimal.summary.duration) * 1.45)}분</Typography.Text>
                                <div className="dot"/>
                                <Typography.Text className="price"><Typography.Text>{Math.round((routeStore.getTraoptimal.summary.fuelPrice + routeStore.getTraoptimal.summary.tollFare * 1.4))}</Typography.Text>원</Typography.Text>
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

export default RouteListCarItem;
