import React, {Component} from 'react';
import {Button, Icon, Input} from 'antd';
import {inject, observer} from 'mobx-react';

import './SearchResultBar.scss';
import {Link} from "react-router-dom";

@inject('rootStore')
@observer
class SearchResultBar extends Component {
    render() {
        const {rootStore} = this.props;
        const {history} = this.props;
        return (
            <div className="search-result-bar">
                <div className="row">
                    <Link to="/">
                        <Button className="btn"
                                icon="arrow-left"
                                size="large"
                                type="default"/>
                    </Link>
                    <Input onClick={() => history.push('/departure/search')}
                           suffix={<Icon type="swap" onClick={rootStore.swap}/>}
                           size="large"
                           addonBefore="출발"
                           placeholder="출발지 검색"
                           value={rootStore.departure.name}
                    />
                </div>
                <div className="row">
                    <Button className="btn"
                            style={{display: 'block'}}
                            icon="ellipsis"
                            size="large"
                            type="default"/>
                    <Input onClick={() => history.push('/destination/search')}
                           size="large"
                           addonBefore="도착"
                           placeholder="목적지 검색"
                           value={rootStore.destination.name}/>
                </div>
            </div>
        )
    }
}

export default SearchResultBar;
