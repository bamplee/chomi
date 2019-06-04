import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Row, Col, Typography} from 'antd';

import './TimeBar.scss';

@inject('rootStore')
@observer
class TimeBar extends Component {
    render() {
        const {rootStore} = this.props;
        return (
            <Row>
                <Col span={6} className="walk">
                    6분
                </Col>
                <Col span={6} className="bus">
                    12분
                </Col>
                <Col span={6} className="parking">
                    주차
                </Col>
                <Col span={6} className="subway">
                    12분
                </Col>
            </Row>
        )
    }
}

export default TimeBar;
