import React , { Component } from 'react';

export default class Signup extends Component {
    constructor(props) {

        super(props);

        this.state = {email:'',password:'',confirmPassword:'',remember:''};

        this.handleInputOnChange = this.handleInputOnChange.bind(this);

    }

    handleInputOnChange(e) {
        console.log(e)
        this.setState({[e.target.name]:e.target.value});

    }
    render() {
        return(
            <div className="container">
               <form className="form-signin">
                    <h2 className="form-signin-heading">Sign up</h2>
                    <div className="form-group">
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="email"  name="email" onChange={ this.handleInputOnChange } id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                    </div>
                     <div className="form-group">
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" name="password" onChange={ this.handleInputOnChange } id="inputPassword" className="form-control" placeholder="Password" required />
                    </div>
                     <div className="form-group">
                        <input type="password" name="confirmPassword" onChange={ this.handleInputOnChange } id="inputPassword" className="form-control" placeholder="Confirm Password" required />
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