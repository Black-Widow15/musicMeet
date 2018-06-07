const express = require('express')
const registerController = require('../server/controllers/_registerController.js')
const eventController = require('../server/controllers/_eventController.js')
const router = express.Router()


router.post('/events', eventController.saveNewEvent)
router.get('/events', eventController.getAllEvents)
router.delete('/events', eventController.deleteEvent)
router.put('/events', eventController.updateEvent)
router.get('/events/popular', eventController.getPopularEvents)
router.get('/events/recent', eventController.getRecentEvents)


router.post('/signup', registerController.signup)
router.post('/login', registerController.login)
module.exports = {
    router
}