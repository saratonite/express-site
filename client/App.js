import React,  { Component } from 'react';
import { connect } from 'react-redux';
import Greetings from './components/Greetings';
import Home from './components/pages/Home';
import About from './components/pages/About';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// FIXME: Fix Router bug

class App extends Component {
    componentDidMount() {


    }

    render() {
        return(
            
                <Router>
                    <div> 
                            <Link to="about">About</Link>
                            <Greetings data={this.props.greetings}></Greetings>
                            <Route extact path="/" component={Home} />
                            <Route  path="/about" component={About} />
                    </div>
                </Router>
        )
    }
}
function mapStateToProps(state) {

    return {
        task:state.task,
        greetings:state.greetings
    }
}
export default connect(mapStateToProps)(App);