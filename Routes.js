import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App'
import Home from './Home'
import Page from './Page'


class Routes extends Component {
    render() {
        console.log(browserHistory)
        return (
                <Router history={browserHistory}>
                    <Route path='/' component={App}>
                    <IndexRoute component={Home} />
                    <route path='page' component={Page} />
                    </Route>
                </Router>
        )
   }  
}

export default Routes