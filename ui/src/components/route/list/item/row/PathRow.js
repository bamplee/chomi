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
                                                <Typography.Text strong>주차장</Typography.Text>
                                                <br/>
                                                <Typography.Text>
                                                    {x.parkingRouteInfo.parkingInfo.parkingName}
                                                </Typography.Text>
                                            </div>
                                            <div>
                                                <Typography.Text type="secondary">
                                                    <Typography.Text style={{color: '#EC3843'}}>주차 가능 {x.parkingRouteInfo.parkingInfo.capacity - x.parkingRouteInfo.parkingInfo.curParking}면 </Typography.Text>
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
                                                                        시간당 <Typography.Text style={{color: '#0B53B0'}}>{x.subPathList.filter(y => y.parkingRouteInfo !== null)[0].parkingRouteInfo.parkingInfo.rates * (60 / props.item.subPathList.filter(y => y.parkingRouteInfo !== null)[0].parkingRouteInfo.parkingInfo.timeRate)}</Typography.Text>원
                                                                    </Typography.Text>
                                                                    :
                                                                    <Typography.Text className="price" style={{color: '#0B53B0'}}>
                                                                        무료
                                                                    </Typography.Text>
                                                                :
                                                                <Typography.Text className="price" style={{color: '#0B53B0'}}>
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
                                                    <Typography.Text>
                                                        <Typography.Text strong>따릉이 대여</Typography.Text>
                                                        <br/>
                                                        {x.bikeParkingRouteInfo.startBikeParkingInfo.stationName}
                                                    </Typography.Text>
                                                </div>
                                                <div>
                                                    <Typography.Text
                                                        style={{color: '#EC3843'}}
                                                        type="danger">{x.bikeParkingRouteInfo.startBikeParkingInfo.parkingBikeTotCnt}대 사용가능</Typography.Text>
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

export default PathRow;