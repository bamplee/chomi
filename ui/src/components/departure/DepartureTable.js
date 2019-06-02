import React, {Component} from 'react';
import {List} from 'antd';
import {inject, observer} from 'mobx-react';
import DepartureTableRow from "./DepartureTableRow";

@inject('rootStore')
@observer
class DepartureTable extends Component {
    render() {
        const {rootStore} = this.props;
        return (
            <List className="departure-table"
                  dataSource={rootStore.departureList}
                  renderItem={(item, idx) => (
                      <DepartureTableRow key={idx} item={item} onClick={() => this.handleDeparture(item)}/>
                  )}
            />
        )
    }

    handleDeparture = (item) => {
        const {rootStore} = this.props;
        rootStore.handleDeparture(item);
        this.props.history.push({pathname: '/list'})
    };
}

export default DepartureTable;
