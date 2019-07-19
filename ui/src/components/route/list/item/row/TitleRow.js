import {Typography} from "antd";
import React from "react";

import './TitleRow.scss';

function TitleRow(props) {
    return (
        <div className="title">
            <div>
                <Typography.Text className="minute" strong>
                    {props.item.info.totalTime}분
                </Typography.Text>
            </div>
{/*
            <div>
                <Typography.Text className="price" type="secondary">
                    교통비+유류비 <Typography.Text
                    type="warning">{props.item.info.payment + props.item.subPathList[0].parkingRouteInfo.subPathRoute.route.traoptimal[0].summary.fuelPrice}</Typography.Text>원,
                </Typography.Text>
            </div>
*/}
            {/*
                        <div>
                            <Typography.Text className="price" type="secondary">
                                유류비 <Typography.Text
                                type="warning">{props.item.subPathList[0].parkingRouteInfo.subPathRoute.route.traoptimal[0].summary.fuelPrice}</Typography.Text>원
                            </Typography.Text>
                        </div>
*/}
            {/*<div>
                {
                    props.item.subPathList[0].parkingRouteInfo.parkingInfo.payYn === 'Y' ?
                        props.item.subPathList[0].parkingRouteInfo.parkingInfo.holidayPayYn === 'N' ?
                            <Typography.Text className="price" type="secondary">
                                주차 시간당 <Typography.Text
                                type="warning">{props.item.subPathList[0].parkingRouteInfo.parkingInfo.rates * (60 / props.item.subPathList[0].parkingRouteInfo.parkingInfo.timeRate)}</Typography.Text>원
                            </Typography.Text>
                            :
                            <Typography.Text className="price" type="danger">
                                주차 무료
                            </Typography.Text>
                        : <Typography.Text className="price" type="danger">
                            주차 주말 무료
                        </Typography.Text>
                }
            </div>*/}
        </div>
    )
}

export default TitleRow;