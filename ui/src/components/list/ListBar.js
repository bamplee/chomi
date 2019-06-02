import React, {Component} from 'react';
import {Button, Input} from 'antd';
import {inject, observer} from 'mobx-react';

@inject('rootStore')
@observer
class ListBar extends Component {
    render() {
        const {rootStore} = this.props;
        return (
            <div className="list-input">
                <div className="row">
                    <Button icon="arrow-left"
                            size="large"
                            type="default"
                            onClick={() => this.props.history.push('/')}/>
                    <Input.Search
                        size="large"
                        addonBefore="출발"
                        placeholder="출발지 검색"
                        value={rootStore.departure.name}
                        onClick={() => this.props.history.push({pathname: '/departure/search'})}
                    />
                </div>
                <div className="row">
                    <Button className="icon_rotate_90"
                            style={{display: 'block'}}
                            icon="swap"
                            size="large"
                            type="default"
                            onClick={rootStore.swap}/>
                    <Input.Search
                        size="large"
                        addonBefore="도착"
                        placeholder="목적지 검색"
                        value={rootStore.destination.name}
                        onClick={() => this.props.history.push({pathname: '/destination/search'})}
                    />
                </div>
            </div>
        )
    }
}

export default ListBar;
