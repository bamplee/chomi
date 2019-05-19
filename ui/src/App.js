import React from 'react';
import { Component } from 'react';
import './styles/styles.css';
import DestinationInput from './components/common/MapSearch';
import MapCard from './components/common/MapCard';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
          <div>
              <DestinationInput/>
              <MapCard/>
          </div>
        )
    }
}

export default App;
