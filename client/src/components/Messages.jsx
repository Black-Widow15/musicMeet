import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Messages extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      messages: [],
    }
  }

  componentDidMount() {
    axios.get('/users/messages')
    .then(({data}) => {
      this.setState({
        messages: data
      })
    }
  }

  addMessage(text) {


  }

  render() {
    return (
    <div className="column">
      <div className="notification is-primary has-text-centered">
        my messages
      </div>
        <div className="field">
          <label className="label">write me a message!</label>
          <div className="control">
            <input className="input" type="text" placeholder="start typing here"/>
          </div>
        </div>
        <div className="control">
          <button className="button is-primary">send!</button>
        </div>
        <ul>
        {this.state.messages.map(message => {
          return (
          <li>
          {message}
          </li>
          )
        })}
        </ul>
    </div>
    )
  }
}

export default Messages;