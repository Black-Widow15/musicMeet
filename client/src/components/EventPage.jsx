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
    this.fillEventData = this.fillEventData.bind(this);    
    this.fillCommentsFeed = this.fillCommentsFeed.bind(this);
    this.fillAttendeeFeed = this.fillAttendeeFeed.bind(this);
  }

  rsvp () {
    let current = this.state.isAttending;
    let elem = document.getElementById('rsvp');
    console.log(elem);

    this.setState({
      isAttending: !current,
    })
  }

  fillEventData () {
    axios.get(`/event/${this.state.id}`)
        .then( (response) => {
          // console.log('Event data', response.data)
          this.setState({
            info: response.data[0],
          })
          console.log('event info', this.state.info)
        })
        .catch( (err) => {
          console.log(err);
        })
  }

  fillCommentsFeed () {
    axios.get('/events/comments', {
      params: {
        id: this.state.id,
      }
    })
        .then( (response) => {
          this.setState({
            comments: response.data,
          })
        })
        .catch( (err) => {
          console.log(err);
        })
  }

  fillAttendeeFeed () {
    axios.get('/events/attendees', {
      params: {
        id: this.state.id,
      }
    })
        .then( (response) => {
          this.setState({
            attendees: response.data,
          })
        })
        .catch( (err) => {
          console.log(err);
        })
  }

  componentDidMount () {
    // function to fill the comments, the attendee list, other info
    this.fillEventData();
    this.fillAttendeeFeed();
    this.fillCommentsFeed();
  }

  render () {
    let date = this.state.info.date.slice(0,10);
    return (
      <div className="tile is-ancestor">
        <div className="tile is-vertical">

          <div className="tile is-parent">
            <div className="tile is-6 is-child">
              <img src={this.state.info.imgurl} />
            </div>

            <div className="tile is-child">
              <strong>{this.state.info.name}</strong>
              <br/>
              <strong>Hosted by: {this.state.info.host}</strong>
              <br/><br/><br/>
              {date}, {this.state.info.time}
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
