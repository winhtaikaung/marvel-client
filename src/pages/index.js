import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import Home from '../containers/Home';
import NotFoundPage from '../pages/public/NotFoundPage';


class IndexPage extends Component {
  state = {
    title: 'Trips'
  };
  render() {
    const { match } = this.props;

    return (
      <div>
        
          <Switch>
            <Route path={`${match.url}/home`} component={Home} />
            <Route path='*' component={NotFoundPage} />
          </Switch>
        
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = createStructuredSelector({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(IndexPage)
);
