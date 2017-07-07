import React , { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from '../../actions/auth-action';

class Login extends Component {

    constructor(props) {

        super(props);

        this.state = {email:'',password:''};

        this.handleInputOnChange = this.handleInputOnChange.bind(this);

    }

    componentDidMount() {

        console.log(this.props);
    }

    handleInputOnChange(e) {
        this.setState({[e.target.name]:e.target.value});

    }

    doLogin(e) {
        console.log(this.props)
        e.preventDefault();
        console.log(this.state)
        this.props.auth(this.state.email,this.state.password);
        // TODO:  Login request 
    }

    // TODO: Validate login data

    validate() {


    }
   

    render() {
        
        return(
            <div className="container">
               <form className="form-signin" onSubmit={this.doLogin.bind(this)}>
                    <h2 className="form-signin-heading">Please sign in </h2>
                    <div className="form-group">
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="email" name="email" id="inputEmail" value={this.state.email} onChange={this.handleInputOnChange} className="form-control" placeholder="Email address" required autoFocus />
                    </div>
                    <div className="form-group">
                         <label htmlFor="inputPassword" className="sr-only">Password</label>
                         <input type="password" name="password" id="inputPassword" value={this.state.password} onChange={this.handleInputOnChange} className="form-control" placeholder="Password" required />
                    </div>
                   
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                </form>
            </div>
        )
    }
}

function mapPropsToState(state){

  return {
    user:state.user
  }

}



export default connect(mapPropsToState,{auth})(Login)