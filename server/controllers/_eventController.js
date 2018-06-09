const event = require('../database/eventQueries.js');


const saveNewEvent = (req, res) => {
  event.saveEventDB(req.body, (err, result) => {
    if (err) {
      console.log('Event could not be saved into the database');
    } else {
      res.send('success');
    }
  });
};

const getAllEvents = (req, res) => {
  event.getAllEventsDB((err, result) => {
    if (err) {
      console.log('Could not get events');
    } else {
      // console.log('got events', result);
      res.status(200).send(result);
    }
  });
};

const deleteEvent = (req, res) => {
  event.deleteEventDB(req.body.id, (err, result) => {
    if (err) {
      console.error(`Could not delete event ${req.body.id}`);
    }
    res.sendStatus(200);
  });
};

const updateEvent = (req, res) => {
  event.updateEventDB(req.body, (err, result) => {
    if (err) {
      console.error(`Event ${req.body.id} not upated`);
    } else {
      res.send(result);
    }
  });
};

const getPopularEvents = (req, res) => {
  event.getPopularEventsDB((err, result) => {
    if (err) {
      console.error('Could not get list of popular events');
    } else {
      res.send(result);
    }
  });
};

const getRecentEvents = (req, res) => {
  event.getRecentEventsDB((err, result) => {
    if (err) {
      console.error('Could not get list of recent events');
    } else {
      res.send(result);
    }
  });
};

const getAttendeeList = (req, res) => {
  event.getEventAttendeesDB(req.query.id, (err, result) => {
    if (err) {
      console.error('Could not get attendee list');
    } else {
      res.send(result);
    }
  });
};

const getEventComments = (req, res) => {
  event.getEventCommentsDB(req.query.id, (err, result) => {
    if (err) {
      console.error('Could not get event comments');
    } else {
      res.send(result);
    }
  });
};

const postEventComment = (req, res) => {
  event.postEventCommentDB(req.body.message, req.body.sender, (err) => {
    if (err) {
      console.error('Unable to post event comment');
    } else {
      res.send(201);
    }
  });
};

const getSpecificEvent = (req, res) => {
  // console.log('specific event req', req.params);
  event.getSpecificEventDB(req.params.number, (err, result) => {
    if (err) {
      console.error('Could not deliver event data');
    } else {
      res.send(result);
    }
  });
};

const addRemoveAttendee = (req, res) => {
  console.log('adding/removing attendee', req.body);
  if (req.body.isAttending) {
    event.removeAttendeeDB(req.body.eventId, req.body.userId, (err, result) => {
      if (err) {
        console.log('Could not remove attendee');
      } else {
        res.send('Attendee removed');
      }
    });
  } else {
    event.addAttendeeDB(req.body.eventId, req.body.userId, (err, result) => {
      if (err) {
        console.log('Could not add attendee');
      } else {
        res.send('Attendee added');
      }
    });
  }
  // event.addAttendeeDB(req.body);
};

/*
event.saveEventDB(req.body, (err, result) => {
	if (err){
			console.log('Event not saved into the database')
	} else {
			res.send('success')
	}
})
*/

module.exports = {
  saveNewEvent,
  getAllEvents,
  deleteEvent,
  updateEvent,
  getPopularEvents,
  getRecentEvents,
  getAttendeeList,
  getEventComments,
  postEventComment,
  getSpecificEvent,
  addRemoveAttendee,
};
