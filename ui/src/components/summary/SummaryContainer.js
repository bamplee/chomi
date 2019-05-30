import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import SummaryRouteTable from './table/SummaryRouteTable';
import SummaryInfoBar from './bar/SummaryInfoBar';

import './summary.css';
import {Conditional} from "../common/Conditional";
import ErrorPage from "../common/ErrorPage";

@inject('searchStore')
@observer
class SummaryContainer extends Component {
    render() {
        const {history, searchStore} = this.props;
        return (
            <React.Fragment>
                <Conditional if={searchStore.isSearchRoute}>
                    <SummaryInfoBar history={history}/>
                    <SummaryRouteTable history={history}/>
                </Conditional>
                <Conditional if={!searchStore.isSearchRoute}>
                    <ErrorPage/>
                </Conditional>
            </React.Fragment>
        );
    }
}

export default SummaryContainer;
