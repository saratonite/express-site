import React , { Component } from 'react';
import { connect } from 'react-redux';
import Validator from 'validator';
import classNames from 'classnames';
import { Alert , Form, FormGroup, Label, Input, FormFeedback, Button } from 'reactstrap';

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
                
               <Form className="form-signin" onSubmit={this.doLogin.bind(this)}>
                    <h2 className="form-signin-heading">Please sign in </h2>
                     { globalError&& <Alert color="danger">{globalError}</Alert>}
                     <FormGroup>
                         <Label>Email</Label>
                         <Input name="email" value={this.state.email} onChange={this.handleInputOnChange} placeholder="Email" valid={!errors.email}/>
                          { errors.email && <FormFeedback>{errors.email}</FormFeedback> }
                     </FormGroup>
                     <FormGroup>
                         <Label>Email</Label>
                         <Input type="password" name="password" value={this.state.password} onChange={this.handleInputOnChange} placeholder="Password" valid={!errors.password}/>
                          { errors.password && <FormFeedback>{errors.password}</FormFeedback> }
                     </FormGroup>

                    <Button color="primary" size="lg" block>LOGIN</Button>
                </Form>
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