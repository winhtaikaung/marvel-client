import React, { Component } from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'

import { connect } from 'react-redux'

import Home from '../containers/Home'
// import Trips from 'containers/Trips/'
// import Orders from 'containers/Orders/'
// import Create from 'containers/Create/'
// import Profile from 'containers/Profile/'
import NotFoundPage from '../pages/public/NotFoundPage'

const styles = theme => ({
  root: {},
  container: {
    paddingTop: `11vh`,
    overflow: `scroll`,
    height: `100vh`,
    background: `white`,
  },
})
class IndexPage extends Component {
  state = {
    title: 'Trips',
  }
  render() {
    const { match, history } = this.props

    return (
      <div >
        {/* <CustomAppBar title={this.state.title} /> */}
        <div >
          <Switch>
            <Route path={`${match.url}/home`} component={Home} />
            {/* <Route path={`${match.url}/trips`} component={Trips} />
            <Route path={`${match.url}/orders`} component={Orders} />
            <Route path={`${match.url}/profile`} component={Profile} />
            <Route path={`${match.url}/create`} component={Create} /> */}
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </div>
        {/* <BottomTab
          onTabChange={(e, value, tab) => {
            history.push(`${match.url}/${tab[value]['route']}`)
            this.setState({ title: tab[value]['label'] })
          }}
          tabs={[
            {
              route: 'trips',
              icon: <FlightIcon />,
              label: 'Trips',
            },
            {
              route: 'orders',
              icon: <ShoppingCartIcon />,
              label: 'Orders',
            },
            {
              route: 'create',
              icon: <AddBoxIcon />,
              label: 'New',
            },
            {
              route: 'home',
              icon: <HomeIcon />,
              label: 'Home',
            },
            {
              route: 'profile',
              icon: <PersonIcon />,
              label: 'Profile',
            },
          ]}
        /> */}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({})

const mapStateToProps = createStructuredSelector({})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(IndexPage)
)
