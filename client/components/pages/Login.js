import React , { Component } from 'react';
import { connect } from 'react-redux';
import {  } from 'react-router-dom';
import Validator from 'validator';
import classNames from 'classnames';

import {
  Route,
  Redirect
} from 'react-router-dom'
import { auth } from '../../actions/auth-action';

class Login extends Component {

    constructor(props) {

        super(props);

        this.state = {email:'',password:'',errors:{},globalError:null};

        this.handleInputOnChange = this.handleInputOnChange.bind(this);

    }

    componentDidMount() {

    }

    handleInputOnChange(e) {
        this.setState({[e.target.name]:e.target.value});

    }

    doLogin(e) {

        e.preventDefault();

        this.setState({ globalError: null});

        if(this.validate()) {
            this.props.auth(this.state.email,this.state.password)
                .then((data) => {

                    this.props.history.push('/about')
                })
                .catch((err) => {

                    this.setState({globalError:err.response.data.message})

                })
        }

        
    }


    validate() {

        let errors = {};

        if(Validator.isEmpty(this.state.email)) {
            errors.email = 'Email field required';
        }
        else if(!Validator.isEmail(this.state.email)) {
            errors.email = 'Invalid email';
        }

        if(Validator.isEmpty(this.state.password)) {
            errors.password = 'Password field required';

        }

        this.setState({errors:errors});

        if(Object.keys(errors).length) {
            return false;
        }

        return true;


    }
   

    render() {

        let { errors , globalError } = this.state;
        
        return(
            <div className="container">
                
               <form className="form-signin" onSubmit={this.doLogin.bind(this)}>
                    <h2 className="form-signin-heading">Please sign in </h2>
                     { globalError&& <div className="alert alert-danger">{globalError}</div> }
                    <div className={classNames("form-group",{'has-danger':errors.email}) }>
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="text" name="email" id="inputEmail" value={this.state.email} onChange={this.handleInputOnChange} className="form-control" placeholder="Email address"  autoFocus />
                         { errors.email && <div className="form-control-feedback">{errors.email}</div> }
                    </div>
                    <div className={classNames("form-group",{'has-danger':errors.password}) }>
                         <label htmlFor="inputPassword" className="sr-only">Password</label>
                         <input type="password" name="password" id="inputPassword" value={this.state.password} onChange={this.handleInputOnChange} className="form-control" placeholder="Password"  />
                          { errors.password && <div className="form-control-feedback">{errors.password}</div> }
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