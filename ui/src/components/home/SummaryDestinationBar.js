import React, { Component } from 'react';
import { Input, Button } from 'antd';
import { inject, observer } from 'mobx-react';

@inject('searchStore')
@observer
class SummaryDestinationBar extends Component {
    render() {
        const {searchStore} = this.props;
        return (
          <div className="search_input">
              <Input.Search
                size="large"
                addonBefore="도착"
                placeholder="목적지 검색"
                value={searchStore.destination.name}
                onClick={this.handleDestinationInput}
              />
              <Button icon="swap"
                      size="large"
                      type="default"
                      className="icon_rotate_90 right_button"
                      onClick={searchStore.swap}/>
          </div>
        )
    }

    handleDestinationInput = () => {
        const {searchStore} = this.props;
        searchStore.handleType('destination');
        searchStore.destinationSearch(searchStore.destination.name);
        this.props.history.push({pathname: '/search'})
    };
}

export default SummaryDestinationBar;
