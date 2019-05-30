import React, {Component} from 'react';
import {Card, Typography} from 'antd';
import {inject, observer} from 'mobx-react';

@inject('searchStore')
@observer
class SummaryParkingBar extends Component {
    render() {
        const {searchStore} = this.props;
        return (
            <Card className="summary_parking_bar" size="small" title={<Typography.Text>{searchStore.parking.name}</Typography.Text>} extra={<a href="#"></a>}>
                <p>{searchStore.parking.address}</p>
            </Card>
        )
    }
}

export default SummaryParkingBar;
