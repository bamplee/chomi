import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Button, Icon, Input} from 'antd';
import {inject, observer} from 'mobx-react';

import './FromToPlaceInput.scss';

@inject('searchStore')
@observer
class FromToPlaceInput extends Component {
    render() {
        const {searchStore} = this.props;
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
                           suffix={<Icon type="swap" onClick={searchStore.swap}/>}
                           size="large"
                           addonBefore="출발"
                           placeholder="출발지 검색"
                           value={searchStore.departure.name}
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
                           value={searchStore.destination.name}/>
                </div>
            </div>
        )
    }
}

export default FromToPlaceInput;
