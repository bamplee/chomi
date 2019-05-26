import React, {Component} from 'react';
import {Button, Card, Icon, Input, PageHeader, Pagination, Tag, Timeline, Typography} from "antd";

class ChomiRoute extends Component {
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
            <React.Fragment>
                <PageHeader title="Title" subTitle="This is a subtitle"/>
                <Input.Search
                    style={{paddingLeft: 5, paddingRight: 5, paddingTop: 2, paddingBottom: 2}}
                    size="large"
                    addonBefore="출발"
                    placeholder="출발지 검색"
                    value={startPoint.name}
                    onClick={() => this.props.history.push({
                        pathname: '/search',
                        search: (startPoint.name ? 'query=' + startPoint.name : ''),
                        state: {type: 'start'}
                    })}
                    onSearch={value => console.log(value)}
                />
                <Input.Search
                    style={{paddingLeft: 5, paddingRight: 5, paddingTop: 2, paddingBottom: 2}}
                    size="large"
                    addonBefore="도착"
                    placeholder="목적지 검색"
                    value={endPoint.name}
                    onClick={() => this.props.history.push({
                        pathname: '/search',
                        search: (endPoint.name ? 'query=' + endPoint.name : ''),
                        state: {type: 'end'}
                    })}
                    onSearch={value => console.log(value)}
                />
                <Card title={<span>
                    <Typography.Text code style={{marginRight: 10}}>경로 1</Typography.Text>
                    <Typography.Text>약 </Typography.Text>
                    <Typography.Text type="danger">10</Typography.Text>
                    <Typography.Text>분, </Typography.Text>
                    <Typography.Text type="warning">5000</Typography.Text>
                    <Typography.Text>원</Typography.Text>
                </span>} bordered={true} style={{margin: 5}}>
                    <Timeline>
                        <Timeline.Item>출발</Timeline.Item>
                        <Timeline.Item color="green">경유</Timeline.Item>
                        <Timeline.Item color="red">도착</Timeline.Item>
                    </Timeline>
                </Card>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                <Button.Group>
                    <Button type="default">
                        <Icon type="left"/>
                        이전
                    </Button>
                    <Button type="default">
                        다음
                        <Icon type="right"/>
                    </Button>
                </Button.Group>
                </div>
            </React.Fragment>
            /*<Carousel style={{overflow: 'hidden'}}
                      frameOverflow="visible"
                      cellSpacing={10}
                      slideWidth={0.8}
                      infinite
                      beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                      afterChange={index => this.setState({slideIndex: index})}
            >
                {['1', '2', '3'].map((val, index) => (
                    <WingBlank size="lg">
                        <WhiteSpace size="lg"/>
                        <Card style={{
                            display: 'block',
                            position: 'relative',
                            top: this.state.slideIndex === index ? -10 : 0,
                            height: this.state.imgHeight,
                            boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                        }}>
                            <Card.Header
                                title="This is title"
                                thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                                extra={<span>this is extra</span>}
                            />
                            <Card.Body>
                                <div>This is content of `Card`</div>
                            </Card.Body>
                            <Card.Footer content="footer content" extra={<div>extra footer content</div>}/>
                        </Card>
                        <WhiteSpace size="lg"/>
                    </WingBlank>
                ))}
            </Carousel>*/
        )
    }
}

export default ChomiRoute;
