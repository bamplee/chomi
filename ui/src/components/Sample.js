import React, {Component} from 'react';
import {Card, Carousel, Grid, Icon, List, NavBar, Popover, SearchBar, WhiteSpace, WingBlank} from 'antd-mobile';
import MapView from "./common/MapView";

const data = Array.from(new Array(15)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
}));

const data2 = [
    {
        value: '1',
        label: 'Food',
    }, {
        value: '2',
        label: 'Supermarket',
    },
    {
        value: '3',
        label: 'Extra',
        isLeaf: true,
    },
];

const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs"
                          alt=""/>;

class Sample extends Component {
    constructor(props) {
        super(props);
        this.state = this.initState();
    }

    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }

    initState = () => {
        return {
            data: ['1', '2', '3'],
            imgHeight: 176,
            initData: '',
            show: false,
        };
    };

    onSelect = (opt) => {
        // console.log(opt.props.value);
        this.setState({
            visible: false,
            selected: opt.props.value,
        });
    };
    handleVisibleChange = (visible) => {
        this.setState({
            visible,
        });
    };

    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    rightContent={
                        <Popover mask
                                 overlayClassName="fortest"
                                 overlayStyle={{color: 'currentColor'}}
                                 visible={this.state.visible}
                                 overlay={[
                                     (<Popover.Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')}
                                                    data-seed="logId">Scan</Popover.Item>),
                                     (<Popover.Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')}
                                                    style={{whiteSpace: 'nowrap'}}>My Qrcode</Popover.Item>),
                                     (<Popover.Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
                                         <span style={{marginRight: 5}}>Help</span>
                                     </Popover.Item>),
                                 ]}
                                 align={{
                                     overflow: {adjustY: 0, adjustX: 0},
                                     offset: [-10, 0],
                                 }}
                                 onVisibleChange={this.handleVisibleChange}
                                 onSelect={this.onSelect}
                        >
                            <div style={{
                                height: '100%',
                                padding: '0 15px',
                                marginRight: '-15px',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            >
                                <Icon type="ellipsis"/>
                            </div>
                        </Popover>
                    }
                >
                    NavBar
                </NavBar>
                <WhiteSpace size="sm"/>
                <SearchBar placeholder="Search" cancelText="취소" maxLength={8}/>
                <WhiteSpace size="sm"/>
                {/*epit1z6yed*/}
                <MapView ncpClientId={'epit1z6yed'}/>
                <WhiteSpace size="sm"/>
                <List renderHeader={() => 'Subtitle'} className="my-list">
                    <List.Item arrow="horizontal" multipleLine onClick={() => {
                    }}>
                        Title <List.Item.Brief>subtitle</List.Item.Brief>
                    </List.Item>
                    <List.Item
                        arrow="horizontal"
                        multipleLine
                        onClick={() => {
                        }}
                        platform="android"
                    >
                        ListItem （Android）<List.Item.Brief>There may have water ripple effect of <br/> material if you
                        set the click event.</List.Item.Brief>
                    </List.Item>
                    <List.Item
                        arrow="horizontal"
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        multipleLine
                        onClick={() => {
                        }}
                    >
                        Title <List.Item.Brief>subtitle</List.Item.Brief>
                    </List.Item>
                </List>
                <WhiteSpace size="sm"/>
                <Carousel style={{background: '#DEF1E5', overflow: 'hidden'}}
                          frameOverflow="visible"
                          cellSpacing={10}
                          slideWidth={0.8}
                          infinite
                          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                          afterChange={index => this.setState({slideIndex: index})}
                >
                    {this.state.data.map((val, index) => (
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
                <WhiteSpace size="sm"/>
                <Grid data={data} columnNum={3}/>
            </div>
        )
    }
}

export default Sample;
