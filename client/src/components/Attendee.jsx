import React from 'react';

// Data needed: commentId, text, timestamp, username, avatar URL
// We will have to add functionality to link to the actual event page.
// We will probably dynamically generate the url based on the name or id.

const Attendee = (props) => (
  <article className="media">
    <figure className="media-left">
      <p className="image is-64x64">
        <img src={props.avatarUrl} />
      </p>
    </figure>
    <div className="media-content">
      <div className="content">
        <p>
        <NavLink to = {`/user/${props.username}`}>
          <strong><a>{props.username}</a></strong>
        </NavLink>
        </p>
      </div>
    </div>
    <div className="media-right">
    </div>
  </article>
)

export default Attendee;