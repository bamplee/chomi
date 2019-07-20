import {Icon, Timeline, Typography} from "antd";
import React, {Component} from "react";

import './PathRow.scss';

class PathRow extends Component {

    getSubwayColor = (x) => {
        return x.subPath.lane[0].name === '수도권 1호선' ? '#0052A4'
            : x.subPath.lane[0].name === '수도권 2호선' ? '#009D3E'
                : x.subPath.lane[0].name === '수도권 3호선' ? '#EF7C1C'
                    : x.subPath.lane[0].name === '수도권 4호선' ? '#00A5DE'
                        : x.subPath.lane[0].name === '수도권 5호선' ? '#996CAC'
                            : x.subPath.lane[0].name === '수도권 6호선' ? '#CD7C2F'
                                : x.subPath.lane[0].name === '수도권 7호선' ? '#747F00'
                                    : x.subPath.lane[0].name === '수도권 8호선' ? '#EA545D'
                                        : x.subPath.lane[0].name === '수도권 9호선' ? '#A17E46'
                                        : x.subPath.lane[0].name === '분당선' ? '#F5A200'
                                        : x.subPath.lane[0].name === '경의중앙선' ? '#77C4A3'
                                            : x.subPath.lane[0].name === '신분당선' ? '#D4003B' : '#0052A4';
    };

    render() {
        return (
            <div className="path">
                <Timeline>
                    {
                        this.props.item.subPathList.map((x, idx) => {
                                if (x.subPath !== null) {
                                    return x.subPath.trafficType === 3 ?
                                        x.subPath.distance > 0 &&
                                        ''
                                        /*<Timeline.Item
                                            key={idx}
                                            color="#9A9A9E">
                                            <div style={{
                                                display: 'flex',
                                                justifyContent: 'space-between'
                                            }}>
                                                <div style={{
                                                    flex: 3,
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                }}>
                                                    <div>
                                                        <Typography.Text
                                                            style={{fontSize: '0.8rem'}}>
                                                            도보 {x.subPath.distance}m 이동
                                                        </Typography.Text>
                                                    </div>
                                                </div>
                                            </div>
                                        </Timeline.Item>*/ :
                                        <Timeline.Item
                                            key={idx}
                                            color={x.subPath.trafficType === 1 ? this.getSubwayColor(x) : '#3179CA'}>
                                            <div style={{
                                                display: 'flex',
                                                justifyContent: 'space-between'
                                            }}>
                                                <div style={{flex: 1}}>
                                                    <Typography.Text strong
                                                                     style={{
                                                                         color: x.subPath.trafficType === 1 ? this.getSubwayColor(x) : '#3179CA',
                                                                         fontSize: '0.8rem',
                                                                         marginRight: 5
                                                                     }}>
                                                        {
                                                            x.subPath.trafficType === 1 ?
                                                                x.subPath.lane[0].name :
                                                                x.subPath.lane[0].busNo
                                                        }
                                                    </Typography.Text>
                                                </div>
                                                <div style={{
                                                    flex: 3,
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                }}>
                                                    <div>
                                                        <Typography.Text>
                                                            {x.subPath.startName + (x.subPath.trafficType === 1 ? '역' : '')}
                                                        </Typography.Text>
                                                        <br/>
                                                        <Typography.Text>
                                                            {x.subPath.endName + (x.subPath.trafficType === 1 ? '역' : '')}
                                                        </Typography.Text>
                                                    </div>
                                                </div>
                                            </div>
                                        </Timeline.Item>
                                }
                                if (x.parkingRouteInfo !== null) {
                                    return <Timeline.Item key={idx} color="#d46b08">
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between'
                                        }}>
                                            <div style={{flex: 1}}>
                                                <Typography.Text strong
                                                                 style={{
                                                                     color: '#d46b08',
                                                                     fontSize: '0.8rem',
                                                                     marginRight: 5
                                                                 }}>
                                                    자동차
                                                </Typography.Text>
                                            </div>
                                            <div style={{
                                                flex: 3,
                                                display: 'flex',
                                                flexDirection: 'column',
                                            }}>
                                                <div>
                                                    <Typography.Text strong>주차장</Typography.Text>
                                                    <br/>
                                                    <Typography.Text>
                                                        {x.parkingRouteInfo.parkingInfo.parkingName}
                                                    </Typography.Text>
                                                </div>
                                                <div>
                                                    <Typography.Text type="secondary">
                                                        <Typography.Text style={{color: '#EC3843'}}>주차
                                                            가능 {x.parkingRouteInfo.parkingInfo.capacity - x.parkingRouteInfo.parkingInfo.curParking}면 </Typography.Text>
                                                        (전체 {x.parkingRouteInfo.parkingInfo.capacity}면)
                                                    </Typography.Text>
                                                </div>
                                                <div>
                                                    <Typography.Text type="secondary">
                                                        {
                                                            x.parkingRouteInfo ?
                                                                x.parkingRouteInfo.parkingInfo.payYn === 'Y' ?
                                                                    x.parkingRouteInfo.parkingInfo.payYn === 'N' ?
                                                                        <Typography.Text className="price" type="secondary">
                                                                            시간당 <Typography.Text
                                                                            style={{color: '#0B53B0'}}>{x.subPathList.filter(y => y.parkingRouteInfo !== null)[0].parkingRouteInfo.parkingInfo.rates * (60 / this.props.item.subPathList.filter(y => y.parkingRouteInfo !== null)[0].parkingRouteInfo.parkingInfo.timeRate)}</Typography.Text>원
                                                                        </Typography.Text>
                                                                        :
                                                                        <Typography.Text className="price"
                                                                                         style={{color: '#0B53B0'}}>
                                                                            무료
                                                                        </Typography.Text>
                                                                    :
                                                                    <Typography.Text className="price"
                                                                                     style={{color: '#0B53B0'}}>
                                                                        주말 무료
                                                                    </Typography.Text> : ''
                                                        }
                                                    </Typography.Text>
                                                </div>
                                            </div>
                                        </div>
                                    </Timeline.Item>
                                }
                                if (x.bikeParkingRouteInfo !== null) {
                                    return <React.Fragment key={idx}>
                                        <Timeline.Item color="#415363">
                                            <div style={{
                                                display: 'flex',
                                                justifyContent: 'space-between'
                                            }}>
                                                <div style={{flex: 1}}>
                                                    <Typography.Text strong
                                                                     style={{
                                                                         color: '#415363',
                                                                         fontSize: '0.8rem',
                                                                         marginRight: 5
                                                                     }}>
                                                        자전거
                                                    </Typography.Text>
                                                </div>
                                                <div style={{
                                                    flex: 3,
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                }}>
                                                    <div>
                                                        <Typography.Text>
                                                            <Typography.Text strong>따릉이 대여</Typography.Text>
                                                            <br/>
                                                            {x.bikeParkingRouteInfo.startBikeParkingInfo.stationName}
                                                        </Typography.Text>
                                                    </div>
                                                    <div>
                                                        <Typography.Text
                                                            style={{color: '#EC3843'}}
                                                            type="danger">{x.bikeParkingRouteInfo.startBikeParkingInfo.parkingBikeTotCnt}대
                                                            사용가능</Typography.Text>
                                                    </div>
                                                </div>
                                            </div>
                                        </Timeline.Item>
                                        <Timeline.Item color="#415363">
                                            <div style={{
                                                display: 'flex',
                                                justifyContent: 'space-between'
                                            }}>
                                                <div style={{flex: 1}}>
                                                    <Typography.Text strong
                                                                     style={{
                                                                         color: '#415363',
                                                                         fontSize: '0.8rem',
                                                                         marginRight: 5
                                                                     }}>
                                                        자전거
                                                    </Typography.Text>
                                                </div>
                                                <div style={{
                                                    flex: 3,
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                }}>
                                                    <div>
                                                        <Typography.Text>
                                                            <Typography.Text strong>따릉이 반납</Typography.Text>
                                                            <br/>
                                                            {x.bikeParkingRouteInfo.endBikeParkingInfo.stationName}
                                                        </Typography.Text>
                                                    </div>
                                                    {/*
                                                <div>
                                                    <Typography.Text
                                                        style={{color: '#EC3843'}}
                                                        type="danger">{x.bikeParkingRouteInfo.endBikeParkingInfo.parkingBikeTotCnt}대 사용가능</Typography.Text>
                                                </div>
*/}
                                                </div>
                                                {/*<div style={{
                                                flex: 3,
                                                display: 'flex',
                                                flexDirection: 'column',
                                            }}>
                                                <div>
                                                    <Typography.Text style={{fontSize: '0.8rem'}}>
                                                        <Typography.Text type="secondary">도착 대여소</Typography.Text> - {x.bikeParkingRouteInfo.endBikeParkingInfo.stationName}
                                                    </Typography.Text>
                                                </div>
                                                <div>
                                                    <Typography.Text style={{fontSize: '0.8rem'}}
                                                                     type="secondary"
                                                                     code>
                                                        주차대수<Typography.Text
                                                        style={{fontSize: '0.7rem'}}
                                                        type="danger"> {x.bikeParkingRouteInfo.endBikeParkingInfo.parkingBikeTotCnt}</Typography.Text>대
                                                        / 총<Typography.Text
                                                        style={{
                                                            fontSize: '0.7rem',
                                                            color: '#002766'
                                                        }}> {x.bikeParkingRouteInfo.endBikeParkingInfo.rackTotCnt}</Typography.Text>대
                                                    </Typography.Text>
                                                </div>
                                            </div>*/}
                                            </div>
                                        </Timeline.Item>
                                    </React.Fragment>
                                }
                            }
                        )
                    }
                </Timeline>
            </div>
        )
    }
}

export default PathRow;