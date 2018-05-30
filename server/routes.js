const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.send('<h1>Home page</h1>')
})


router.get('/register', (req, res, next) => {
    // respond to register endpoint
    res.send('<h1>Register</h1>')
    next()
})

router.get('/events', (req, res, next) => {
    // respond to events endpoint
    res.send('<h1>Events</h1>')
    next()
})


router.get('/events', (req, res, next) => {
    // respond to events get
    res.send('<h1>Events</h1>')
    next()
})
router.post('/events', (req, res, next) => {
    // respond to events post
    next()
})

router.get('/users', (req, res, next) => {
    // respond to get users
    res.send('<h1>Users</h1>')
    next()
})

router.post('/users', (req, res, next) => {
    // respond to users post
    next()
})

router.get('/', (req, res, next) => {
    res.status(404).send('Error!')
})

module.exports = {
    router
}