import React from 'react';
import EventModal from './EventModal.jsx';


// Properties needed:
// Data needed: name, date, time, imgUrl, location, description
// We will have to add functionality to link to the actual event page.
// We will probably dynamically generate the url based on the name or id.




let EventSummary = (props) => (
  <div className="card" onClick={(e) => props.launchModal(props.name)}>
    <div className="card-image">
      <figure className="image is-4by3">
        <img src={props.imgUrl} alt="Event Image" width="96" height="96" />
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-4">{props.name}</p>
          <p className="subtitle is-6">{props.location}</p>
        </div>
      </div>
      <div className="content">
        {props.description}
        <a href="#">#css</a> <a href="#">#responsive</a>
        <br></br>
        <date>{props.date} </date>
        <time >{props.time}</time>
      </div>
    </div>
  </div>  
)

export default EventSummary;