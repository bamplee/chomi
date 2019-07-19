import React, {Component} from 'react';
import {Spin} from 'antd';
import {inject, observer} from 'mobx-react/index';
import RouteList from "../route/list/RouteList";
import RouteListTabs from "../route/list/tabs/RouteListTabs";
import RouteListCarItem from "../route/list/item/RouteListCarItem";
import CommonHeader from "../common/CommonHeader";
import FromToPlaceInput from "../place/fromto/FromToPlaceInput";

@inject('routeStore')
@observer
class RouteListContainer extends Component {
    render() {
        const {routeStore} = this.props;
        return (
            <React.Fragment>
{/*
                <CommonHeader/>
*/}
                <FromToPlaceInput history={this.props.history}/>
                <Spin spinning={routeStore.loading} tip="Loading...">
                    <RouteListTabs/>
                    <RouteListCarItem/>
                    <RouteList/>
                </Spin>
            </React.Fragment>
        )
    }
}

export default RouteListContainer;
