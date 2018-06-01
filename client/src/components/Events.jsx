import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Events extends React.Component {
  constructor (props) {
  	super(props);

  	this.state = {
  	  eventsPop: [], // Array of event objs from db.
  	  eventsNew: [], // The events that are coming up next.
  	};

  	// These event objects are quick summaries.
  	// Data needed: name, date, time, imgUrl, location, description
  }

  fillFeedPop () {
  	// Grab data from the database and set the state.
    axios.get('/events') // This may be the wrong route!  It may give us single events only.
        .then()
  }

  fillFeedNew () {
  	// same as above.
  }

  componentDidMount() {
  	this.fillFeedPop();
  	this.fillFeedNew();
  }
// Data needed: name, date, time, imgUrl, location, description
  render () {

  	return (
  		<div>
      {
        this.state.eventsPop.map(function (event){
          <div> 
            <EventSummary 
              name={event.name} 
              date={event.date} 
              time={event.time}
              imgUrl={event.imgUrl}
              location={event.location}
              description={event.description}
            /> 
          </div>
        })
      }
  		</div>

      <div>
      {
        this.state.eventsNew.map(function (event){
          <div> 
            <EventSummary 
              name={event.name} 
              date={event.date} 
              time={event.time}
              imgUrl={event.imgUrl}
              location={event.location}
              description={event.description}
            /> 
          </div>
        })
      }
      </div>      
  		)
  }

}