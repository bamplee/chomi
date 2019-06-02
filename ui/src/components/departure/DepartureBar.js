import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {Button, Input} from 'antd';

@inject('rootStore')
@observer
class DepartureBar extends Component {
    render() {
        const {rootStore} = this.props;
        return (
            <div className="departure-input">
                <div className="row">
                    <Button icon="arrow-left"
                            size="large"
                            type="default"
                            onClick={() => this.props.history.goBack()}/>
                    <Input.Search
                        allowClear
                        ref={(input) => input && input.focus()}
                        size="large"
                        placeholder="출발지 검색"
                        defaultValue={rootStore.departure.name}
                        onSearch={value => rootStore.departureSearch(value)}
                    />
                </div>
            </div>
        )
    }
}

export default DepartureBar;
