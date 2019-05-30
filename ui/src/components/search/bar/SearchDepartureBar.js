import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {Input, Button} from 'antd';

@inject('searchStore')
@observer
class SearchDepartureBar extends Component {
    render() {
        const {searchStore} = this.props;
        return (
            <div className="search_input">
                <Button className="left_button"
                        icon="arrow-left"
                        size="large"
                        type="default"
                        onClick={() => this.props.history.push({pathname: '/'})}/>
                <Input.Search
                    ref={(input) => input && input.focus()}
                    size="large"
                    placeholder="출발지 검색"
                    defaultValue={searchStore.departure.name}
                    onSearch={value => searchStore.departureSearch(value)}
                />
                <Button className="right_button"
                        icon="ordered-list"
                        size="large"
                        type="default"
                        onClick={() => {
                        }}/>
            </div>
        )
    }
}

export default SearchDepartureBar;
