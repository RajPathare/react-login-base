import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, isSignedIn: isSignedIn,  ...rest }) => {

  console.log('isSignedIn? ',isSignedIn);

  return (
    <Route
      {...rest}
      render={props =>
        isSignedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default PrivateRoute;