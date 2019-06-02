import React, {Component} from 'react';
import {Typography} from 'antd';
import {inject, observer} from 'mobx-react';

@inject('rootStore')
@observer
class DetailTableTitleRow extends Component {
    render() {
        const {rootStore} = this.props;
        return (
            <div className="route_result_title">
                {
                    rootStore.path !== '' ?
                        <div>
                            <div className="row">
                                <Typography.Text>
                                    약
                                </Typography.Text>
                                <Typography.Text type="danger">
                                    {rootStore.path.info.totalTime}
                                </Typography.Text>
                                <Typography.Text>
                                    분
                                </Typography.Text>
                            </div>
                            <div className="row">
                                <Typography.Text type="danger">
                                    {rootStore.path.info.payment}
                                </Typography.Text>
                                <Typography.Text>
                                    원
                                </Typography.Text>
                            </div>
                            <div>
                                <Typography.Text type="danger">
                                    {(rootStore.path.info.totalDistance / 1000)}
                                </Typography.Text>
                                <Typography.Text>
                                    km
                                </Typography.Text>
                            </div>
                        </div> : ''
                }
            </div>
        )
    }
}

export default DetailTableTitleRow;
