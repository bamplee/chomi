import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import './styles/styles.css';

import SearchContainer from './components/search/SearchContainer';
import RouteContainer from './components/route/RouteContainer';
import SummaryContainer from './components/summary/SummaryContainer';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" component={(props) => <SummaryContainer location={props.location}
                                                                              history={props.history}/>}/>
                <Route exact path="/search" component={(props) => <SearchContainer location={props.location}
                                                                                   history={props.history}/>}/>
                <Route exact path="/route" component={(props) => <RouteContainer location={props.location}
                                                                                 history={props.history}/>}/>
            </React.Fragment>
        )
    }
}

export default (App);
