import React, {Component} from 'react';
import {Card, Carousel, Icon, Steps, WhiteSpace, WingBlank} from "antd-mobile";

class ChomiSearchResult extends Component {
    constructor(props) {
        super(props);

        this.state = this.initState();
    }

    initState = () => {
        return {
            slideIndex: 0
        }
    };

    render() {
        return (
            <Carousel style={{overflow: 'hidden'}}
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
            </Carousel>
        )
    }
}

export default ChomiSearchResult;
