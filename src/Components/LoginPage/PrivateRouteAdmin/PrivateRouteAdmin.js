import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRouteAdmin = ({ children, ...rest }) => {
  const email = JSON.parse(localStorage.getItem("email"));
  const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));

  return (
    <Route
      {...rest}
      render={({ location }) =>
        email && isAdmin ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

export default PrivateRouteAdmin;