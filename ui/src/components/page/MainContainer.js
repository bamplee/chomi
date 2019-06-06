import React from 'react';
import SearchInputBar from "../search/bar/SearchInputBar";
import RouteListTimeBar from "../route/TimeBar";

function MainContainer(props) {
    return (
        <React.Fragment>
            <SearchInputBar history={props.history}/>
            <RouteListTimeBar/>
        </React.Fragment>
    );
}

export default MainContainer;
