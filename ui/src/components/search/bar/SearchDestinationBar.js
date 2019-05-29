import React, { Component } from 'react';
import { Input, Button } from 'antd';
import { inject, observer } from 'mobx-react';

@inject('searchStore')
@observer
class SearchDestinationBar extends Component {
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
                placeholder="목적지 검색"
                defaultValue={searchStore.destination.name}
                onSearch={value => searchStore.destinationSearch(value)}
              />
              <Button className="right_button"
                      icon="ordered-list"
                      size="large"
                      type="default"
                      onClick={this.swap}/>
          </div>
        )
    }

    swap = () => {
        const {searchStore, routeStore} = this.props;
        searchStore.swap();
        routeStore.route(searchStore.departure, searchStore.destination);
    };
}

export default SearchDestinationBar;
