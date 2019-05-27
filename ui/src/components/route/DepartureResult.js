import React, { Component } from 'react';
import { Input, Button } from 'antd';
import { inject, observer } from 'mobx-react';

@inject('uiStore', 'searchStore')
@observer
class DepartureResult extends Component {
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
                      shape=""
                      size="large"
                      type="default"
                      className="icon_rotate_90 right_button"
                      onClick={() => {
                      }}/>
          </div>
        )
    }

    handleDepartureInput = () => {
        const {searchStore, uiStore} = this.props;
        uiStore.handleDepartureInput();
        searchStore.search(searchStore.departure.name);
        this.props.history.push({pathname: '/search'});
    };
}

export default DepartureResult;
