console.log('Hello Worldss');
import './index.scss';

import React from 'react';
import { render } from 'react-dom';

var appEl = document.getElementById('app');
if(appEl) {

    render(<p>Welcome to react app</p>,appEl);

}
