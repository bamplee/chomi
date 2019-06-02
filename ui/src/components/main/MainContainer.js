import React from 'react';

import MainSearchBar from "./MainSearchBar";

import './main.css';

function MainContainer(props) {
    return (
        <React.Fragment>
            <MainSearchBar history={props.history}/>
        </React.Fragment>
    );
}

export default MainContainer;
