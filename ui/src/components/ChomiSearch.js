import React, { Component } from 'react';
import { Input, Button } from 'antd';
import { inject, observer } from 'mobx-react';
import { Conditional } from './utils/conf';
import ChomiSearchList from './ChomiSearchResult';

@inject('uiStore', 'searchStore')
@observer
class ChomiSearch extends Component {
    componentDidMount() {
        this.input.focus();
    }

    search = (value) => {
        const {searchStore} = this.props;
        if (value.length === 0) {
            return;
        }
        searchStore.search(value);
    };

    render() {
        const {searchStore, uiStore} = this.props;
        return (
          <React.Fragment>
              <Conditional if={uiStore.clickSearchInput === 'departure'}>
                  <div className="search_input">
                      <Button icon="arrow-left"
                              shape=""
                              size="large"
                              type="default"
                              className="left_button"
                              onClick={() => this.props.history.push({pathname: '/'})}/>
                      <Input.Search
                        ref={(input) => {
                            this.input = input;
                        }}
                        size="large"
                        placeholder="출발지 검색"
                        defaultValue={searchStore.departure.name}
                        onSearch={value => this.search(value)}
                      />
                      <Button icon="ordered-list"
                              shape=""
                              size="large"
                              type="default"
                              className="right_button"
                              onClick={searchStore.swap}/>
                  </div>
              </Conditional>
              <Conditional if={uiStore.clickSearchInput === '' || uiStore.clickSearchInput === 'destination'}>
                  <div className="search_input">
                      <Button icon="arrow-left"
                              shape=""
                              size="large"
                              type="default"
                              className="left_button"
                              onClick={() => this.props.history.push({pathname: '/'})}/>
                      <Input.Search
                        ref={(input) => {
                            this.input = input;
                        }}
                        size="large"
                        placeholder="목적지 검색"
                        defaultValue={searchStore.destination.name}
                        onSearch={value => this.search(value)}
                      />
                      <Button icon="ordered-list"
                              shape=""
                              size="large"
                              type="default"
                              className="right_button"
                              onClick={searchStore.swap}/>
                  </div>
              </Conditional>
              <ChomiSearchList history={this.props.history}/>
          </React.Fragment>
        )
    }
}

export default ChomiSearch;
