import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute,
  hashHistory, browserHistory } from 'react-router'

class App extends Component {
  render() {
    return(
      <Router history={hashHistory}>
        <Route path="/" component={Container}>
          <IndexRoute component={Login} />
        </Route>
      </Router>
    )
  }
}
export default App
