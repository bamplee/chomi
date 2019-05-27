import React  from 'react';
import DepartureResult from '../route/DepartureResult';
import DestinationResult from '../route/DestinationResult';
import RouteMap from '../route/RouteMap';
import RouteResult from '../route/RouteResult';

function RoutePage(props) {
    return (
      <React.Fragment>
          <DepartureResult history={props.history}/>
          <DestinationResult history={props.history}/>
          <RouteMap/>
          <RouteResult/>
      </React.Fragment>
    );
}

export default RoutePage;
