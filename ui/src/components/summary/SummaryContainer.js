import React from 'react';

import SummaryDepartureBar from './bar/SummaryDepartureBar';
import SummaryDestinationBar from './bar/SummaryDestinationBar';

import './summary.css';
import SummaryCollapseTable from "./table/SummaryCollapseTable";

function SummaryContainer(props) {
    return (
        <React.Fragment>
            <SummaryDepartureBar history={props.history}/>
            <SummaryDestinationBar history={props.history}/>
            <SummaryCollapseTable history={props.history}/>
        </React.Fragment>
    );
}

export default SummaryContainer;
