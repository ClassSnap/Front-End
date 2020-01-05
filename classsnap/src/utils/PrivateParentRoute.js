import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("parentToken") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/parentlogin" />
        )
      }
    />
  );
};

export default PrivateRoute;
