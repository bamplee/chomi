import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import './styles/styles.css';
import ChomiSearch from "./components/ChomiSearch";
import ChomiRoute from "./components/ChomiRoute";
import ChomiHome from "./components/ChomiHome";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = this.initState();
    }

    initState = () => {
        return {
            startPoint: this.defaultStartPoint(),
            endPoint: {}
        }
    };

    defaultStartPoint = () => {
        return {
            distance: 22744.950016794694,
            jibun_address: "경기도 성남시 분당구 정자동 178-1",
            name: "그린팩토리",
            phone_number: "",
            road_address: "경기도 성남시 분당구 불정로 6 그린팩토리",
            sessionId: "dezD72oBOAUY6uUlM0gM",
            x: "127.1054328",
            y: "37.3595963",
        }
    };

    handleStartPoint = (place) => {
        this.setState({startPoint: place});
    };

    handleEndPoint = (place) => {
        this.setState({endPoint: place});
    };

    render() {
        return (
            <Router>
{/*                <Route exact path="/" component={(props) => <ChomiHome location={props.location}
                                                                       history={props.history}
                                                                       startPoint={this.state.startPoint}
                                                                       endPoint={this.state.endPoint}/>}/>*/}
                <Route exact path="/search" component={(props) => <ChomiSearch location={props.location}
                                                                               history={props.history}
                                                                               handleStartPoint={this.handleStartPoint}
                                                                               handleEndPoint={this.handleEndPoint}/>}/>
                <Route exact path="/" component={(props) => <ChomiRoute location={props.location}
                                                                             history={props.history}
                                                                             startPoint={this.state.startPoint}
                                                                             endPoint={this.state.endPoint}/>}/>
                {/*
                <ChomiSearchResult/>
                <ChomiRouteList/>
                <ChomiSearchHistory/>
*/}
            </Router>
        )
    }
}

export default (App);
