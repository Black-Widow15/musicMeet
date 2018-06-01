import React from 'react';


// Properties needed:
// Data needed: name, date, time, imgUrl, location, description
// We will have to add functionality to link to the actual event page.
// We will probably dynamically generate the url based on the name or id.

let EventSummary = (props) => (
<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src={props.imgUrl} alt="Event Image" />
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">{props.name}</p>
        <p class="subtitle is-6">{props.location}</p>
      </div>
    </div>
    <div class="content">
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