import React from 'react'
import ReactDOM from 'react-dom'
import User from './components/User.jsx'
import axios from 'axios'

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <User/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))