import {Icon, Timeline, Typography} from "antd";
import React from "react";

import './PathRow.scss';

function PathRow(props) {
    return (
        <div className="path">
            <Timeline>
                {
                    props.item.subPathList.map((x, idx) => {
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
                                        color={x.subPath.trafficType === 1 ? '#096dd9' : '#FCB82B'}>
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between'
                                        }}>
                                            <div style={{flex: 1}}>
                                                <Typography.Text strong
                                                                 style={{
                                                                     color: x.subPath.trafficType === 1 ? '#096dd9' : '#FCB82B',
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
                                                    <Typography.Text
                                                        style={{fontSize: '0.8rem'}}>
                                                        {x.subPath.startName} - {x.subPath.endName}
                                                    </Typography.Text>
                                                </div>
                                            </div>
                                        </div>
                                    </Timeline.Item>
                            }
                            if (x.parkingRouteInfo !== null) {
                                return <Timeline.Item key={idx} color="#d4380d">
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between'
                                    }}>
                                        <div style={{flex: 1}}>
                                            <Typography.Text strong
                                                             style={{
                                                                 color: '#d4380d',
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
                                                <Typography.Text style={{fontSize: '0.8rem'}} >
                                                    <Typography.Text type="secondary">도착 주차장</Typography.Text> - {x.parkingRouteInfo.parkingInfo.parkingName}
                                                </Typography.Text>
                                            </div>
                                            <div>
                                                <Typography.Text style={{fontSize: '0.8rem'}}
                                                                 type="secondary"
                                                                 code>
                                                    잔여<Typography.Text
                                                    style={{fontSize: '0.7rem'}}
                                                    type="danger"> {x.parkingRouteInfo.parkingInfo.capacity - x.parkingRouteInfo.parkingInfo.curParking}</Typography.Text>면
                                                    / 총<Typography.Text
                                                    style={{
                                                        fontSize: '0.7rem',
                                                        color: '#002766'
                                                    }}> {x.parkingRouteInfo.parkingInfo.capacity}</Typography.Text>면
                                                </Typography.Text>
                                            </div>
                                        </div>
                                    </div>
                                </Timeline.Item>
                            }
                            if (x.bikeParkingRouteInfo !== null) {
                                return <React.Fragment key={idx} >
                                    <Timeline.Item color="#19AA56">
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between'
                                        }}>
                                            <div style={{flex: 1}}>
                                                <Typography.Text strong
                                                                 style={{
                                                                     color: '#19AA56',
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
                                                    <Typography.Text style={{fontSize: '0.8rem'}}>
                                                        <Typography.Text type="secondary">출발 대여소</Typography.Text> - {x.bikeParkingRouteInfo.startBikeParkingInfo.stationName}
                                                    </Typography.Text>
                                                </div>
                                                <div>
                                                    <Typography.Text style={{fontSize: '0.8rem'}}
                                                                     type="secondary"
                                                                     code>
                                                        주차대수<Typography.Text
                                                        style={{fontSize: '0.7rem'}}
                                                        type="danger"> {x.bikeParkingRouteInfo.startBikeParkingInfo.parkingBikeTotCnt}</Typography.Text>대
                                                        / 총<Typography.Text
                                                        style={{
                                                            fontSize: '0.7rem',
                                                            color: '#002766'
                                                        }}> {x.bikeParkingRouteInfo.startBikeParkingInfo.rackTotCnt}</Typography.Text>대
                                                    </Typography.Text>
                                                </div>
                                            </div>
                                        </div>
                                    </Timeline.Item>
                                    <Timeline.Item color="#19AA56">
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between'
                                        }}>
                                            <div style={{flex: 1}}>
                                                <Typography.Text strong
                                                                 style={{
                                                                     color: '#19AA56',
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
                                            </div>
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

export default PathRow;