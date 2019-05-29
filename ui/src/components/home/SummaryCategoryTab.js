import React from 'react';
import { Tabs } from 'antd';

function SummaryCategoryTab(props) {
    return (
      <Tabs className="summary_category_tab" type="card">
          <Tabs.TabPane tab="검색결과" key="1">
              1
          </Tabs.TabPane>
          <Tabs.TabPane tab="최근검색" key="2">
              2
          </Tabs.TabPane>
      </Tabs>
    )
}

export default SummaryCategoryTab;
