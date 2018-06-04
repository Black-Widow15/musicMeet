import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import EventSummary from './EventSummary.jsx';
import EventModal from './EventModal.jsx';


class Events extends React.Component {
  constructor (props) {
  	super(props);

  	this.state = {
  	  eventsPop: [   // Array of event objs from db.
        {
          name: 'party!',
          date: 'July 4',
          time: '11pm',
          imgUrl: 'http://icons.iconarchive.com/icons/iconshow/construction/96/House-icon.png',
          location: 'A house',
          description: 'Come to my party!',
        }
      ], 
  	  eventsNew: [
        {
          name: 'Concert',
          date: 'June 7',
          time: '11pm',
          imgUrl: 'https://pixel.nymag.com/imgs/daily/intelligencer/2013/10/24/madison-square-garden-tour/24-madison-square-garden-tour-10.w710.h473.jpg',
          location: 'Madison Square Garden',
          description: 'Its a huge concert!',
        }
      ], // The events that are coming up next.
  	};

  	// These event objects are quick summaries.
  	// Data needed: name, date, time, imgUrl, location, description

    this.fillEventsFeed = this.fillEventsFeed.bind(this);
    this.launchModal = this.launchModal.bind(this);

  }

  fillEventsFeed () {
  	// Grab data from the database and set the state.
    axios.get('/events') // This may be the wrong route!  It may give us single events only.
        .then( (response) => {
          // this.setState({
          //   eventsPop: response.data.hottest, // place holder code, will need to test extensively
          //   eventsNew: response.data.latest
          // })
        })
        .catch( (err) => {
          console.log(err);
        })
  }

  launchModal (e) {
    // This function will be passed down to the eventSummary
    // components to function as onClick.

    // Grab the element by ID.
    // Change the className to modal is-active.
    // var card = document.getElementById(name);
    console.log('hello');
  }

  componentDidMount() {
  	this.fillEventsFeed();
  }

  // Data needed: name, date, time, imgUrl, location, description
  render () {
  	return (
      <div className="columns">
    		<div className="column">
        {
          this.state.eventsPop.map(function (event){
            return (
            <div> 
              <EventSummary 
                name={event.name} 
                date={event.date} 
                time={event.time}
                imgUrl={event.imgUrl}
                location={event.location}
                description={event.description}
                launchModal={() => this.launchModal(e)}
              /> 
           
              <EventModal
                name={event.name}
              />
            </div>
            )
          })
        }
        </div>
        <div className="column">
        {
          this.state.eventsNew.map(function (event){
            return (
            <div> 
              <EventSummary 
                name={event.name} 
                date={event.date} 
                time={event.time}
                imgUrl={event.imgUrl}
                location={event.location}
                description={event.description}
                launchModal={() => this.launchModal(e)}
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