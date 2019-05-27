import React from 'react';

import SearchDepartureInput from '../search/SearchDepartureInput';
import SearchDestinationInput from '../search/SearchDestinationInput';
import SearchResultTab from '../search/SearchResultTab';

import './SearchPage.css';

function SearchPage(props) {
    return (
      <React.Fragment>
          <SearchDepartureInput history={props.history}/>
          <SearchDestinationInput history={props.history}/>
          <SearchResultTab history={props.history}/>
      </React.Fragment>
    );
}

export default SearchPage;
