import React from 'react';
import { Collapse } from 'antd';

function SummaryCollapse(props) {
    return (
      <div className="summary_collapse">
          <Collapse accordion>
              <Collapse.Panel header="주차장" key="1">
                  <p>1</p>
              </Collapse.Panel>
              <Collapse.Panel header="경로" key="2">
                  <p>2</p>
              </Collapse.Panel>
          </Collapse>
      </div>
    )
}

export default SummaryCollapse;
