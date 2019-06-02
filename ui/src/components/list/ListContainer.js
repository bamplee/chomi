import React from 'react';

import ListBar from "./ListBar";

import './list.css';
import ListTable from "./ListTable";
import CommonMap from "../common/CommonMap";

function ListContainer(props) {
    return (
        <React.Fragment>
            <ListBar history={props.history}/>
            <CommonMap/>
            <ListTable history={props.history}/>
        </React.Fragment>
    );
}

export default ListContainer;
