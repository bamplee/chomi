import React from 'react';

import '../list/list.css';
import FromToPlaceInput from "../place/fromto/FromToPlaceInput";
import RouteList from "../route/RouteList";
import CommonHeader from "../common/CommonHeader";

function ListContainer(props) {
    return (
        <React.Fragment>
            <CommonHeader/>
            <FromToPlaceInput history={props.history}/>
            <RouteList history={props.history}/>
        </React.Fragment>
    );
}

export default ListContainer;
