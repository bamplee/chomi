import React, {Component} from 'react';
import {Card, List, Skeleton, Typography} from 'antd';
import {inject, observer} from 'mobx-react';
import ListTableRow from "./ListTableRow";

@inject('rootStore')
@observer
class ListTable extends Component {
    render() {
        const {rootStore} = this.props;
        return (
            <React.Fragment>
                <Card className="list-table-card" actions={[<Typography.Text>전체목록</Typography.Text>, <Typography.Text onClick={() => this.props.history.push({pathname: '/detail'})}>상세보기</Typography.Text>]}
                >
                    <Skeleton loading={false} avatar active>
{/*                        <Card.Meta
                            avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            }
                            title="Card title"
                            description="This is the description"
                        />*/}
                        <List className="list-table"
                              dataSource={rootStore.summaryPath}
                              renderItem={(item, idx) => (
                                  <ListTableRow key={idx} idx={idx} item={item}
                                                history={this.props.history}
                                                onClick={() => this.handleDetail(item, idx)}/>
                              )}
                        />
                    </Skeleton>
                </Card>
{/*
                <div style={{display: 'flex', justifyContent: 'center', padding: 5, borderTop: '1px solid #e8e8e8', borderBottom: '1px solid #e8e8e8', backgroundColor: '#f5f5f5'}}>
                    <Icon type="caret-up" />
                </div>
*/}

{/*
                <div style={{display: 'flex', justifyContent: 'center', padding: 5, backgroundColor: '#f5f5f5'}}>
                    <Radio.Group buttonStyle="solid" defaultValue="a">
                        <Radio.Button value="a">추천</Radio.Button>
                        <Radio.Button value="c">지하철</Radio.Button>
                        <Radio.Button value="d">버스</Radio.Button>
                    </Radio.Group>
                </div>
*/}
            </React.Fragment>
        )
    }

    handleDetail = (item, idx) => {
        const {rootStore} = this.props;
        rootStore.handleRouteIndex(idx);
        /*
                this.props.history.push({pathname: '/list'})
        */
    };
}

export default ListTable;
