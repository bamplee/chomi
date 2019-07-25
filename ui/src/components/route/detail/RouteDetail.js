import React, {Component} from 'react';
import {inject, observer} from 'mobx-react/index';

import './RouteDetail.scss';
import CommonMap from "../../common/CommonMap";
import {Button, Icon, List, PageHeader, Typography} from "antd";
import TitleRow from "../list/item/row/TitleRow";
import TimeRow from "../list/item/row/TimeRow";
import PathRow from "../list/item/row/PathRow";
import DetailRow from "../list/item/row/DetailRow";

@inject('routeStore', 'searchStore')
@observer
class RouteDetail extends Component {
    render() {
        const {routeStore, searchStore, history} = this.props;
        return (
            <React.Fragment>
                <PageHeader style={{backgroundColor: '#0050b3', padding: '12px 15px 12px 15px'}}
                            title={<Button type="link" shape="circle" icon="arrow-left" style={{color: 'white'}}
                                            onClick={() => window.history.back()}/>}
                            subTitle={<Typography.Text style={{color: 'white'}}>{searchStore.departure.name} - {searchStore.destination.name}</Typography.Text>}/>
                <CommonMap/>
                <List.Item className="route-list-item">
                    <List.Item.Meta title={
                        <TitleRow item={routeStore.detailPath}/>
                    }
                                    description={
                                        <React.Fragment>
                                            <TimeRow item={routeStore.detailPath}/>
                                            <PathRow item={routeStore.detailPath}/>
                                        </React.Fragment>
                                    }
                    />
                </List.Item>
            </React.Fragment>
        )
    }
}

export default RouteDetail;
