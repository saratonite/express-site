import React , { Component } from 'react';

import {
  Link
} from 'react-router-dom'


export default class Navigation extends Component {

    render() {
        return(
            <ul className="nav nav-pills justify-content-end">
                <li className="nav-item" role="presentation"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item" role="presentation"><Link className="nav-link" to="/about">About</Link></li>
                <li className="nav-item" role="presentation"><Link className="nav-link" to="/signup">Signup</Link></li>
                <li className="nav-item" role="presentation"><Link className="nav-link" to="/login">Login</Link></li>
            </ul>
        )
    }
}