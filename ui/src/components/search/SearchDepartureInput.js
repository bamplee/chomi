import React, { Component } from 'react';
import { Input, Button } from 'antd';
import { inject, observer } from 'mobx-react';

import { Conditional } from '../common/Conditional';

@inject('uiStore', 'searchStore')
@observer
class SearchDepartureInput extends Component {
    render() {
        const {searchStore, uiStore} = this.props;
        return (
          <Conditional if={uiStore.clickSearchInput === 'departure'}>
              <div className="search_input">
                  <Button icon="arrow-left"
                          size="large"
                          type="default"
                          className="left_button"
                          onClick={() => this.props.history.push({pathname: '/'})}/>
                  <Input.Search
                    size="large"
                    placeholder="출발지 검색"
                    defaultValue={searchStore.departure.name}
                    onSearch={value => searchStore.search(value)}
                  />
                  <Button icon="ordered-list"
                          size="large"
                          type="default"
                          className="right_button"
                          onClick={searchStore.swap}/>
              </div>
          </Conditional>
        )
    }
}

export default SearchDepartureInput;
