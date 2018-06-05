import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Comments from './Comments.jsx';
import AttendeeList from './AttendeeList.jsx';


class EventPage extends React.Component {
  constructor (props) {
  	super(props);

  	this.state = {
      comments: [
        {
          commentId: 1,
          text: 'this is a comment',
          timestamp: '4:31pm',
          username: 'bonJoviRules',
          avatarUrl: 'https://image.flaticon.com/icons/svg/82/82984.svg',
        }
      ], // Array of objects pulled from messages table in db
      attendees: [
        {
          username: 'howdy',
          avatarUrl: 'https://image.flaticon.com/icons/svg/82/82984.svg',
        }
      ], // Array of objects pulled from users table in db
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
    return (
    // Most of the data from the card.
    // An RSVP/Cancel button.

    // At the bottom-left, a list of comments.
    <div className="columns">
      <div className="column">
        <Comments commentList={this.state.comments}/>
      </div>
      <div className="column"> 
        <AttendeeList attendees={this.state.attendees} />
      </div>
    </div>
    )
  }
  // At the bottom-right, a list of people attending.
}

export default EventPage;
