import React from 'react';

import RouteMap from '../route/RouteMap';
import RouteResult from '../route/RouteCard';

import './RoutePage.css'
import RouteResultHeader from '../route/RouteResultHeader';

function RoutePage(props) {
    return (
      <React.Fragment>
          <RouteResultHeader history={props.history}/>
          <RouteMap/>
          <RouteResult/>
      </React.Fragment>
    );
}

export default RoutePage;
