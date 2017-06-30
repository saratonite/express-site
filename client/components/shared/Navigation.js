import React , { Component } from 'react';

import {
  Link
} from 'react-router-dom'


export default class Navigation extends Component {

    render() {
        return(
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                 <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Link to="/" className="navbar-brand">TOOLS</Link>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item" role="presentation"><Link className="nav-link" to="/">Home</Link></li>
                    <li className="nav-item" role="presentation"><Link className="nav-link" to="/about">About</Link></li>
                    <li className="nav-item" role="presentation"><Link className="nav-link" to="/signup">Signup</Link></li>
                    <li className="nav-item" role="presentation"><Link className="nav-link" to="/login">Login</Link></li>
                </ul>

                <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        )
    }
}