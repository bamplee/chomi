import React from 'react';

import DeparturePlaceInput from "../place/departure/DeparturePlaceInput";
import DeparturePlaceList from "../place/departure/DeparturePlaceList";

function SearchDepartureContainer(props) {
    return (
        <React.Fragment>
            <DeparturePlaceInput history={props.history}/>
            <DeparturePlaceList history={props.history}/>
        </React.Fragment>
    );
}

export default SearchDepartureContainer;
