import React, {Component} from 'react';
import {Button, Input} from 'antd';

import './SearchPlaceBar.scss'

class SearchPlaceBar extends Component {
    render() {
        const {name} = this.props;
        const {search} = this.props;
        const {history} = this.props;
        return (
            <div className="search-place-bar">
                <div className="row">
                    <Button className="btn"
                            icon="arrow-left"
                            size="large"
                            type="default"
                            onClick={() => history.goBack()}/>
                    <Input.Search
                        allowClear
                        ref={(input) => input && input.focus()}
                        size="large"
                        placeholder="출발지 검색"
                        defaultValue={name}
                        onSearch={(query) => search(query)}
                    />
                </div>
            </div>
        )
    }
}

export default SearchPlaceBar;
