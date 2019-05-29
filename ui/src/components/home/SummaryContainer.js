import React from 'react';

import SummaryDepartureBar from './SummaryDepartureBar';
import SummaryDestinationBar from './SummaryDestinationBar';
import SummaryCollapse from './SummaryCollapse';
import SummaryCategoryTab from './SummaryCategoryTab';

import './summary.css';
import SummaryRouteTable from './SummaryRouteTable';

function SummaryContainer(props) {
    return (
      <React.Fragment>
          <SummaryDepartureBar history={props.history}/>
          <SummaryDestinationBar history={props.history}/>

          <SummaryRouteTable history={props.history}/>

{/*
          <SummaryCategoryTab/>
*/}
      </React.Fragment>
    );
}

export default SummaryContainer;
