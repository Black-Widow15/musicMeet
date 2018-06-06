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
    axios.get('/users/messages', {
      params: {
        username: 'makm'
      }
    })
    .then(({data}) => {
      console.log('data from getting messages: ', data)
      this.setState({
        messages: data
      })
    })
    .then(() => {
      console.log('this.state.messages looks like :', this.state.messages);
    })
  }

  render() {
    return (
    <div className="column">
      <div className="notification is-primary has-text-centered">
        wall of love
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
            <li>{message.username}: {message.text}</li>
          )
        })}
      </ul>
    </div>
    )
  }
}

export default Messages;