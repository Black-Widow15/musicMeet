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
        return (
          <div>
          <Comment 
            commentId={comment.id}
            text={comment.message}
            timestamp={comment.timestamp}
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
