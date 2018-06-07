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
            // console.log('got events', result);
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

const getPopularEvents = (req, res) => {
    event.getPopularEventsDB((err, result) => {
        if(err) {
            console.log(`Could not get list of popular events`)
        } else {
            res.send(result)
        }
    })
}

const getRecentEvents = (req, res) => {
    event.getRecentEventsDB((err, result) => {
        if(err) {
            console.log(`Could not get list of recent events`)
        } else {
            res.send(result)
        }
    })
}

const getAttendeeList = (req, res) => {
    event.getEventAttendeesDB(req.query.id, (err, result) => {
        if (err) {
            console.log('Could not get attendee list');
        } else {
            res.send(result);
        }
    })
}

const getEventComments = (req, res) => {
    event.getEventCommentsDB(req.query.id, (err, result) => {
        if (err) {
            console.log('Could not get event comments');
        } else {
            res.send(result)
        }
    })
}

const getSpecificEvent = (req, res) => {
    console.log('specific event req', req.params);
    // event.getSpecificEventDB( (err, result) => {
    //     if (err) {
    //         console.log('Could not deliver event data');
    //     } else {
    //         res.send(result);
    //     }
    // })
}





module.exports= {
    saveNewEvent,
    getAllEvents,
    deleteEvent,
    updateEvent,
    getPopularEvents,
    getRecentEvents,
    getAttendeeList,
    getEventComments,
    getSpecificEvent,
}