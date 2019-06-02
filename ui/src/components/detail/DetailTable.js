import React, {Component} from 'react';
import {Card} from 'antd';
import {inject, observer} from 'mobx-react';
import DetailTableRow from "./DetailTableRow";
import DetailTableTitleRow from "./DetailTableTitleRow";

@inject('rootStore')
@observer
class DetailTable extends Component {
    render() {
        const {rootStore} = this.props;
        return (
            <Card className="detail_result_card">
                <DetailTableTitleRow/>
                <DetailTableRow/>
            </Card>
        )
    }

    pagination = (routeIndex, routeList) => {
        return (routeIndex * 1 + 1) + '/' + (routeList.subwayBusCount * 1 + routeList.busCount * 1 + routeList.subwayCount * 1);
    };

    decreaseRouteIndex = () => {
        const {rootStore} = this.props;
        window.scrollTo(0, 0);
        rootStore.decreaseRouteIndex();
    };

    increaseRouteIndex = () => {
        const {rootStore} = this.props;
        window.scrollTo(0, 0);
        rootStore.increaseRouteIndex();
    };
}

export default DetailTable;
