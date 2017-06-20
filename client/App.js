import React,  { Component } from 'react';
import { connect } from 'react-redux';
import Greetings from './components/Greetings';

class App extends Component {
    componentDidMount() {

        console.log(this.props);

    }

    render() {
        return(
            <div>
                <Greetings></Greetings>
            </div>
        )
    }
}
function mapStateToProps(state) {

    return {
        task:state.task
    }
}
export default connect(mapStateToProps)(App);