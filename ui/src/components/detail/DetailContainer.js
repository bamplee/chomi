import React from 'react';

import DetailBar from "./DetailBar";

import './detail.css';
import DetailTable from "./DetailTable";
import CommonMap from "../common/CommonMap";

function DetailContainer(props) {
    return (
        <React.Fragment>
            <DetailBar history={props.history}/>
            <CommonMap/>
            <DetailTable history={props.history}/>
        </React.Fragment>
    );
}

export default DetailContainer;
