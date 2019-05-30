import React from 'react';

import PlaceDepartureBar from './bar/PlaceDepartureBar';
import PlaceDestinationBar from './bar/PlaceDestinationBar';
import PlaceDepartureTable from './table/PlaceDepartureTable';
import PlaceDestinationTable from './table/PlaceDestinationTable';

import './place.css';

function PlaceContainer(props) {
    return (
        <React.Fragment>
            <PlaceDepartureBar history={props.history}/>
            <PlaceDepartureTable history={props.history}/>
            <PlaceDestinationBar history={props.history}/>
            <PlaceDestinationTable history={props.history}/>
        </React.Fragment>
    );
}

export default PlaceContainer;
