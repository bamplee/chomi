import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './styles/styles.css';

import SearchPage from './components/pages/SearchPage';
import RoutePage from './components/pages/RoutePage';

class App extends Component {
    render() {
        return (
          <React.Fragment>
              <Route exact path="/search" component={(props) => <SearchPage location={props.location}
                                                                            history={props.history}/>}/>
              <Route exact path="/" component={(props) => <RoutePage location={props.location}
                                                                     history={props.history}/>}/>
          </React.Fragment>
        )
    }
}

export default (App);
