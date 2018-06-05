import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Comment from './Comment.jsx';


class Comments extends React.Component {
  constructor (props) {
  	super(props);
    console.log(props);
    // Props will include a array of comment objects.
    // Comment object properties: id, text, timestamp, username, avatarUrl

    // Func bindings, such as:
    // this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {

  }

  render () {
    return (<div>
    {
      this.props.commentList.map( (comment) => {
        return (
          <div>
          <Comment 
            commentId={comment.commentId}
            text={comment.text}
            timestamp={comment.timestamp}
            username={comment.username}
            avatarUrl={comment.avatarUrl}
          />
          </div>
        )
      })
    }
    </div>)
  }
}

export default Comments
