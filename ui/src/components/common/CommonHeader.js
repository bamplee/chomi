import React from 'react';

import {PageHeader, Typography} from "antd";

function CommonHeader(props) {
    return (
        <PageHeader style={{backgroundColor: '#0050b3', padding: '12px 15px 12px 15px'}} title={<Typography.Text style={{color: 'white'}}>초미</Typography.Text>} subTitle={<Typography.Text style={{color: 'white'}}> - 통합 이동 서비스</Typography.Text>}/>
    );
}

export default CommonHeader;
