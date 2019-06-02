import React, {Component} from 'react';
import {Button, Input} from 'antd';
import {inject, observer} from 'mobx-react';

@inject('rootStore')
@observer
class MainSearchBar extends Component {
    render() {
        const {rootStore} = this.props;
        return (
            <div className="main-input">
                <div className="row">
                    <Input.Search
                        size="large"
                        placeholder="목적지 검색"
                        value={rootStore.destination.name}
                        onClick={() => this.props.history.push({pathname: '/destination/search'})}
                    />
                </div>
            </div>
        )
    }
}

export default MainSearchBar;
