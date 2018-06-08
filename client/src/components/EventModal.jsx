import React from 'react';
import EventSummary from './EventSummary.jsx';

// Properties needed:
// Data needed: name, date, time, imgUrl, location, description
// We will have to add functionality to link to the actual event page.
// We will probably dynamically generate the url based on the name or id.

// When we click on the event to launch the modal, the className
// should change to "modal is-active"

const EventModal = (props) => (
  <div id={props.id} className="modal">
    <div className="modal-background"></div>
    <div className="modal-content">
     <div> 
      <EventSummary 
        name={props.name} 
        date={props.date} 
        time={props.time}
        imgUrl={props.imgUrl}
        location={props.location}
        description={props.description}
      />
     </div>
     <button 
       className="modal-close is-large" 
       aria-label="close"
       onClick={(e) => props.closeModal(props.id)}

     ></button>
    </div>
  </div>
)

export default EventModal;