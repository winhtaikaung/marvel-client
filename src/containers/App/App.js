import React, { Component } from "react";
import logo from "./logo.svg";

import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import { createStructuredSelector } from "reselect";
import { makeSelectCurrentUser } from "./selectors";
import Login from "../../pages/public/Login";
import NotFoundPage from "../../pages/public/NotFoundPage";
import IndexPage from "../../pages/";
import Register from "../../pages/public/Register";

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
    const { match, currentUser, location,history } = this.props;
    
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
            <Menu
              theme="dark"
              mode="horizontal"
              
              style={{ lineHeight: "64px", float: `right` }}
            >
              <Menu.Item key="1" onClick={()=>{
                history.push("/login")
              }}>Login</Menu.Item>
              <Menu.Item key="2" onClick={()=>{
                history.push("/register")
              }}>Register</Menu.Item>
            </Menu>
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
