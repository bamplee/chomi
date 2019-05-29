import React, { Component } from 'react';
import { Input, Button } from 'antd';
import { inject, observer } from 'mobx-react';

@inject('searchStore')
@observer
class SummaryDepartureBar extends Component {
    render() {
        const {searchStore} = this.props;
        return (
          <div className="search_input">
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
        searchStore.handleType('departure');
        searchStore.departureSearch(searchStore.departure.name);
        this.props.history.push({pathname: '/search'});
    };
}

export default SummaryDepartureBar;
