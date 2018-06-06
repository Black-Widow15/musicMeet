import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Messages extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      messages: [],
      input: '',
    }

    this.addMessage = this.addMessage.bind(this);
    this.changeText = this.changeText.bind(this);
  }

  changeText(e) {
    console.log(e.target.value);
    e.preventDefault();
    this.setState({
      input: e.target.value
    })
  }

  addMessage(text) {
    console.log('trying to add a message now');
    axios.post('/users/messages', {
        username: 'makm',
        text: this.state.input
      })
    .then(() => {
      axios.get('/users/messages', {
        params: {
          username: 'makm'
        }
      })
    })
    .then(({data}) => {
      this.setState({
        messages: data
      })
    })
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
            <input className="input" type="text" placeholder="start typing here" onChange={(e) => this.changeText(e)}/>
          </div>
      </div>
      <div className="control">
        <button className="button is-primary" onClick={this.addMessage}>send!</button><br/>
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