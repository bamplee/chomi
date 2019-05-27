import React, {Component} from 'react';
import {Input, Button} from 'antd';
import {inject, observer} from 'mobx-react';

@inject('uiStore', 'searchStore')
@observer
class ChomiRoute extends Component {
    handleClickInput = (clickInput) => {
        const {handleClickSearchInput} = this.props.uiStore;
        handleClickSearchInput(clickInput);
        this.props.history.push({pathname: '/search'})
    };

    render() {
        const {searchStore} = this.props;
        return (
            <React.Fragment>
                <div className="search_input">
                    <Input.Search
                        size="large"
                        addonBefore="출발"
                        placeholder="출발지 검색"
                        value={searchStore.departure.name}
                        onClick={() => this.handleClickInput('departure')}
                    />
                    <Button icon="more"
                            shape=""
                            size="large"
                            type="default"
                            className="icon_rotate_90 right_button"
                            onClick={searchStore.swap}/>
                </div>
                <div className="search_input">
                    <Input.Search
                        size="large"
                        addonBefore="도착"
                        placeholder="목적지 검색"
                        value={searchStore.destination.name}
                        onClick={() => this.handleClickInput('destination')}
                    />
                    <Button icon="swap"
                            shape=""
                            size="large"
                            type="default"
                            className="icon_rotate_90 right_button"
                            onClick={searchStore.swap}/>
                </div>
            </React.Fragment>
        )
    }
}

export default ChomiRoute;
