const event = require('../database/eventQueries.js')

const saveNewEvent = (req, res) => {
 
    event.saveEventDB(req.body, (err, result) => {
        if(err){
            console.log('Event not saved into the database')
        } else {
            res.send('success')
        }
    })
} 

const getAllEvents = (req, res) => {
    event.getAllEventsDB((err, result) => {
        if(err) {
            console.log('Could not get events')
        } else {
            res.status(200).send(result)
        }
    })
}

const deleteEvent = (req, res) => {
    event.deleteEventDB(req.body.id, (err, result) => {
        if(err) {
            console.log(`Could not delete event ${req.body.id}`)
        }
        res.status(201).end()
    })
}

const updateEvent = (req, res) => {
    event.updateEventDB(req.body, (err,result) => {
        if(err) {
            console.log(`Event ${req.body.id} not upated`)
        } else {
            res.send(result)
        }
    })
}

module.exports= {
    saveNewEvent,
    getAllEvents,
    deleteEvent,
    updateEvent
}