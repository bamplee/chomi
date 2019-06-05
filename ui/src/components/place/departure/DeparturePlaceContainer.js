import React from 'react';

import DeparturePlaceInput from "./DeparturePlaceInput";
import DeparturePlaceList from "./DeparturePlaceList";

function DeparturePlaceContainer(props) {
    return (
        <React.Fragment>
            <DeparturePlaceInput history={props.history}/>
            <DeparturePlaceList history={props.history}/>
        </React.Fragment>
    );
}

export default DeparturePlaceContainer;
