import React, {Component} from 'react';
import {Icon, Input} from 'antd';
import {inject, observer} from 'mobx-react';

import './FromToPlaceInput.scss';

@inject('searchStore')
@observer
class FromToPlaceInput extends Component {
    componentDidMount () {
        // fixme
        this.props.searchStore.course();
    }

    render() {
        const {searchStore} = this.props;
        const {history} = this.props;
        return (
            <div className="search-result-bar">
                <div className="row">
                    {/*
                    <Link to="/">
                        <Button className="btn"
                                icon="home"
                                size="large"
                                type="default"/>
                    </Link>
*/}
                    <Input onClick={() => history.push('/search/departure')}
                           size="large"
                        /*
                                                   addonBefore="출발"
                        */
                           placeholder="출발지 검색"
                           suffix={
                               <Icon type="swap" onClick={searchStore.swap}/>
                           }
                           value={searchStore.departure.name}
                    />
                </div>
                <div className="row">
                    {/*
                    <Button onClick={searchStore.swap}
                            className="btn"
                            style={{display: 'block'}}
                            icon="swap"
                            size="large"
                            type="default"/>
*/}
                    <Input onClick={() => history.push('/search/destination')}
                           size="large"
                        /*
                                                   addonBefore="도착"
                        */
                           placeholder="목적지 검색"
                           suffix={
                               <Icon type="search" onClick={searchStore.course}/>
                           }
                           value={searchStore.destination.name}/>
                </div>
            </div>
        )
    }
}

export default FromToPlaceInput;
