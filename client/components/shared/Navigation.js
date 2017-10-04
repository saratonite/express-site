import React , { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {
  Link
} from 'react-router-dom'

import { connect } from 'react-redux';

class Navigation extends Component {

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
        collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
        collapsed: !this.state.collapsed
        });
    }


    authLinks() {

            return(
                 <Nav navbar>
                        <NavItem>
                            <Link className="nav-link" to="/">HOME</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/about">ABOUT</Link>
                        </NavItem>
                </Nav>
            ) 
    }      

    guestLinks() {
         return(
                 <Nav navbar>
                        <NavItem>
                            <Link className="nav-link" to="/login">LOGIN</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/signup">SIGNUP</Link>
                        </NavItem>
                </Nav>
            ) 
    }

    render() {

        let { isAuth } = this.props;
    
        return(
            <Navbar color="faded" light>
                <NavbarBrand className="mr-auto">TOOLS</NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                <Collapse isOpen={!this.state.collapsed} navbar>

                    { isAuth &&
                        this.authLinks()
                    }


                    {
                        !isAuth &&

                        this.guestLinks()
                    }

                </Collapse>
             </Navbar>
        )
    }
}

function mapPropsToState(state) {

    return {
        isAuth:state.user.auth
    }

}


export default connect(mapPropsToState)(Navigation)
