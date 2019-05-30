import React from 'react';
import {Typography, Tag} from 'antd';

function SummaryRouteTitleRow(props) {
    const {idx, item} = props;
    return (
        <div className="header">
            <span><Tag>경로 {idx + 1}</Tag></span>
            <span className="content">
              약 <Typography.Text type="danger">{item.info.totalTime}</Typography.Text>분
          </span>
            <span className="content">
              <Typography.Text type="danger">{item.info.payment}</Typography.Text>원
          </span>
            <Typography.Text>총거리&nbsp;
                <Typography.Text type="danger">{item.info.totalDistance}</Typography.Text>m
            </Typography.Text>
        </div>
    )
}

export default SummaryRouteTitleRow;
