import React from 'react';
import DestinationPlaceInput from "./DestinationPlaceInput";
import DestinationPlaceList from "./DestinationPlaceList";

function DestinationPlaceContainer(props) {
    return (
        <React.Fragment>
            <DestinationPlaceInput history={props.history}/>
            <DestinationPlaceList history={props.history}/>
        </React.Fragment>
    );
}

export default DestinationPlaceContainer;
