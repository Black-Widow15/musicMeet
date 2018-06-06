const express = require('express');
const registerController = require('../server/controllers/_registerController.js');
const eventController = require('../server/controllers/_eventController.js');
const userController = require('../server/controllers/userController.js');
const router = express.Router();


router.post('/events', eventController.saveNewEvent);
router.get('/events', eventController.getAllEvents);
router.delete('/events', eventController.deleteEvent);
router.put('/events', eventController.updateEvent);
router.get('/events/popular', eventController.getPopularEvents);
router.get('/events/recent', eventController.getRecentEvents);

router.post('/signup', registerController.signup);

router.get('/users/:username', userController.retrieveUserInfo);
router.put('/users/:username', userController.editUser);
router.post('/users/:username/messages', userController.addMessage);
router.get('/users/:username/messages', userController.getMessages);
router.get('/users/:username/attending', userController.getEventsAttending);
router.get('/users/:username/hosting', eventController.getEventsHosting);

module.exports = {
  router,
};
