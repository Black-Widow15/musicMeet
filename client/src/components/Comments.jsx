import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Comment from './Comment.jsx';


class Comments extends React.Component {
  constructor (props) {
  	super(props);
    // Props will include a array of comment objects.
    // Comment object properties: id, text, timestamp, username  

    // Func bindings, such as:
    // this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {

  }

  render () {
    <div>
    {
      props.comments.map( (comment) => {
        return (
          <Comment 
            commentId={comment.id}
            text={comment.text}
            timestamp={comment.timestamp}
            username={comment.username}
          />
        )
      })
    }
    </div>

  }
}

export default EventPage
