import React, {Component} from 'react';
import {Button, Icon, Input, Typography} from 'antd';
import {inject, observer} from 'mobx-react';

@inject('rootStore')
@observer
class DetailBar extends Component {
    render() {
        const {rootStore} = this.props;
        return (
            <div className="detail-input">
                <div className="row">
                    <Button icon="arrow-left"
                            size="large"
                            type="default"
                            onClick={() => this.props.history.goBack()}/>
                    <div className="path">
                        <Typography.Text>{rootStore.departure.name}</Typography.Text>
                        <Icon type="small-dash" className="icon"/>
                        <Typography.Text>{rootStore.destination.name}</Typography.Text>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailBar;
