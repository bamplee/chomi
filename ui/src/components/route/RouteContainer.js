import React from 'react';

import RouteMapTable from './table/RouteMapTable';
import RouteInfoTable from './table/RouteInfoTable';

import './route.css'
import RouteInfoBar from './bar/RouteInfoBar';

function RouteContainer(props) {
    return (
        <React.Fragment>
            <RouteInfoBar history={props.history}/>
            <RouteMapTable/>
            <RouteInfoTable/>
        </React.Fragment>
    );
}

export default RouteContainer;
