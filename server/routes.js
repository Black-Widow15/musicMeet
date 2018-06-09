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
router.get('/events/:number/attendees', eventController.getAttendeeList);
router.get('/events/:number/comments', eventController.getEventComments);

// Landing page
router.post('/login', registerController.login)
router.post('/signup', registerController.signup);

// User page
router.get('/users/:username', userController.retrieveUserInfo);
router.put('/users/:username/edit', userController.editUser);
router.post('/users/:username/messages', userController.addMessage);
router.get('/users/:username/messages', userController.getMessages);
router.get('/users/:username/attending', userController.getEventsAttending);
router.get('/users/:username/hosting', userController.getEventsHosting);

module.exports = {
  router,
};
