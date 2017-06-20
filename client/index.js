console.log('Hello Worldss');
import './index.scss';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App.js';

var appEl = document.getElementById('app');
if(appEl) {

    render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,appEl);

}
