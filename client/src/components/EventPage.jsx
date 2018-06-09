import React from 'react';
import axios from 'axios';
import Comments from './Comments.jsx';
import AttendeeList from './AttendeeList.jsx';


class EventPage extends React.Component {
  constructor (props) {
  	super(props);


  	this.state = {
      // id is the identifier for all events upon componentDidMount
      id: this.props.match.params.number,  //React-Router passes in this parameter from the url.
      loggedInUser: {
        id: 2,
        username: 'joe',
      },
      isAttending: false, 
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
  	};

    this.rsvp = this.rsvp.bind(this);
    this.fillEventData = this.fillEventData.bind(this);    
    this.fillCommentsFeed = this.fillCommentsFeed.bind(this);
    this.fillAttendeeFeed = this.fillAttendeeFeed.bind(this);
  }
  rsvp () {
    let current = this.state.isAttending;
    this.setState({
      isAttending: !current,
    })

    axios.post('/events/attendees', {
      eventId: this.state.id, 
      userId: this.state.loggedInUser.id,
      isAttending: this.state.isAttending,
    })
      .then( (response) => {
        console.log('changed rsvp');
        this.fillAttendeeFeed();
      })
      .catch( (err) => {
        console.error(err);
      })
  }

  fillEventData () {
    axios.get(`/event/${this.state.id}`)
        .then((response) => {
          // console.log('Event data', response.data)
          this.setState({
            info: response.data[0],
          }, () => console.log('event info', this.state.info))
        })
        .catch((err) => {
          console.error(err);
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
    .then((response) => {
      this.setState({
        attendees: response.data
      })

      this.state.attendees.forEach( (attendee) => {
        if (this.state.loggedInUser.username === attendee.username) {
          this.setState({
            isAttending: true,
          })
        } 
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
    console.log('props', this.props);
  }

  render () {
    let date = this.state.info.date.slice(0,10);
    return (
      <div>
        <section className="hero is-warning is-bold">
          <div className="hero-body">
            <div className="container">
              <div className="level-left">
                <div className="level-item">
                  <figure className="image is-128x128 is-square">
                    <img src={this.state.info.imgurl}/>
                  </figure>
                </div>
                <div className="level-item">
                  <div>
                    <h1 className="title">
                      {this.state.info.name}
                    </h1><p></p>
                    <h2 className="subtitle">
                    <strong>Hosted by: {this.state.info.host}</strong>
                    <p>{date}, {this.state.info.time}</p>
                    <button id="rsvp" className="button is-link" onClick={(e) => {this.rsvp()}}>
                    {this.state.isAttending ? 'Cancel' : 'RSVP' }
                    </button>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <br/>
          <div className="columns">
            <Comments commentList={this.state.comments}/>
            <AttendeeList attendees={this.state.attendees} id={this.state.id}/>
          </div>
        </section>
      </div>
    )
  }
}

export default EventPage;
