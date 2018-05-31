import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        axios.get('/')
    }

    render() {
        return (
            <h1>Home Page</h1>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))