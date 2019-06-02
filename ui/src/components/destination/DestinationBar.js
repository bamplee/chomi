import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {Button, Input} from 'antd';

@inject('rootStore')
@observer
class DestinationBar extends Component {
    render() {
        const {rootStore} = this.props;
        return (
            <div className="destination-input">
                <div className="row">
                    <Button icon="arrow-left"
                            size="large"
                            type="default"
                            onClick={() => this.props.history.goBack()}/>
                    <Input.Search
                        ref={(input) => input && input.focus()}
                        size="large"
                        placeholder="출발지 검색"
                        defaultValue={rootStore.destination.name}
                        onSearch={(query) => rootStore.destinationSearch(query)}
                    />
                </div>
            </div>
        )
    }
}

export default DestinationBar;
