import React from 'react';

import DepartureBar from "./DepartureBar";

import './departure.css';
import DepartureTable from "./DepartureTable";

function DepartureContainer(props) {
    return (
        <React.Fragment>
            <DepartureBar history={props.history}/>
            <DepartureTable history={props.history}/>
        </React.Fragment>
    );
}

export default DepartureContainer;
