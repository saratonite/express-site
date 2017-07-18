import React,  { Component } from 'react';
import { connect } from 'react-redux';
import Greetings from './components/Greetings';
import Navigation from './components/shared/Navigation';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import Logout from './components/auth/Logout';

import Pagenotfound from './components/shared/Pagenotfound';


import AuthGaurd from './components/auth/AuthGaurdRoute';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'


export default class App extends Component {

    componentDidMount() {


    }

    render() {
        return(
            
                <Router>
                    <div> 
                            <Navigation></Navigation>
                            <Switch>
                                <Route exact path="/" component={Home} ></Route>
                                <AuthGaurd exact path="/about" component={ About } />
                                <Route exact  path="/signup" component={Signup} ></Route>
                                <Route exact  path="/login" component={Login} ></Route>
                                <AuthGaurd exact  path="/logout" component={ Logout } ></AuthGaurd>
                                <Route component={ Pagenotfound }/>
                            </Switch>
                    </div>
                </Router>
        )
    }
}