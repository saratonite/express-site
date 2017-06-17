console.log('Hello Worldss');
import './index.scss';

import React from 'react';
import { render } from 'react-dom';

import App from './App.js';

var appEl = document.getElementById('app');
if(appEl) {

    render(<App/>,appEl);

}
