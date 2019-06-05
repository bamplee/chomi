import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import './styles/styles.css';

import MainContainer from "./components/main/MainContainer";
import ListContainer from "./components/list/ListContainer";
import DetailContainer from "./components/detail/DetailContainer";
import DeparturePlaceContainer from "./components/place/departure/DeparturePlaceContainer";
import DestinationPlaceContainer from "./components/place/destination/DestinationPlaceContainer";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" component={(props) => <MainContainer history={props.history}/>}/>
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
