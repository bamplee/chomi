import React, { Component } from 'react';
import { Input, Button, Card, Icon, Timeline, Typography } from 'antd';
import { inject, observer } from 'mobx-react';
import MapView from './common/MapView';

@inject('uiStore', 'searchStore')
@observer
class ChomiRoute extends Component {
    render() {
        const {searchStore} = this.props;
        return (
          <React.Fragment>
              <div className="search_input">
                  <Input.Search
                    size="large"
                    addonBefore="출발"
                    placeholder="출발지 검색"
                    value={searchStore.departure.name}
                    onClick={this.handleDepartureInput}
                  />
                  <Button icon="more"
                          shape=""
                          size="large"
                          type="default"
                          className="icon_rotate_90 right_button"
                          onClick={() => {
                          }}/>
              </div>
              <div className="search_input">
                  <Input.Search
                    size="large"
                    addonBefore="도착"
                    placeholder="목적지 검색"
                    value={searchStore.destination.name}
                    onClick={this.handleDestinationInput}
                  />
                  <Button icon="swap"
                          shape=""
                          size="large"
                          type="default"
                          className="icon_rotate_90 right_button"
                          onClick={searchStore.swap}/>
              </div>
              <div style={{paddingLeft: 5, paddingRight: 5}}>
                  <MapView
                    center={this.getDistanceFromLatLonInKm(searchStore.departure.y, searchStore.departure.x, searchStore.destination.y, searchStore.destination.x)}
                    startX={searchStore.departure.x}
                    startY={searchStore.departure.y}
                    endX={searchStore.destination.x}
                    endY={searchStore.destination.y}/>
              </div>
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

    componentWillMount = () => {
        const {searchStore} = this.props;
        if (searchStore.departure.name && searchStore.destination.name) {
            searchStore.route();
        }
    };

    handleDepartureInput = () => {
        const {searchStore, uiStore} = this.props;
        uiStore.handleDepartureInput();
        searchStore.search(searchStore.departure.name);
        this.redirect();
    };

    handleDestinationInput = () => {
        const {searchStore, uiStore} = this.props;
        uiStore.handleDestinationInput();
        searchStore.search(searchStore.destination.name);
        this.redirect();
    };

    getDistanceFromLatLonInKm = (lat1, lng1, lat2, lng2) => {
        return {lat: ((lat1 * 1 + lat2 * 1) / 2), lng: ((lng1 * 1 + lng2 * 1) / 2)}
    };

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

    redirect = () => {
        this.props.history.push({pathname: '/search'})
    };
}

export default ChomiRoute;
