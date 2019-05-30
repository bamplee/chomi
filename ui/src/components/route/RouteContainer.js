import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import RouteMapTable from './table/RouteMapTable';
import RouteInfoTable from './table/RouteInfoTable';
import RouteInfoBar from './bar/RouteInfoBar';

import './route.css'
import {Conditional} from "../common/Conditional";
import ErrorPage from "../common/ErrorPage";

@inject('searchStore')
@observer
class RouteContainer extends Component {
    render() {
        const {history, searchStore} = this.props;
        return (
            <React.Fragment>
                <Conditional if={searchStore.isSearchRoute}>
                    <RouteInfoBar history={history}/>
                    <RouteMapTable/>
                    <RouteInfoTable history={history}/>
                </Conditional>
                <Conditional if={!searchStore.isSearchRoute}>
                    <ErrorPage/>
                </Conditional>
            </React.Fragment>
        );
    }
}

export default RouteContainer;
