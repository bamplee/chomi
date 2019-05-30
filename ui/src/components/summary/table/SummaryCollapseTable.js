import React, {Component} from 'react';
import {Collapse} from 'antd';
import SummaryRouteTable from "./SummaryRouteTable";
import {inject, observer} from "mobx-react/index";

@inject('routeStore')
@observer
class SummaryCollapseTable extends Component {
    render() {
        const {history} = this.props;
        return (
            <div className="summary_collapse">
                <Collapse accordion expandIconPosition="right">
                    <Collapse.Panel header="주차장" key="park">
                        <p>데이터 없음</p>
                    </Collapse.Panel>
                    <Collapse.Panel header="경로" key="path">
                        <SummaryRouteTable history={history}/>
                    </Collapse.Panel>
                </Collapse>
            </div>
        )
    }
}

export default SummaryCollapseTable;
