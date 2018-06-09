const express = require('express');
const registerController = require('../server/controllers/_registerController.js');
const eventController = require('../server/controllers/_eventController.js');
const userController = require('../server/controllers/_userController.js');

const router = express.Router();

// CRUD for events
router.post('/events', eventController.saveNewEvent);
router.get('/events', eventController.getAllEvents);
router.delete('/events', eventController.deleteEvent);
router.put('/events', eventController.updateEvent);
// Home
router.get('/events/popular', eventController.getPopularEvents);
router.get('/events/recent', eventController.getRecentEvents);

// Event page
router.get('/event/:number', eventController.getSpecificEvent);
router.get('/events/attendees', eventController.getAttendeeList);
router.post('/events/attendees', eventController.addRemoveAttendee);
router.get('/events/comments', eventController.getEventComments);
router.post('/events/comments', eventController.postEventComment); // working on controller

// Landing page
router.post('/login', registerController.login);
router.post('/signup', registerController.signup);

// User page
router.get('/users', userController.retrieveUserInfo);
router.put('/users/edit', userController.editUser);
router.post('/users/messages', userController.addMessage);
router.get('/users/messages', userController.getMessages);
router.get('/users/attending', userController.getEventsAttending);
router.post('/users/attending', userController.getEventsAttending);
router.get('/users/hosting', userController.getEventsHosting);

module.exports = {
  router,
};

