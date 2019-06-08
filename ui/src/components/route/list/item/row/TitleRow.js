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
            <div>
                <Typography.Text className="price" type="secondary">
                    교통비+유류비 <Typography.Text
                    type="warning">{props.item.info.payment + props.item.subPathList[0].parkingRouteInfoList[0].subPathRoute.route.traoptimal[0].summary.fuelPrice}</Typography.Text>원
                </Typography.Text>
            </div>
            {/*
                        <div>
                            <Typography.Text className="price" type="secondary">
                                유류비 <Typography.Text
                                type="warning">{props.item.subPathList[0].parkingRouteInfoList[0].subPathRoute.route.traoptimal[0].summary.fuelPrice}</Typography.Text>원
                            </Typography.Text>
                        </div>
*/}
            <div>
                {
                    props.item.subPathList[0].parkingRouteInfoList[0].parkingInfo.payYn === 'Y' ?
                        props.item.subPathList[0].parkingRouteInfoList[0].parkingInfo.holidayPayYn === 'N' ?
                            <Typography.Text className="price" type="secondary">
                                주차 <Typography.Text
                                type="warning">{props.item.subPathList[0].parkingRouteInfoList[0].parkingInfo.rates * (60 / props.item.subPathList[0].parkingRouteInfoList[0].parkingInfo.timeRate)}</Typography.Text>원/시간
                            </Typography.Text>
                            :
                            <Typography.Text className="price" type="danger">
                                주차 무료
                            </Typography.Text>
                        : <Typography.Text className="price" type="danger">
                            주차 주말 무료
                        </Typography.Text>
                }
            </div>
        </div>
    )
}

export default TitleRow;