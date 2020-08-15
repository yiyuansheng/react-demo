import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom'
import App from './App'
import Login from './views/login/index'

class Routers extends Component {
    render() {
        return (
            <Router history={useHistory}>
                <Switch>
                    <Route path="/login" exact component={Login}></Route>
                    <Route path="/" component={App}></Route>
                </Switch>
            </Router>
        )
    }
}

export default Routers