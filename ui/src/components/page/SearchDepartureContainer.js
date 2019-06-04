import React from 'react';

import SearchDepartureBar from "../search/bar/SearchDepartureBar";
import SearchDepartureTable from "../search/table/SearchDepartureTable";

function SearchDepartureContainer(props) {
    return (
        <React.Fragment>
            <SearchDepartureBar history={props.history}/>
            <SearchDepartureTable history={props.history}/>
        </React.Fragment>
    );
}

export default SearchDepartureContainer;
