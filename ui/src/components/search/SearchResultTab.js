import React from 'react';
import { Tabs } from 'antd';

import SearchResultList from './SearchResultList';
import SearchHistoryList from './SearchHistoryList';

function SearchResultTab(props) {
    return (
      <React.Fragment>
          <Tabs className="search_list_tabs" type="card">
              <Tabs.TabPane tab="검색결과" key="1">
                  <SearchResultList history={props.history}/>
              </Tabs.TabPane>
              <Tabs.TabPane tab="최근검색" key="2">
                  <SearchHistoryList history={props.history}/>
              </Tabs.TabPane>
          </Tabs>
      </React.Fragment>
    )
}

export default SearchResultTab;
