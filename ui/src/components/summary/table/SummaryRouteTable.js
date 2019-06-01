import React, {Component} from 'react';
import {Typography, List, Icon, Tabs, Card} from 'antd';
import {inject, observer} from 'mobx-react';
import SummaryRouteDescriptionRow from '../row/SummaryRouteDescriptionRow';

@inject('routeStore')
@observer
class SummaryRouteTable extends Component {
    render() {
        const {routeStore} = this.props;
        return (
            <Card className="summary_parking_bar" size="small"
                  title="추천 대중교통 경유 경로">
                <Tabs type="card">
                    <Tabs.TabPane tab="버스+지하철" key="1">
                        <List dataSource={routeStore.path}
                              renderItem={(item, idx) => (
                                  <List.Item actions={[<Icon type="right"/>]} key={idx}
                                             onClick={() => this.handleRouteDetail(idx)}>
                                      <SummaryRouteDescriptionRow idx={idx} item={item}/>
                                  </List.Item>
                              )}>
                        </List>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="버스" key="2">
                        <List dataSource={routeStore.busPath}
                              renderItem={(item, idx) => (
                                  <List.Item actions={[<Icon type="right"/>]} key={idx}
                                             onClick={() => this.handleRouteDetail(idx)}>
                                      <SummaryRouteDescriptionRow idx={idx} item={item}/>
                                  </List.Item>
                              )}>
                        </List>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="지하철" key="3">
                        <List dataSource={routeStore.subwayPath}
                              renderItem={(item, idx) => (
                                  <List.Item actions={[<Icon type="right"/>]} key={idx}
                                             onClick={() => this.handleRouteDetail(idx)}>
                                      <SummaryRouteDescriptionRow idx={idx} item={item}/>
                                  </List.Item>
                              )}>
                        </List>
                    </Tabs.TabPane>
                </Tabs>
            </Card>
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
