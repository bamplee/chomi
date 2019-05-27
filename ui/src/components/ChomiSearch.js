import React, {Component} from 'react';
import {Input, Button} from 'antd';
import {inject, observer} from 'mobx-react';
import {Conditional} from "./utils/conf";
import {API_MODULE} from "./utils/api";

@inject('uiStore', 'searchStore')
@observer
class ChomiSearch extends Component {
    componentDidMount() {
        this.input.focus();
    }

    search = (value) => {
        if (value.length === 0) {
            return;
        }
        console.log(value);
        /*this.setState({query: value, loading: true});
        API_MODULE.search(value, (response) => {
            if (response.status === 200) {
                let places = response.data.places;
                console.log(places);
                this.setState({loading: false, places: places});
            } else {
                alert('요청실패');
                this.setState({loading: false});
            }
        })*/
    };

    render() {
        const {searchStore, uiStore} = this.props;
        return (
            <React.Fragment>
                <Conditional if={uiStore.clickSearchInput === 'departure'}>
                    <div className="search_input">
                        <Button icon="arrow-left"
                                shape=""
                                size="large"
                                type="default"
                                className="left_button"
                                onClick={() => this.props.history.push({pathname: '/'})}/>
                        <Input.Search
                            ref={(input) => {
                                this.input = input;
                            }}
                            size="large"
                            placeholder="출발지 검색"
                            defaultValue={searchStore.departure.name}
                            onSearch={value => this.search(value)}
                        />
                    </div>
                </Conditional>
                <Conditional if={uiStore.clickSearchInput === '' || uiStore.clickSearchInput === 'destination'}>
                    <div className="search_input">
                        <Button icon="arrow-left"
                                shape=""
                                size="large"
                                type="default"
                                className="left_button"
                                onClick={() => this.props.history.push({pathname: '/'})}/>
                        <Input.Search
                            ref={(input) => {
                                this.input = input;
                            }}
                            size="large"
                            placeholder="목적지 검색"
                            defaultValue={searchStore.destination.name}
                            onSearch={value => this.search(value)}
                        />
                    </div>
                </Conditional>
            </React.Fragment>
        )
    }
}

export default ChomiSearch;
