import React from 'react';

import DestinationBar from "./DestinationBar";
import DestinationTable from "./DestinationTable";

import './destination.css';

function DestinationContainer(props) {
    return (
        <React.Fragment>
            <DestinationBar history={props.history}/>
            <DestinationTable history={props.history}/>
        </React.Fragment>
    );
}

export default DestinationContainer;
