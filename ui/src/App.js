import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './styles/styles.css';

import SearchContainer from './components/search/SearchContainer';
import RoutePage from './components/pages/RoutePage';
import SummaryContainer from './components/home/SummaryContainer';

class App extends Component {
    render() {
        return (
          <React.Fragment>
              <Route exact path="/" component={(props) => <SummaryContainer location={props.location}
                                                                            history={props.history}/>}/>
              <Route exact path="/search" component={(props) => <SearchContainer location={props.location}
                                                                                 history={props.history}/>}/>
              <Route exact path="/route" component={(props) => <RoutePage location={props.location}
                                                                          history={props.history}/>}/>
          </React.Fragment>
        )
    }
}

export default (App);
