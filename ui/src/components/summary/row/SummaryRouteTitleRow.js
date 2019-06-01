import React from 'react';
import {Typography, Tag} from 'antd';

function SummaryRouteTitleRow(props) {
    const {idx, item} = props;
    return (
        <div className="summary_route_title_row">
            <span><Tag>경로 {idx + 1}</Tag></span>
            <div>
            <span className="content">
              약<Typography.Text type="danger">{item.info.totalTime}</Typography.Text>분
            </span>
            </div>
            <div>
            <span className="content">
              <Typography.Text type="danger">{item.info.payment}</Typography.Text>원
            </span>
            </div>
            <div>
                <Typography.Text>
                    <Typography.Text type="danger">{item.info.totalDistance / 1000}</Typography.Text>km
                </Typography.Text>
            </div>
        </div>
    )
}

export default SummaryRouteTitleRow;
