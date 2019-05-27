import React, { Component } from 'react';
import { Timeline } from 'antd';
import { inject, observer } from 'mobx-react';

@inject('searchStore')
@observer
class RouteCardContent extends Component {
    render() {
        const {searchStore} = this.props;
        return (
          <Timeline>
              {
                  searchStore.routeList.path[searchStore.routeIndex].subPath.map((x, idx) => {
                      return (
                        <Timeline.Item key={idx} color={this.getTrafficTypeColor(x.trafficType)}>
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

export default RouteCardContent;
