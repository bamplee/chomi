import React from 'react';
import SearchResultBar from "../search/bar/SearchResultBar";
import CommonMap from "../common/CommonMap";
import ListTable from "../list/ListTable";

function ListContainer(props) {
    return (
        <React.Fragment>
            <SearchResultBar history={props.history}/>
            <ListTable history={props.history}/>
        </React.Fragment>
    );
}

export default ListContainer;
