import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import stores from './stores'
import {Provider} from 'mobx-react';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
    <Provider {...stores}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
