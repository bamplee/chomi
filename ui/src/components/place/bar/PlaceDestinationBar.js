import React, { Component } from 'react';
import { Input, Button } from 'antd';
import { inject, observer } from 'mobx-react';
import { Conditional } from '../../common/Conditional';

@inject('searchStore')
@observer
class PlaceDestinationBar extends Component {
    render() {
        const {searchStore} = this.props;
        return (
          <Conditional if={searchStore.lastSearchType === 'destination'}>
              <div className="place_input">
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
                          onClick={searchStore.swap}/>
              </div>
          </Conditional>
        )
    }
}

export default PlaceDestinationBar;
