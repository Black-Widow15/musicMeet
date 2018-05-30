const express = require('express')
const router = express.Router()


router.get('/register', (req, res, next) => {
    // respond to register endpoint
    next()
})

router.get('/events', (req, res, next) => {
    // respond to events endpoint
    next()
})


router.get('/events', (req, res, next) => {
    // respond to events get
    next()
})
router.post('/events', (req, res, next) => {
    // respond to events post
    next()
})

router.get('/users', (req, res, next) => {
    // respond to get users
    next()
})

router.post('/users', (req, res, next) => {
    // respond to users post
    next()
})

router.get('/error', (req, res, next) => {
    res.status(404).send('Error!')
})

module.exports = {
    router
}