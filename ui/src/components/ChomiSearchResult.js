import React, { Component } from 'react';
import { List, Tabs } from 'antd';
import { inject, observer } from 'mobx-react';

@inject('uiStore', 'searchStore')
@observer
class ChomiSearchList extends Component {
    render() {
        const {searchStore} = this.props;
        return (
          <React.Fragment>
              <Tabs className="search_list_tabs" type="card">
                  <Tabs.TabPane tab="검색결과" key="1">
                      <List
                        dataSource={searchStore.placeList}
                        renderItem={(item, idx) => (
                          <List.Item onClick={() => this.handleItem(idx)}>
                              <div className="search_list_table">
                                  <List.Item.Meta
                                    className="content"
                                    title={item.name}
                                    description={item.road_address}
                                  />
                              </div>
                          </List.Item>
                        )}
                      />
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="최근검색" key="2">
                      <List
                        dataSource={searchStore.historyList}
                        renderItem={(item, idx) => (
                          <List.Item onClick={() => this.handleItem(idx)}>
                              <div className="search_list_table">
                                  <List.Item.Meta
                                    title={item.name}
                                    description={item.road_address}
                                  />
                              </div>
                          </List.Item>
                        )}
                      />
                  </Tabs.TabPane>
              </Tabs>
          </React.Fragment>
        )
    }

    handleItem = (idx) => {
        const {searchStore, uiStore} = this.props;
        if (uiStore.clickSearchInput === '' || uiStore.clickSearchInput === 'destination') {
            searchStore.handleDestination(idx)
        }
        else {
            searchStore.handleDeparture(idx)
        }

        searchStore.route();
        this.props.history.push({pathname: '/'})
    };
}

export default ChomiSearchList;
