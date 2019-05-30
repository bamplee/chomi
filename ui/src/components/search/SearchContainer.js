import React from 'react';

import SearchDepartureBar from './bar/SearchDepartureBar';
import SearchDestinationBar from './bar/SearchDestinationBar';
import SearchParkingTable from './table/SearchParkingTable';

import './search.css';

function SearchContainer(props) {
    return (
      <React.Fragment>
          <SearchDepartureBar history={props.history}/>
          <SearchDestinationBar history={props.history}/>
          <SearchParkingTable history={props.history}/>
      </React.Fragment>
    );
}

export default SearchContainer;
