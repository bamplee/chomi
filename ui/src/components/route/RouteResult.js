import React, { Component } from 'react';
import { Card, Icon, Timeline, Typography } from 'antd';
import { inject, observer } from 'mobx-react';

@inject('uiStore', 'searchStore')
@observer
class RouteResult extends Component {
    componentWillMount = () => {
        const {searchStore} = this.props;
        if (searchStore.departure.name && searchStore.destination.name) {
            searchStore.route();
        }
    };

    render() {
        const {searchStore} = this.props;
        return (
          <React.Fragment>
              {
                  Object.keys(searchStore.routeList).length > 0 ?
                    <Card
                      actions={[<Icon type="left" onClick={searchStore.decreaseRouteIndex}/>,
                          <Typography.Text>{searchStore.routeIndex + 1}
                              / {searchStore.routeList.subwayBusCount + searchStore.routeList.busCount + searchStore.routeList.subwayCount}</Typography.Text>,
                          <Icon type="right" onClick={searchStore.increaseRouteIndex}/>]}
                      bordered={true} style={{margin: 5}}>
                        <div style={{overflow: 'scroll', height: 220}}>
                            <div style={{marginBottom: 20}}>
                                <Typography.Text
                                  type="danger">{(searchStore.routeList.path[searchStore.routeIndex].info.totalDistance / 1000)}</Typography.Text>
                                <Typography.Text>km,&nbsp;&nbsp;&nbsp;</Typography.Text>
                                <Typography.Text>약 </Typography.Text>
                                <Typography.Text
                                  type="danger">{searchStore.routeList.path[searchStore.routeIndex].info.totalTime}</Typography.Text>
                                <Typography.Text>분,&nbsp;&nbsp;&nbsp;</Typography.Text>
                                <Typography.Text
                                  type="warning">{searchStore.routeList.path[searchStore.routeIndex].info.payment}</Typography.Text>
                                <Typography.Text>원</Typography.Text>
                            </div>
                            <Timeline>
                                {
                                    searchStore.routeList.path[searchStore.routeIndex].subPath.map(x => {
                                        return (
                                          <Timeline.Item color={this.getTrafficTypeColor(x.trafficType)}>
                                              {this.getTrafficTypeName(x.trafficType)}/{x.distance / 1000}km/{x.sectionTime}분
                                              <br/>
                                              {
                                                  x.trafficType === 2 ?
                                                    x.lane[0].busNo + '번버스,' + x.startName + x.endName : ''
                                              }
                                              {
                                                  x.trafficType === 1 ?
                                                    x.lane[0].name + ', ' + x.startName + '-' + x.endName : ''
                                              }
                                          </Timeline.Item>
                                        )
                                    })
                                }
                            </Timeline>
                        </div>
                    </Card>
                    : ''
              }
          </React.Fragment>
        )
    }

    getTrafficTypeColor = (trafficType) => {
        if (trafficType === 1) {
            return 'orange';
        }
        else if (trafficType === 2) {
            return 'blue';
        }
        else if (trafficType === 3) {
            return 'green';
        }
    };

    getTrafficTypeName = (trafficType) => {
        if (trafficType === 1) {
            return '지하철';
        }
        else if (trafficType === 2) {
            return '버스';
        }
        else if (trafficType === 3) {
            return '도보';
        }
    };
}

export default RouteResult;
