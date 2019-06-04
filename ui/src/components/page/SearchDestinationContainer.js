import React from 'react';

import SearchDestinationBar from "../search/bar/SearchDestinationBar";
import SearchDestinationTable from "../search/table/SearchDestinationTable";

function SearchDestinationContainer(props) {
    return (
        <React.Fragment>
            <SearchDestinationBar history={props.history}/>
            <SearchDestinationTable history={props.history}/>
        </React.Fragment>
    );
}

export default SearchDestinationContainer;
