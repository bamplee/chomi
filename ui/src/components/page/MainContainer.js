import React from 'react';
import SearchInputBar from "../search/bar/SearchInputBar";
import TimeBar from "../common/TimeBar";

function MainContainer(props) {
    return (
        <React.Fragment>
            <SearchInputBar history={props.history}/>
            <TimeBar/>
        </React.Fragment>
    );
}

export default MainContainer;
