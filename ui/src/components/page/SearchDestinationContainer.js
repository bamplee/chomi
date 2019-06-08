import React from 'react';
import DestinationPlaceInput from "../place/destination/DestinationPlaceInput";
import DestinationPlaceList from "../place/destination/DestinationPlaceList";

function SearchDestinationContainer(props) {
    return (
        <React.Fragment>
            <DestinationPlaceInput history={props.history}/>
            <DestinationPlaceList history={props.history}/>
        </React.Fragment>
    );
}

export default SearchDestinationContainer;
