import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ render, path, exact, authorizationStatus }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return authorizationStatus === "AUTH" ? (
          render(routeProps)
        ) : (
          <Redirect to={"/login"} />
        );
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.movies.login,
});

export { PrivateRoute };
export default connect(mapStateToProps)(PrivateRoute);
