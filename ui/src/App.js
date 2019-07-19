import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import './styles/styles.css';
import DevTools from 'mobx-react-devtools';

import SearchDepartureContainer from "./components/page/SearchDepartureContainer";
import SearchDestinationContainer from "./components/page/SearchDestinationContainer";
import RouteListContainer from "./components/page/RouteListContainer";
import RouteDetail from "./components/route/detail/RouteDetail";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                {process.env.NODE_ENV === 'development' && <DevTools/>}

                {/*
                <Route exact path="/" component={(props) => <FromToPlaceInput history={props.history}/>}/>
*/}
                <Route exact path="/search/departure"
                       component={(props) => <SearchDepartureContainer history={props.history}/>}/>
                <Route exact path="/search/destination"
                       component={(props) => <SearchDestinationContainer history={props.history}/>}/>
                <Route exact path="/" component={(props) => <RouteListContainer history={props.history}/>}/>
                <Route exact path="/detail" component={(props) => <RouteDetail history={props.history}/>}/>
            </React.Fragment>
        )
    }
}

export default (App);
