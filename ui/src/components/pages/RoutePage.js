import React from 'react';

import RouteDepartureInput from '../route/RouteDepartureInput';
import RouteDestinationInput from '../route/RouteDestinationInput';
import RouteMap from '../route/RouteMap';
import RouteResult from '../route/RouteCard';

import './RoutePage.css'

function RoutePage(props) {
    return (
      <React.Fragment>
          <RouteDepartureInput history={props.history}/>
          <RouteDestinationInput history={props.history}/>
          <RouteMap/>
          <RouteResult/>
      </React.Fragment>
    );
}

export default RoutePage;
