import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Comments from './Comments.jsx';
import AttendeeList from './AttendeeList.jsx';


class EventPage extends React.Component {
  constructor (props) {
  	super(props);

  	this.state = {
      id: 1,
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
      info: {
        name: 'Concert',
        date: 'June 7',
        time: '11pm',
        imgUrl: 'https://pixel.nymag.com/imgs/daily/intelligencer/2013/10/24/madison-square-garden-tour/24-madison-square-garden-tour-10.w710.h473.jpg',
        location: 'Madison Square Garden',
        description: 'Its a huge concert!',
        host: 'Metallica',
      }, // Same data that was in the Event Summary cards.
      isAttending: false, 
  	};

    // Func bindings, such as:
    this.rsvp = this.rsvp.bind(this);
  }

  rsvp () {
    let current = this.state.isAttending;
    let elem = document.getElementById('rsvp');
    console.log(elem);

    this.setState({
      isAttending: !current,
    })
  }

  fillCommentsFeed () {

  }

  fillAttendeeFeed () {
    
  }

  componentDidMount () {
    // function to fill the comments, the attendee list, other info

  }

  render () {
    return (
      <div className="tile is-ancestor">
        <div className="tile is-vertical">

          <div className="tile is-parent">
            <div className="tile is-6 is-child">
              <img src={this.state.info.imgUrl} />
            </div>

            <div className="tile is-child">
              <strong>{this.state.info.name}</strong>
              <br/>
              <strong>Hosted by: {this.state.info.host}</strong>
              <br/><br/><br/>
              {this.state.info.date}, {this.state.info.time}
              <br/>
              <button id="rsvp" onClick={(e) => {this.rsvp()}}>
                {this.state.isAttending ? 'Cancel' : 'RSVP' }
              </button>
            </div>


          </div>

          <div className="tile is-child">
              <div className="columns">
                <div className="column">
                  <Comments commentList={this.state.comments}/>
                </div>
                <div className="column"> 
                  <AttendeeList attendees={this.state.attendees} />
                </div>
              </div>
          </div>

      </div>
    </div>
    )
  }
}

export default EventPage;
