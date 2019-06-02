import React, {Component} from 'react';
import {Card} from 'antd';
import {inject, observer} from 'mobx-react';
import DetailTableRow from "./DetailTableRow";

@inject('rootStore')
@observer
class DetailTable extends Component {
    render() {
        return (
            <Card className="detail_result_card">
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
