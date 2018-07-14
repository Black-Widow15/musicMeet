import React from 'react';
import { NavLink } from 'react-router-dom';

// Properties needed:
// Data needed: name, date, time, imgUrl, location, description
// We will have to add functionality to link to the actual event page.
// We will probably dynamically generate the url based on the name or id.

const EventSummary = props => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img src={props.imgurl} alt="Event Image" width="96" height="96" />
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <NavLink to={`/event/${props.eventId}`}>
            <p className="title is-4">
              {' '}
              <a> {props.name} </a>{' '}
            </p>
          </NavLink>

          <p>Hosted By: {props.host}</p>
          <p className="subtitle is-6">
            {props.address}, {props.city}
          </p>
        </div>
      </div>
      <div className="content">
        {props.description}

        <br />
        <date>{props.date} </date>
        <time>{props.time}</time>
      </div>
    </div>
  </div>
);

export default EventSummary;
