import React  from 'react';
import DepartureSearch from '../search/DepartureSearch';
import DestinationSearch from '../search/DestinationSearch';
import AddressList from '../search/AddressResult';

function SearchPage(props) {
    return (
      <React.Fragment>
          <DepartureSearch history={props.history}/>
          <DestinationSearch history={props.history}/>
          <AddressList history={props.history}/>
      </React.Fragment>
    );
}

export default SearchPage;
