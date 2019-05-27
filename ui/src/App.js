import React, {Component} from 'react';
import {Route} from "react-router-dom";
import './styles/styles.css';
import ChomiSearch from "./components/ChomiSearch";
import ChomiRoute from "./components/ChomiRoute";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Route exact path="/search" component={(props) => <ChomiSearch location={props.location}
                                                                               history={props.history}/>}/>
                <Route exact path="/" component={(props) => <ChomiRoute location={props.location}
                                                                        history={props.history}/>}/>
                {/*
                <ChomiSearchResult/>
                <ChomiRouteList/>
                <ChomiSearchHistory/>
*/}
            </React.Fragment>
        )
    }
}

export default (App);
