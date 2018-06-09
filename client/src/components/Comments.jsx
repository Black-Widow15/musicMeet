import React from 'react';

class Comments extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {
      text: '',
      sender: '',
    }

    // Props will include a array of comment objects.
    // Comment object properties: id, text, timestamp, username, avatarUrl

    this.changeText = this.changeText.bind(this);
    this.setSender = this.setSender.bind(this);
  }

  changeText(e) {
    e.preventDefault;
    this.setState({
      text: e.target.value
    }, () => console.log(e.target.value));
  }

  setSender(e) {
    e.preventDefault;
    this.setState({
      sender: e.target.value
    }, () => console.log(e.target.value));
  }

  render () {
    return (
      <div className="column">
        <div className="notification is-primary has-text-centered">
          Event Discussion
        </div>
        <div className="field">
          <label className="label">Join the conversation!</label>
            <div className="control">
              <input className="input" type="text" placeholder="start typing here!" onChange={(e) => this.changeText(e)}/>
            </div>
        </div>
        <div className="field">
          <label className="label">Sent by...</label>
            <div className="control">
              <input className="input" type="text" placeholder="your name here" onChange={(e) => this.setSender(e)}/>
            </div>
        </div>
        <div className="control">
          <button className="button is-primary" onClick={this.addMessage}>Send</button><br/>
        </div>
        <ul>
        {this.props.commentList.map((comment) => {
          return (
            <li><strong>{comment.username}</strong> [{comment.timestamp.slice(0,10)} @ {comment.timestamp.slice(12,16)}]: {comment.text}</li>
          )
        })}
        </ul>
      </div>
    )
  }
}
export default Comments
