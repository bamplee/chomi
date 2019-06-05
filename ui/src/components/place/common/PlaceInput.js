import React from 'react';
import {Button, Input} from 'antd';

import './PlaceInput.scss'

function PlaceInput(props) {
    return (
        <div className="place-input">
            <div className="row">
                <Button className="btn"
                        icon="arrow-left"
                        size="large"
                        type="default"
                        onClick={() => props.history.goBack()}/>
                <Input.Search
                    allowClear
                    ref={(input) => input && input.focus()}
                    size="large"
                    placeholder="출발지 검색"
                    defaultValue={props.name}
                    onSearch={(query) => props.search(query)}
                />
            </div>
        </div>
    )
}

export default PlaceInput;
