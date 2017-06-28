import React , { Component } from 'react';

import {
  Link
} from 'react-router-dom'


export default class Navigation extends Component {

    render() {
        return(
            <ul className="nav nav-pills">
                <li role="presentation"><Link to="/">Home</Link></li>
                <li role="presentation"><Link to="/about">About</Link></li>
                <li role="presentation"><Link to="/signup">Signup</Link></li>
                <li role="presentation"><Link to="/login">Login</Link></li>
            </ul>
        )
    }
}