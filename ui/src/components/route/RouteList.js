import React, {Component} from 'react';
import {List} from 'antd';
import {inject, observer} from 'mobx-react/index';
import RouteListItem from "./RouteListItem";

@inject('routeStore')
@observer
class RouteList extends Component {
    render() {
        const {routeStore} = this.props;
        return (
            <List dataSource={routeStore.pathList}
                  renderItem={(item, idx) => (
                      <RouteListItem key={idx} item={item}/>
                  )}
            />
        )
    }
}

export default RouteList;
