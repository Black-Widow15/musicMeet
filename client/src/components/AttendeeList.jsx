import React from 'react';
import {NavLink} from 'react-router-dom';

class AttendeeList extends React.Component {
  constructor (props) {
  	super(props);
    // Props will include a array of attendee objects.
    // attendee object properties: username, avatarUrl

  }
  render () {
    return (
    
      <div className="column">
      <div className="notification is-primary has-text-centered">
        Users attending
      </div>
      {this.props.attendees.length === 0 ? <p>No one has RSVP'd for this event yet.</p> :
      <ul>
        {this.props.attendees.map(attendee => {
          return (
          <NavLink to = {`/users/${attendee.username}`}>
          <li><a>{attendee.username}</a></li>
          </NavLink>
          )
        })}
      </ul>
    }
    </div>
    )
  }
}

export default AttendeeList;