import React, {Component} from 'react';
import {API_MODULE} from "./utils/api";
import {Button, Input, List, PageHeader, Tabs} from "antd";

class ChomiSearchSample extends Component {
    constructor(props) {
        super(props);
        this.state = this.initState();
    }

    initState = () => {
        return {
            loading: false,
            query: '',
            places: []
        }
    };

    componentDidMount() {
        this.input.focus();
    }

    componentWillMount = () => {
        if (this.props.location.search) {
            const params = new URLSearchParams(this.props.location.search);
            let query = params.get('query');
            if (query) {
                this.search(query);
            }
        }
    };

    search = (value) => {
        if (value.length === 0) {
            return;
        }
        this.setState({query: value, loading: true});
        API_MODULE.search(value, (response) => {
            if (response.status === 200) {
                let places = response.data.places;
                console.log(places);
                this.setState({loading: false, places: places});
            } else {
                alert('요청실패');
                this.setState({loading: false});
            }
        })
    };

    handlePoint = (place) => {
        const {type} = this.props.location.state;
        if (type === 'start') {
            this.props.handleStartPoint(place);
        } else {
            this.props.handleEndPoint(place);
        }
        this.props.history.push({pathname: '/'});
    };

    render() {
        const {places} = this.state;
        const {type} = this.props.location.state;
        return (
            <React.Fragment>
                <PageHeader onBack={() => window.history.back()} title="Title"
                            subTitle="This is a subtitle"/>
                <Input.Search
                    ref={(input) => {
                        this.input = input;
                    }}
                    style={{paddingLeft: 5, paddingRight: 5, paddingTop: 2, paddingBottom: 2}}
                    size="large"
                    defaultValue={this.state.query}
                    placeholder={type === 'start' ? '출발지 검색' : '목적지 검색'}
                    onSearch={value => this.search(value)}
                />
                <Tabs onChange={(e) => console.log(e)} type="card" style={{marginTop: 10}}>
                    <Tabs.TabPane tab="검색결과" key="1">
                        <List
                            itemLayout="vertical"
                            size="large"
                            /*                    pagination={{
                                                    onChange: page => {
                                                        console.log(page);
                                                    },
                                                    pageSize: 3,
                                                }}*/
                            dataSource={places}
                            footer={
                                <div/>
                            }
                            renderItem={item => (
                                <List.Item
                                    key={item.name}
                                    extra={
                                        <img
                                            height={150}
                                            alt="logo"
                                            src={'http://localhost:8080/api/v1/maps/image?x=' + item.x + '&y=' + item.y}
                                        />
                                    }
                                >
                                    <div style={{paddingLeft: 20}}>
                                        <List.Item.Meta
                                            title={<a href={item.href}>{item.name}</a>}
                                            description={item.road_address}
                                        />
                                        {item.phone_number}
                                        <div style={{textAlign: 'right', marginRight: 20}}>
                                            <Button type="primary" icon="search" onClick={() => this.handlePoint(item)}>
                                                검색
                                            </Button>
                                        </div>
                                    </div>
                                </List.Item>
                            )}
                        />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="최근검색" key="2">
                        Content of Tab Pane 2
                    </Tabs.TabPane>
                </Tabs>
            </React.Fragment>
        )
    }
}

export default ChomiSearchSample;
