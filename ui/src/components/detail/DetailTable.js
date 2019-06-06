/*
import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import DetailTableRow from "./DetailTableRow";
import DetailTableTitleRow from "./DetailTableTitleRow";
import {Card} from "antd";

@inject('rootStore')
@observer
class DetailTable extends Component {
    render() {
        return (
            <Card className="detail_result_card">
                <DetailTableTitleRow/>
                <DetailTableRow/>
            </Card>
        )
    }

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
*/
