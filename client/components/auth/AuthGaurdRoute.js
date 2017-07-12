import React from 'react'
import { connect } from 'react-redux';
import {
  Route,
  Redirect,
  withRouter
} from 'react-router-dom'
let AuthGaurdRoute = ({component, ...props}) => {
  if (props.isAuth === true ) {
      return(<Route  { ...props } component={ component } />)
  }
  // If not authenticated redirect to login page
  return (<Redirect to='/login' push={ true } />)

};

function mapPropsToState(state) {

    return {
        isAuth:state.user.auth
    }

}

export default withRouter(connect(mapPropsToState)(AuthGaurdRoute));
