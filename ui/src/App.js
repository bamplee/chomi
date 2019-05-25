import React, {Component} from 'react';
import './styles/styles.css';
import ChomiSearch from "./components/ChomiSearch";
import {Icon, NavBar} from "antd-mobile";
import ChomiHeader from "./components/ChomiHeader";
import ChomiSearchHistory from "./components/ChomiSearchHistory";
import ChomiSearchResult from "./components/ChomiSearchResult";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ChomiHeader/>
                <ChomiSearch/>
                <ChomiSearchResult/>
                <ChomiSearchHistory/>
            </div>
        )
    }
}

export default App;
