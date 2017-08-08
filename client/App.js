import React,  { Component } from 'react';
import { connect } from 'react-redux';
import Greetings from './components/Greetings';
import Navigation from './components/shared/Navigation';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import AuthGaurd from './components/auth/AuthGaurdRoute';

import routes from './routes';


const _routes = routes.map((route,i) => {

    return route.auth ? <AuthGaurd key={i} {...route} /> : <Route key={i} {...route} />;

})


export default class App extends Component {

    componentDidMount() {


    }

    render() {
        return(
            
                <Router>
                    <div> 
                            <Navigation></Navigation>
                            <Switch>
                                { _routes }
                            </Switch>
                    </div>
                </Router>
        )
    }
}