import React,  { Component } from 'react';
import { connect } from 'react-redux';
import Greetings from './components/Greetings';
import Navigation from './components/shared/Navigation';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


export default class App extends Component {

    componentDidMount() {


    }

    render() {
        return(
            
                <Router>
                    <div> 
                            <Navigation></Navigation>
                            <Route exact path="/" component={Home} ></Route>
                            <Route exact  path="/about" component={About} ></Route>
                            <Route exact  path="/signup" component={Signup} ></Route>
                            <Route exact  path="/login" component={Login} ></Route>
                    </div>
                </Router>
        )
    }
}