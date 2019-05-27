import React, { Component } from 'react';
import { Input, Button } from 'antd';
import { inject, observer } from 'mobx-react';

import { Conditional } from '../common/Conditional';

@inject('uiStore', 'searchStore')
@observer
class SearchDestinationInput extends Component {
    render() {
        const {searchStore, uiStore} = this.props;
        return (
          <Conditional if={uiStore.clickSearchInput === '' || uiStore.clickSearchInput === 'destination'}>
              <div className="search_input">
                  <Button icon="arrow-left"
                          shape=""
                          size="large"
                          type="default"
                          className="left_button"
                          onClick={() => this.props.history.push({pathname: '/'})}/>
                  <Input.Search
                    size="large"
                    placeholder="목적지 검색"
                    defaultValue={searchStore.destination.name}
                    onSearch={value => searchStore.search(value)}
                  />
                  <Button icon="ordered-list"
                          shape=""
                          size="large"
                          type="default"
                          className="right_button"
                          onClick={searchStore.swap}/>
              </div>
          </Conditional>
        )
    }
}

export default SearchDestinationInput;
