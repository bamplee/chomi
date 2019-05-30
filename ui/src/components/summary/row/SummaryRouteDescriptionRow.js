import React from 'react';
import {List, Typography, Tag, Icon} from 'antd';
import {Conditional} from '../../common/Conditional';

function SummaryRouteDescriptionRow(props) {
    const {item} = props;
    return (
        <List.Item.Meta
            title={
                <div className="description">
                    {
                        item.subPath.map((x, idx) =>
                            <Conditional key={idx} if={x.trafficType !== 3}>
                                <div className="content">
                                    <Conditional if={x.trafficType === 1}>
                                        <Tag color="#f50" className="label">지하철</Tag>
                                        <Typography.Text className="left"
                                                         mark>{x.lane ? x.lane[0].name : ''}</Typography.Text>{x.startName}역<Icon
                                        type="swap-right" className="icon"/>{x.endName}역
                                    </Conditional>
                                    <Conditional if={x.trafficType === 2}>
                                        <Tag color="#2db7f5" className="label">버스</Tag>
                                        <Typography.Text className="right"
                                                         mark>{x.lane ? x.lane[0].busNo : ''}</Typography.Text>{x.startName}<Icon
                                        type="swap-right" className="icon"/>{x.endName}
                                    </Conditional>
                                </div>
                            </Conditional>)
                    }
                </div>
            }
            description={
                <div>
                    <Typography.Text>버스정류장 {item.info.busStationCount}개 +
                        지하철역 {item.info.subwayStationCount}개</Typography.Text>
                </div>
            }
        />
    )
}

export default SummaryRouteDescriptionRow;
