import React from 'react';

// Data needed: commentId, text, timestamp, username, avatar URL
// We will have to add functionality to link to the actual event page.
// We will probably dynamically generate the url based on the name or id.

const Comment = (props) => (
  <article className="media">
    <figure className="media-left">
      <p className="image is-64x64">
        {props.commentId}
        <img src={props.avatarUrl} />
      </p>
    </figure>
    <div className="media-content">
      <div className="content">
        <p>
          <strong> {props.username} </strong>
          {props.text}
        </p>
      </div>
    </div>
    <div className="media-right">
      {props.date}, {props.time}
    </div>
  </article>
)

export default Comment;