import React from 'react';
import axios from 'axios';
import EventSummary from './EventSummary.jsx';


class Events extends React.Component {
  constructor (props) {
  	super(props);
  	this.state = {
  	  eventsPop: [   // Array of event objs from db.
        {
          id: 1,
          name: 'party!',
          date: 'July 4',
          time: '11pm',
          imgUrl: 'http://icons.iconarchive.com/icons/iconshow/construction/96/House-icon.png',
          address: '123 some street',
          city: 'Chicago, IL',
          description: 'Come to my party!',
          host: 'Van Halen',
        }
      ], 
  	  eventsNew: [
        {
          id: 2,
          name: 'Concert',
          date: 'June 7',
          time: '11pm',
          imgUrl: 'https://pixel.nymag.com/imgs/daily/intelligencer/2013/10/24/madison-square-garden-tour/24-madison-square-garden-tour-10.w710.h473.jpg',
          address: 'Madison Square Garden',
          city: 'New York, NY',
          description: 'Its a huge concert!',
          host: 'Metallica',
        }
      ], // The events that are coming up next.
  	};
  	// These event objects are quick summaries.
  	// Data needed: name, date, time, imgUrl, location, description
    this.fillEventsFeed = this.fillEventsFeed.bind(this);
  }

  fillEventsFeed () {
  	// Grab data from the database and set the state.
    axios.get('/events')
      .then( (response) => {
        this.setState({
          eventsNew: response.data,
        })
      })
      .catch( (err) => {
        console.log(err);
      })

    axios.get('/events/popular')
      .then( (response) => {
        this.setState({
          eventsPop: response.data,
        })
      })
      .catch( (err) => {
        console.log(err);
      })
  }

  componentDidMount() {
  	this.fillEventsFeed();
  }

  // Data needed: name, date, time, imgUrl, location, description
  render () {
  	return (
      <div className="columns">
    		<div className="column">POPULAR
        {
          this.state.eventsPop.map(function (event){
            event.date = event.date.slice(0, 10);
            return (
            <div> 
              <EventSummary 
                eventId={event.id}
                name={event.name} 
                host={event.host}
                date={event.date} 
                time={event.time}
                imgUrl={event.imgUrl}
                address={event.address}
                city={event.city}
                description={event.description}
              />
            </div>
            )
          })
        }
        </div>
        <div className="column">UPCOMING
        {
          this.state.eventsNew.map(function (event){
          event.date = event.date.slice(0, 10);
            return (
            <div> 
              <EventSummary 
                eventId={event.id}
                name={event.name}
                host={event.host} 
                date={event.date} 
                time={event.time}
                imgUrl={event.imgUrl}
                address={event.address}
                city={event.city}
                description={event.description}
              /> 
            </div>
            )
          })
        }
        </div>
        <div className="column"></div>
      </div>     
  	)
  }
}

export default Events
