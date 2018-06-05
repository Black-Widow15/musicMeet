import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Comments from './Comments.jsx';


class EventPage extends React.Component {
  constructor (props) {
  	super(props);

  	this.state = {
      comments: [], // Array of objects pulled from messages table in db
      attendees: [], // Array of objects pulled from users table in db
      info: {}, // Same data that was in the Event Summary cards.
      isAttending: false, // 
  	};

    // Func bindings, such as:
    // this.closeModal = this.closeModal.bind(this);
  }

  rsvp () {
    // If not yet attending, change isAttending to true.
    // If attending change to false.
  }

  componentDidMount() {
    // function to fill the comments, the attendee list, other info

  }

  render () {
    // Most of the data from the card.
    // An RSVP/Cancel button.

    // At the bottom-left, a list of comments.
    // At the bottom-right, a list of people attending.
  }
}

export default EventPage
