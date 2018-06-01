import React from 'react'
import ReactDOM from 'react-dom'
// import TextField from './components/navbar.jsx'
import axios from 'axios'
import Events from './components/Events.jsx'

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Events />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))