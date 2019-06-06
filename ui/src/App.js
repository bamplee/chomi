import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import './styles/styles.css';
import DevTools from 'mobx-react-devtools';

import DetailContainer from "./components/detail/DetailContainer";
import DeparturePlaceContainer from "./components/page/DeparturePlaceContainer";
import DestinationPlaceContainer from "./components/page/DestinationPlaceContainer";
import FromToPlaceInput from "./components/place/fromto/FromToPlaceInput";
import ListContainer from "./components/page/ListContainer";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                {process.env.NODE_ENV === 'development' && <DevTools />}

                <Route exact path="/" component={(props) => <FromToPlaceInput history={props.history}/>}/>
                <Route exact path="/departure/search"
                       component={(props) => <DeparturePlaceContainer history={props.history}/>}/>
                <Route exact path="/destination/search"
                       component={(props) => <DestinationPlaceContainer history={props.history}/>}/>
                <Route exact path="/list" component={(props) => <ListContainer history={props.history}/>}/>
                <Route exact path="/detail" component={(props) => <DetailContainer history={props.history}/>}/>

            </React.Fragment>
        )
    }
}

export default (App);
