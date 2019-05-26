import React, {Component} from 'react';
import {API_MODULE} from "./utils/api";
import {Avatar, Button, Icon, Input, List, PageHeader, Tabs} from "antd";

const myImg = src => <img src={src} style={{width: 60, height: 60}} alt=""/>;

const IconText = ({type, text}) => (
    <span>
    <Icon type={type} style={{marginRight: 8}}/>
        {text}
  </span>
);

class ChomiSearch extends Component {
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
        const {loading, places} = this.state;
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
                {/*<div className="toast-example">
                    <ActivityIndicator
                        toast
                        text="Loading..."
                        animating={loading}
                    />
                </div>
                <SearchBar
                    cancelText="취소"
                    placeholder="장소 검색"
                    defaultValue={this.state.query}
                    onSubmit={value => this.search(value)}
                />
                {
                    places.length === 0 ?
                        <Result
                            img={myImg('https://gw.alipayobjects.com/zos/rmsportal/GIyMDJnuqmcqPLpHCSkj.svg')}
                            message="검색 결과가 없습니다"
                        />
                        :

                        <List renderHeader={() => '검색결과'} className="my-list">
                            {
                                places.map((x, idx) => (
                                    <React.Fragment>
                                        <div style={{display: 'flex', justifyContent: 'center'}}>
                                            <img style={{height: 150}}
                                                 src={'http://localhost:8080/api/v1/maps/image?x=' + x.x + '&y=' + x.y}/>
                                        </div>
                                        <List.Item key={idx} multipleLine
                                                   extra={<Button type="primary" size="small" inline
                                                                  onClick={() => this.handlePoint(x)}>선택</Button>}>
                                            {x.name}
                                            <List.Item.Brief>
                                                {x.phone_number}
                                            </List.Item.Brief>
                                            <List.Item.Brief>
                                                {x.road_address}
                                            </List.Item.Brief>
                                        </List.Item>
                                        <WhiteSpace size="sm" style={{backgroundColor: '#F5F5F5'}}/>
                                    </React.Fragment>
                                ))
                            }
                        </List>
                }*/}
            </React.Fragment>
        )
    }
}

export default ChomiSearch;
