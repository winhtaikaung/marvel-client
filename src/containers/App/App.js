import React, { Component } from "react";


import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Layout,  } from "antd";
import { createStructuredSelector } from "reselect";
import { makeSelectCurrentUser } from "./selectors";
import Login from "../../pages/public/Login";
import NotFoundPage from "../../pages/public/NotFoundPage";
import IndexPage from "../../pages/";
import Register from "../../pages/public/Register";
import AuthenticatedMenu from "../../components/AuthenticatedMenu";
import {userSignOut} from './actions';

const { Header, Content } = Layout;

const RestrictedRoute = (props) => {
  const { component: Component, currentUser, ...rest } = props
    
    return (<Route  {...rest}  render={props => currentUser ? 
      ( <Component {...props} /> ) : 
      ( <Redirect to={{ pathname: "/login", state: {from: props.location } }} />) 
      }
    />)
  
  
  };

class App extends Component {
  render() {
    const { match, currentUser, location } = this.props;
    
    let redirection = "/p/home";
    let loc = (window.location + "").split("://");
    loc = loc[loc.length - 1];
    loc = loc.split("/")[1] + "";
    if (
      loc.indexOf("home") === 0 &&
      !(window.location + "").indexOf("localhost:") >= 0
    ) {
      // not on localhost with /p/ prefix
      redirection = "/home" + redirection;
    }

    if (
      location.pathname === "" ||
      location.pathname === "/" ||
      location.pathname === "/p" ||
      location.pathname === "/home/"
    ) {
      return <Redirect to={redirection} />;
    } else if ((currentUser && location.pathname.indexOf("login")===1)||(currentUser && location.pathname.indexOf("register")===1)) {
      return <Redirect to={redirection} />;
    }
    return (
      <React.Fragment>
        <Layout>
          <Header>
            <div className="logo" />
            <AuthenticatedMenu {...this.props}/>
          </Header>
          
            <Content>
              <div style={{ minHeight: `100vh` }}>
                <Switch>
                  <RestrictedRoute
                    {...this.props}
                    path={`${match.url}p`}
                    currentUser={currentUser}
                    component={IndexPage}
                  />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                 
                  <Route path="*" component={NotFoundPage} />
                </Switch>
              </div>
            </Content>
          </Layout>
        
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signOut:()=>dispatch(userSignOut())
});
const mapStateToProps = createStructuredSelector({
  currentUser: makeSelectCurrentUser()
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
