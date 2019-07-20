import React, {Component} from 'react';
import {List} from 'antd';
import {inject, observer} from 'mobx-react/index';
import RouteListItem from "./item/RouteListItem";

import './RouteList.scss';

@inject('routeStore')
@observer
class RouteList extends Component {
    render() {
        const {routeStore} = this.props;
        return (
            <List className="route-list"
                  dataSource={routeStore.getPathList}
                  renderItem={(item, idx) => (
                      <RouteListItem loadLane={() => this.loadLane(idx)} key={idx} item={item}/>
                  )}
            />
        )
    }

    loadLane = (idx) => {
        const {history, routeStore} = this.props;
        routeStore.loadLane(idx);
        window.scrollTo(0, 0);
        history.push('/detail');
    };
}

export default RouteList;
