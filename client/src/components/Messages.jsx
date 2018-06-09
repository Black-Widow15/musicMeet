import React from 'react';
import axios from 'axios';

class Messages extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: this.props.username,
      input: '',
      messages: [],
    }

    this.addMessage = this.addMessage.bind(this);
    this.changeText = this.changeText.bind(this);
  }

  changeText(e) {
    e.preventDefault();
    this.setState({
      input: e.target.value
    })
  }

  componentDidMount() {
    axios.get('/users/messages', {
      params: {
        username: this.props.username
      }
    })
    .then(({data}) => {
      this.setState({
        messages: data
      })
    })
  }

  addMessage(text) {
    axios.post('/users/messages', {
        username: this.state.username,
        text: this.state.input
      })
    .then(() => {
      return axios.get('/users/messages', {
        params: {
          username: this.state.username
        }
      })
    })
    .then(({data}) => {
      console.log('data from adding message and then getting messages: ', data);
      this.setState({
        messages: data
      }, () => console.log(this.state.messages))
    })
    .catch(err => {
      console.error('could not post message!');
    })
  }

  render() {
    return (
    <div className="column">
      <div className="notification is-primary has-text-centered">
        Wall of Love
      </div>
      <div className="field">
        <label className="label">Write me a message!</label>
          <div className="control">
            <input className="input" type="text" placeholder="start typing here" onChange={(e) => this.changeText(e)}/>
          </div>
      </div>
      <div className="control">
        <button className="button is-primary" onClick={this.addMessage}>Send</button><br/>
      </div>
      <ul>
        {this.state.messages.map(message => {
          return (
            <li><strong>{message.username}</strong>: {message.text}</li>
          )
        })}
      </ul>
    </div>
    )
  }
}

export default Messages;