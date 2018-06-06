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
          imgurl: 'http://icons.iconarchive.com/icons/iconshow/construction/96/House-icon.png',
          location: 'A house',
          description: 'Come to my party!',
          host: 'Van Halen',
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
          host: 'Metallica',
        }
      ], // The events that are coming up next.
  	};

  	// These event objects are quick summaries.
  	// Data needed: name, date, time, imgUrl, location, description

    this.fillEventsFeed = this.fillEventsFeed.bind(this);
    this.launchModal = this.launchModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

  }

  fillEventsFeed () {
  	// Grab data from the database and set the state.
    axios.get('/events')
        .then( (response) => {
          // console.log('response', response.data);
          this.setState({
            eventsPop: response.data,
            eventsNew: response.data,
          })
          console.log(this.state);
        })
        .catch( (err) => {
          console.log(err);
        })
  }

  launchModal (modalId) {
    let modal = document.getElementById(modalId);
    modal.classList.add('is-active');
  }

  closeModal (modalId) {
    let modal = document.getElementById(modalId);
    modal.classList.remove('is-active');
  }

  componentDidMount() {
  	this.fillEventsFeed();
  }

  // Data needed: name, date, time, imgUrl, location, description
  render () {
    let launchModal = this.launchModal;
    let closeModal = this.closeModal;

  	return (
      <div className="columns">
    		<div className="column">
        {
          this.state.eventsPop.map(function (event){
            event.date = event.date.slice(0, 10);
            return (
            <div> 
              <EventSummary 
                name={event.name} 
                host={event.host}
                date={event.date} 
                time={event.time}
                imgUrl={event.imgurl}
                location={event.location}
                description={event.description}
                launchModal={launchModal}
              /> 
           
              <EventModal
                id={event.name}
                closeModal={closeModal}   

                name={event.name}
                host={event.host}  
                date={event.date} 
                time={event.time}
                imgUrl={event.imgurl}
                location={event.location}
                description={event.description}             
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
                host={event.host} 
                date={event.date} 
                time={event.time}
                imgUrl={event.imgurl}
                location={event.location}
                description={event.description}
                launchModal={launchModal}
              /> 
              <EventModal
                id={event.name}
                closeModal={closeModal}   

                name={event.name}
                host={event.host} 
                date={event.date} 
                time={event.time}
                imgUrl={event.imgurl}
                location={event.location}
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
