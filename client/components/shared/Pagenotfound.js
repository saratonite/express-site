import React , { Component } from 'react';
import { Link } from 'react-router-dom'

export default class  Pagenotfound extends Component {

    render () {
       return(
        <div className="card text-center">
            <div className="card-block">
                <h4 className="card-title"><h1>404</h1> Page Not Found</h4>
                <p className="card-text">OOOPS!!!</p>
                <Link to='/' className="btn btn-primary">Go home</Link>
            </div>
        </div>
       );
    }
}