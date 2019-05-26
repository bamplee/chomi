import React, {Component} from 'react';
import {Avatar, Icon, Input, List, PageHeader} from "antd";

class ChomiHome extends Component {
    constructor(props) {
        super(props);

        this.state = this.initState();
    }

    initState = () => {
        return {
            slideIndex: 0
        }
    };

    split = (str) => {
        const length = 20;
        return str.length > length ? str.slice(0, length) + '..' : str;
    };

    render() {
        const {startPoint, endPoint} = this.props;
        return (
            <div>
{/*
                <PageHeader backIcon={<Icon type="home"/>} onBack={() => null} title="Title" subTitle="This is a subtitle"/>
*/}
                <PageHeader title="Title" subTitle="This is a subtitle"/>
                {/*
                <Input.Search
                    style={{paddingLeft: 5, paddingRight: 5, paddingTop: 2, paddingBottom: 2}}
                    size="large"
                    placeholder="주소 검색"
                    value={startPoint.road_address}
                    onSearch={value => console.log(value)}
                />
*/}
                <Input.Search
                    style={{paddingLeft: 5, paddingRight: 5, paddingTop: 2, paddingBottom: 2}}
                    size="large"
                    placeholder="주소 검색"
                    value={endPoint.road_address}
                    onClick={() => this.props.history.push({
                        pathname: '/search',
                        search: (endPoint.name ? 'query=' + endPoint.name : ''),
                        state: {type: 'end'}
                    })}
                    onSearch={value => console.log(value)}
                />
                {/*<WhiteSpace size="xl"/>
                <WingBlank size="lg">
                    <Steps current={2} direction="horizontal" size="small">
                        <Steps.Step
                            onClick={() => this.props.history.push({
                                pathname: '/search',
                                search: (startPoint.name ? 'query=' + startPoint.name : ''),
                                state: {type: 'start'}
                            })}
                            icon={<Icon type={'search'}/>} title={startPoint.name}
                            description={startPoint.road_address ? this.split(startPoint.road_address) :
                                <span>출발지를<br/>선택하세요</span>}/>
                        <Steps.Step
                            icon={<Icon type={'ellipsis'}/>} title={endPoint.name}
                            description={endPoint.road_address ? endPoint.road_address :
                                <span style={{color: '#5D5D5D'}}>버스<br/>지하철</span>}/>
                        <Steps.Step
                            onClick={() => this.props.history.push({
                                pathname: '/search',
                                search: (endPoint.name ? 'query=' + endPoint.name : ''),
                                state: {type: 'end'}
                            })}
                            icon={<Icon type={'search'}/>} title={endPoint.name}
                            description={endPoint.road_address ? endPoint.road_address :
                                <span>목적지를<br/>선택하세요</span>}/>
                    </Steps>
                </WingBlank>
                <WhiteSpace size="xl"/>
                <ChomiRouteList/>*/}
            </div>
        )
    }
}

export default ChomiHome;
