import React from 'react';
import {Button, Empty} from "antd";

function ErrorPage(props) {
    return (
        <Empty style={{paddingTop: 100}}
               image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
               imageStyle={{height: 60,}}
               description={<span>잘못된 접근입니다</span>
               }>
            <Button type="primary" onClick={() => window.location.href = "/"}>메인으로 가기</Button>
        </Empty>
    )
}

export default ErrorPage;
