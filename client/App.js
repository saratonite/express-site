import React,  { Component } from 'react';
import { connect } from 'react-redux';
import Greetings from './components/Greetings';

class App extends Component {
    componentDidMount() {


    }

    render() {
        return(
            <div>
                <Greetings data={this.props.greetings}></Greetings>
            </div>
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