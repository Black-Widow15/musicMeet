const event = require('../database/eventQueries.js')

const saveNewEvent = (req, res) => {
    console.log(req.body)
    event.saveEventDB(req.body, (err, result) => {
        if(err){
            console.log('Event not saved into the database')
        } else {
            res.send('success')
        }
    })
} 

module.exports= {
    saveNewEvent
}