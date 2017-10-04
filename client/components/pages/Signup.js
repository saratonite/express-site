import React , { Component } from 'react';
import { connect } from 'react-redux';
import Validator from 'validator';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Alert , Form, FormGroup, Label, Input, FormFeedback, Button } from 'reactstrap';
import { register } from '../../actions/auth-action';

// TODO: Connect to redux store

 
class Signup extends Component {
    constructor(props) {

        super(props);

        this.state = {email:'',password:'',confirmPassword:'',remember:'', errors:{}, globalError: null, successMessage:null};

        this.handleInputOnChange = this.handleInputOnChange.bind(this);

        this.handleFormSubmit = this.handleFormSubmit.bind(this);

    }

    componentDidMount() {
        
    }

    handleInputOnChange(e) {

        this.setState({[e.target.name]:e.target.value});

    }

    // TODO: Signup request

    handleFormSubmit(e) {

        this.setState({ globalError: null })

        if(this.validate()){

            this.props.register(this.state)
            .then(res => {

                this.setState({successMessage: 'Successfully signuped , please login'});

            })
            .catch(err => {

                console.log(err.response)
                this.setState({ globalError:err.response.data.message })
            })
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

        let { errors , globalError , successMessage }= this.state;

        let { userCreated } = this.props; 

        
        return(
            <div className="container">
              
                    <h2 className="form-signin-heading">Sign up </h2>

                    {
                        globalError && 
                        <Alert color="danger">
                            { globalError }
                        </Alert>
                    }

                    {
                        successMessage && 

                        <Alert color="info">
                           Successfully registered, Please login  <Link to="/login">Login</Link>
                        </Alert>

                        
                    }

                    {
                        !userCreated &&
                         <Form className="form-signin" onSubmit={this.handleFormSubmit}>
                            <FormGroup>
                            <Label htmlFor="inputEmail" className="sr-only">Email address</Label>
                            <Input  name="email" onChange={ this.handleInputOnChange } placeholder="Email" valid={!errors.email} />
                                { errors.email && <FormFeedback>{errors.email}</FormFeedback> }

                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="inputEmail" className="sr-only">Password</Label>
                            <Input type="password"  name="password" onChange={ this.handleInputOnChange } placeholder="Password" valid={!errors.password} />
                                { errors.password && <FormFeedback>{errors.password}</FormFeedback> }

                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="inputEmail" className="sr-only">Confirm Password</Label>
                            <Input type="password"  name="confirmPassword" onChange={ this.handleInputOnChange } placeholder="Retype password" valid={!errors.confirmPassword} />
                                { errors.confirmPassword && <FormFeedback>{errors.confirmPassword}</FormFeedback> }

                        </FormGroup>

                        <Button color="primary" size="lg" block>CREATE</Button>
                     </Form>

                    }
                    
               
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userCreated: state.user.userCreated
    }
}

export default connect(mapStateToProps, { register })(Signup);