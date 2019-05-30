import React from 'react';

import SummaryDepartureBar from './bar/SummaryDepartureBar';
import SummaryDestinationBar from './bar/SummaryDestinationBar';

import './summary.css';
import SummaryRouteTable from './table/SummaryRouteTable';

function SummaryContainer(props) {
    return (
        <React.Fragment>
            <SummaryDepartureBar history={props.history}/>
            <SummaryDestinationBar history={props.history}/>
            <SummaryRouteTable history={props.history}/>
        </React.Fragment>
    );
}

export default SummaryContainer;
