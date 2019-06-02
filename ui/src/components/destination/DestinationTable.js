import React, {Component} from 'react';
import {List} from 'antd';
import {inject, observer} from 'mobx-react';
import DestinationTableRow from "./DestinationTableRow";
import * as Mobx from "mobx";

@inject('rootStore')
@observer
class DestinationTable extends Component {
    render() {
        const {rootStore} = this.props;
        return (
            <List className="destination-table"
                  dataSource={rootStore.destinationList}
                  renderItem={(item, idx) => (
                      <DestinationTableRow key={idx} item={item} onClick={() => this.handleDestination(item)}/>
                  )}
            />
        )
    }

    handleDestination = (item) => {
        const {rootStore} = this.props;
        rootStore.handleDestination(item);
        this.props.history.push({pathname: '/list'});
    };
}

export default DestinationTable;
