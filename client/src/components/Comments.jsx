import React from 'react'
import Comment from './Comment.jsx'

class Comments extends React.Component {
  constructor (props) {
  	super(props);
    // Props will include a array of comment objects.
    // Comment object properties: id, text, timestamp, username, avatarUrl

    // Func bindings, such as:
    // this.closeModal = this.closeModal.bind(this);
  }
  render () {
    return (<div>
    {
      this.props.commentList.map( (comment) => {
        let timestamp = comment.timestamp.slice(0, 16);
        let date = comment.timestamp.slice(0, 10);
        let time = comment.timestamp.slice(11, 16);
        return (
          <div>
          <Comment 
            commentId={comment.id}
            text={comment.message}
            date={date}
            time={time}
            timestamp={timestamp}
            username={comment.display_name}
            avatarUrl={comment.imgurl}
          />
          </div>
        )
      })
    }
    </div>)
  }
}

export default Comments
