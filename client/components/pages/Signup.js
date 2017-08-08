import React , { Component } from 'react';
import { connect } from 'react-redux';
import Validator from 'validator';
import classNames from 'classnames';

import { register } from '../../actions/auth-action';

// TODO: Connect to redux store

 
class Signup extends Component {
    constructor(props) {

        super(props);

        this.state = {email:'',password:'',confirmPassword:'',remember:'', errors:{}};

        this.handleInputOnChange = this.handleInputOnChange.bind(this);

        this.handleFormSubmit = this.handleFormSubmit.bind(this);

    }

    handleInputOnChange(e) {

        this.setState({[e.target.name]:e.target.value});

    }

    // TODO: Signup request

    handleFormSubmit(e) {

        if(this.validate()){

            this.props.register(this.state);
        }

        e.preventDefault();

    }

    //Form validations

    validate() {

        let errors = {};
        if(Validator.isEmpty(this.state.email)) {

             errors.email = "This field required";
        }

        if(!Validator.isEmail(this.state.email) && !errors.email) {

            errors.email = "Please provide a valid email";
        }

        if(Validator.isEmpty(this.state.password)) {

            errors.password = 'Password field required';
        }

        if((Validator.isEmpty(this.state.confirmPassword)|| !Validator.equals(this.state.password,this.state.confirmPassword)) && !errors.password) {

            errors.confirmPassword ='Please confirm your password'

        }
    
        this.setState({errors:errors});

        if( Object.keys(errors).length > 0) {

            return false;
        }

        return true;

    }

    render() {

        let { errors }= this.state;


        
        return(
            <div className="container">
               <form className="form-signin" onSubmit={this.handleFormSubmit}>
                    <h2 className="form-signin-heading">Sign up</h2>
                    <div className={classNames("form-group",{'has-danger':errors.email}) }>
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input   name="email" onChange={ this.handleInputOnChange } id="inputEmail" className="form-control" placeholder="Email address" autoFocus />
                        { errors.email && <div className="form-control-feedback">{errors.email}</div> }

                    </div>
                     <div className={classNames("form-group",{'has-danger':errors.password}) }>
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" name="password" onChange={ this.handleInputOnChange } id="inputPassword" className="form-control" placeholder="Password" />
                         { errors.password && <div className="form-control-feedback">{errors.password}</div> }
                    </div>
                     <div className={classNames("form-group",{'has-danger':errors.confirmPassword}) }>
                        <input type="password" name="confirmPassword" onChange={ this.handleInputOnChange } id="inputPassword" className="form-control" placeholder="Confirm Password" />
                          { errors.confirmPassword && <div className="form-control-feedback">{errors.confirmPassword}</div> }
                    </div>
                    <div className="checkbox">
                    <label>
                        <input type="checkbox" name="remember" onChange={this.handleInputOnChange}  /> I agree
                    </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Start</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps, { register })(Signup);