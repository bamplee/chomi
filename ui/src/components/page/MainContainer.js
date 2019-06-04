import React from 'react';
import SearchResultBar from "../search/bar/SearchResultBar";
import TimeBar from "../common/TimeBar";

function MainContainer(props) {
    return (
        <React.Fragment>
            <SearchResultBar history={props.history}/>
            <TimeBar/>
        </React.Fragment>
    );
}

export default MainContainer;
