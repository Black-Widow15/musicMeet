import React from 'react'
import ReactDOM from 'react-dom'

import {BrowserRouter as Router, Route, Link, Switch, History} from 'react-router-dom'
import User from './components/User.jsx'
import axios from 'axios'
import Events from './components/Events.jsx'
import Login from './components/Login.jsx'
import NavBar from './components/NavBar.jsx'
import CreateEvent from './components/CreateEvent.jsx'

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Router>
                <div>
                <NavBar/>
                <Switch>
                    <Route exact path = '/' component = {Events}/>
                    <Route exact path = '/create' component = {CreateEvent}/>
                    <Route exact path = '/user' component = {User}/>
                </Switch>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))