import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link, Switch, History} from 'react-router-dom'
import User from './components/User.jsx'
import Events from './components/Events.jsx'
import EventPage from './components/EventPage.jsx'
import NavBar from './components/navbar.jsx'
import CreateEvent from './components/CreateEvent.jsx'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
        }

        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogin(user) {
        console.log('passed in user', user)
        this.setState({
            user: user,
        }, () => {
            console.log('app state', this.state);
        });
    }

    handleLogout() {
        this.setState({
            user: null,
        })
    }

    render() {
        return (
            <Router>
                <div>
                <NavBar handleLogin = {this.handleLogin} handleLogout={this.handleLogout}/>

                <Switch>
                    <Route exact path = '/' component = {Events}/>
                    <Route exact path = '/create' render = {(props) => 
                        <CreateEvent loggedInUser={this.state.user} {...props} />}/>
                    <Route exact path = '/users/:username' render = {(props) =>
                       <User loggedInUser={this.state.user} {...props}  />}/>
                    <Route exact path = '/event/:number' render = {(props) => 
                        <EventPage loggedInUser={this.state.user} {...props} />}/>

                </Switch>
                
                </div>
            </Router>
        )
    }
}

//                     <Route exact path = '/event/:number' component = {EventPage}/>

ReactDOM.render(<App/>, document.getElementById('app'))