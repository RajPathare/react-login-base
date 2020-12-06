import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, isSignedIn: isSignedIn,  ...rest }) => {

  const signedIn = localStorage.getItem('isSignedIn') ? true : false;
  console.log('SIGNED_IN? ',signedIn);

  return (
    <Route
      {...rest}
      render={props =>
        signedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default PrivateRoute;