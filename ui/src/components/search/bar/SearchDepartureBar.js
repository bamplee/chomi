import React, {Component} from 'react';
import {Input, Button} from 'antd';
import {inject, observer} from 'mobx-react';

@inject('searchStore')
@observer
class SearchDepartureBar extends Component {
    render() {
        const {searchStore} = this.props;
        return (
            <div className="search_input top">
                <Input.Search
                    size="large"
                    addonBefore="출발"
                    placeholder="출발지 검색"
                    value={searchStore.departure.name}
                    onClick={this.handleDepartureInput}
                />
                <Button icon="more"
                        size="large"
                        type="default"
                        className="icon_rotate_90 right_button"
                        onClick={() => {
                        }}/>
            </div>
        )
    }

    handleDepartureInput = () => {
        const {searchStore} = this.props;
        searchStore.refreshDepartureSearch();
        this.props.history.push({pathname: '/search'});
    };
}

export default SearchDepartureBar;
