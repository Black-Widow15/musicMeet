import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

class Comments extends React.Component {
  state = {
    text: '',
    sender: this.props.loggedInUser
  };

  // Props will include a array of comment objects.
  // Comment object properties: id, text, timestamp, username, avatarUrl
  // <div className="field">
  //       <label className="label">Sent by...</label>
  //         <div className="control">
  //           <input className="input" type="text" placeholder="your name here" onChange={(e) => this.setSender(e)}/>
  //         </div>
  //     </div>

  changeText(e) {
    e.preventDefault;
    this.setState({
      text: e.target.value
    });
  }

  setSender(e) {
    e.preventDefault;
    this.setState({
      sender: e.target.value
    });
  }

  postComment() {
    // console.log('posting commment', this.state);
    axios
      .post('/events/comments', {
        eventId: this.props.eventId,
        message: this.state.text,
        sender: this.state.sender
      })
      .then(() => {
        this.props.fillCommentsFeed();
      });
    // .then(()=> {
    //   return axios.get('/events/comments', {
    //     params: {
    //       id: this.props.id
    //     }
    //   })
    // })
  }

  render() {
    return (
      <div className="column">
        <div className="notification is-primary has-text-centered">
          Event Discussion
        </div>
        <div className="field">
          <label className="label">Join the conversation!</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="start typing here!"
              onChange={e => this.changeText(e)}
            />
          </div>
        </div>

        <div className="control">
          <button
            className="button is-primary"
            onClick={e => {
              this.postComment();
            }}
          >
            Send
          </button>
          <br />
        </div>
        <ul>
          {this.props.commentList.map(comment => {
            console.log(comment);
            return (
              <li>
                <NavLink to={`/users/${comment.sender}`}>
                  <strong>{comment.display_name}</strong>
                </NavLink>
                [{comment.timestamp.slice(0, 10)} @{' '}
                {comment.timestamp.slice(12, 16)}]:
                {comment.message}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Comments;
