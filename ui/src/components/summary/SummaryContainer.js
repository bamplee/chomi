import React from 'react';

import './summary.css';
import SummaryRouteTable from './table/SummaryRouteTable';
import SummaryInfoBar from './bar/SummaryInfoBar';

function SummaryContainer(props) {
    return (
        <React.Fragment>
            <SummaryInfoBar history={props.history}/>
            <SummaryRouteTable history={props.history}/>
        </React.Fragment>
    );
}

export default SummaryContainer;
