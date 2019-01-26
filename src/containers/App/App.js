import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { makeSelectCurrentUser } from "./selectors";
import Login from "../../pages/public/Login";
import NotFoundPage from "../../pages/public/NotFoundPage";
import IndexPage from "../../pages/";
import Register from '../../pages/public/Register';

const RestrictedRoute = ({ component: Component, currentUser, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      currentUser ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: {
              from: props.location
            }
          }}
        />
      )
    }
  />
);

class App extends Component {
  render() {
    const { match, currentUser, location } = this.props;

    let redirection = "/p/dummy";
    let loc = (window.location + "").split("://");
    loc = loc[loc.length - 1];
    loc = loc.split("/")[1] + "";
    if (
      loc.indexOf("dummy") === 0 &&
      !(window.location + "").indexOf("localhost:") >= 0
    ) {
      // not on localhost with /p/ prefix
      redirection = "/dummy" + redirection;
    }

    if (
      location.pathname === "" ||
      location.pathname === "/" ||
      location.pathname === "/p" ||
      location.pathname === "/dummy/"
    ) {
      return <Redirect to={redirection} />;
    } else if (currentUser && location.pathname === "/app/login") {
      return <Redirect to={redirection} />;
    }
    return (
      <div className="App">
        <header className="App-header">
          <Switch>
            <RestrictedRoute
              path={`${match.url}p`}
              currentUser={currentUser}
              component={IndexPage}
            />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            {/* <Route exact path="/signin" component={SignInPage}/>
            <Route exact path="/reset_password" component={ResetPassword}/>
    <Route exact path="/pwd" component={ForgetPassword}/>*/}
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </header>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({});
const mapStateToProps = createStructuredSelector({
  currentUser: makeSelectCurrentUser()
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
