import React ,{ Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { logout } from '../../actions/auth-action'

 class Logout extends Component {

    componentDidMount() {

        this.props.logout();

        <Redirect to="/login"></Redirect>

    }

    render() {
        return (
            <div>
                Logout page
            </div>
        )
    }
}

export default connect(null,{ logout })(Logout)