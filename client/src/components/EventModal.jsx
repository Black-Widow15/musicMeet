import React from 'react';


// Properties needed:
// Data needed: name, date, time, imgUrl, location, description
// We will have to add functionality to link to the actual event page.
// We will probably dynamically generate the url based on the name or id.

// When we click on the event to launch the modal, the className
// should change to "modal is-active"

let EventModal = (props) => (
  <div id={props.name} className="modal">
    <div className="modal-background"></div>
    <div className="modal-content">
     <div> 
       Testing testing testing 
       <img src="http://icons.iconarchive.com/icons/iconshow/construction/96/House-icon.png" />
     </div>
    </div>
  </div>
)

export default EventModal;