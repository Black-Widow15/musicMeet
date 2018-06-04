import React from 'react'
import ReactDOM from 'react-dom'
import User from './components/User.jsx'
import axios from 'axios'
import Events from './components/Events.jsx'
import Login from './components/Login.jsx'
import NavBar from './components/NavBar.jsx'


class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <NavBar/>
                <User/>
                <Login/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))