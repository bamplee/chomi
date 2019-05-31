import React, {Component} from 'react';
import {Typography, List, Icon} from 'antd';
import {inject, observer} from 'mobx-react';
import SummaryRouteDescriptionRow from '../row/SummaryRouteDescriptionRow';

@inject('routeStore')
@observer
class SummaryRouteTable extends Component {
    render() {
        const {routeStore} = this.props;
        return (
            <List className="summary_route_table"
                  header={<Typography.Text>추천 경유 대중교통 경로</Typography.Text>}
                  bordered
                  dataSource={routeStore.path}
                  renderItem={(item, idx) => (
                      <List.Item actions={[<Icon type="right" />]} key={idx} onClick={() => this.handleRouteDetail(idx)}>
                          <SummaryRouteDescriptionRow idx={idx} item={item}/>
                      </List.Item>
                  )}>
            </List>
        )
    }

    handleRouteDetail = (idx) => {
        const {routeStore} = this.props;
        routeStore.handleRouteIndex(idx);
        window.scrollTo(0, 0);
        this.props.history.push({pathname: '/route'});
    };
}

export default SummaryRouteTable;
