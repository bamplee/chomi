import React, {Component} from 'react';
import {Button, Icon, Typography} from 'antd';
import {inject, observer} from 'mobx-react';

@inject('searchStore')
@observer
class SummaryInfoBar extends Component {
    render() {
        const {searchStore} = this.props;
        return (
            <div className="summary_info_bar">
                <Button icon="arrow-left"
                        size="large"
                        type="default"
                        className="left_button"
                        onClick={() => this.props.history.push({pathname: '/'})}/>
                <div className="text_div">
                    <Typography.Text>{searchStore.departure.name}</Typography.Text>
                    <Icon type="swap-right" className="icon"/>
                    <Typography.Text>{searchStore.destination.name}</Typography.Text>
                </div>
                {/*<Button icon="ordered-list"
                        size="large"
                        type="default"
                        className="right_button"
                        onClick={() => {
                        }}/>*/}
            </div>
        )
    }
}

export default SummaryInfoBar;
