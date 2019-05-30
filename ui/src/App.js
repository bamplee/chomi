import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import './styles/styles.css';

import RouteContainer from './components/route/RouteContainer';
import SummaryContainer from './components/summary/SummaryContainer';
import PlaceContainer from './components/place/PlaceContainer';
import SearchContainer from './components/search/SearchContainer';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" component={(props) => <SearchContainer location={props.location}
                                                                              history={props.history}/>}/>
                <Route exact path="/summary" component={(props) => <SummaryContainer location={props.location}
                                                                              history={props.history}/>}/>
                <Route exact path="/search" component={(props) => <PlaceContainer location={props.location}
                                                                                   history={props.history}/>}/>
                <Route exact path="/route" component={(props) => <RouteContainer location={props.location}
                                                                                 history={props.history}/>}/>
            </React.Fragment>
        )
    }
}

export default (App);
