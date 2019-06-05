import React from 'react';
import ListTable from "../list/ListTable";

function ListContainer(props) {
    return (
        <React.Fragment>
            <ListTable history={props.history}/>
        </React.Fragment>
    );
}

export default ListContainer;
