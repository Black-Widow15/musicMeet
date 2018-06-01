const express = require('express')
const registerController = require('../server/controllers/_registerController.js')
const eventController = require('../server/controllers/_eventController.js')
const router = express.Router()


router.get('/register', registerController.register)

router.get('/events', (req, res, next) => {
    res.send('get events request')
})


router.get('/events', (req, res, next) => {
    // respond to events get
    res.send('<h1>Events</h1>')
    next()
})
router.post('/events', eventController.saveNewEvent)

router.get('/users', (req, res, next) => {
    // respond to get users
    res.send('<h1>Users</h1>')
    next()
})

router.post('/users', (req, res, next) => {
    // respond to users post
    next()
})

module.exports = {
    router
}