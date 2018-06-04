const db = require('./connection.js')

const saveEventDB = ({
    name, date, time, description, imgurl, id_location, host}, callback) => {
    let queryString = `INSERT INTO events (name, date, time, description, imgurl, id_location, host) 
                       VALUES ('${name}', '${date}', '${time}' , '${description}', '${imgurl}', '${id_location}', ${host})`
    db.connection.query(queryString, (err, result) => {
        if(err) {
            console.log('Could not create event')
        }
        callback(err, result)
    })
} 

const deleteEventDB = (eventId, callback) => {
    let queryString = `DELETE FROM events WHERE id = '${eventId}'`
    db.connection.query(queryString, (err, result) => {
        callback(err,result)
    })
}

const getAllEventsDB = (callback) => {
    let queryString = `SELECT * FROM events ORDER BY date DESC, time DESC`
    db.connection.query(queryString, (err, result) =>{
        callback(err,result)
    })
}

const updateEventDB = ({id, name, date, time, description, imgurl, id_location, host}, callback) => {
    let queryString = `UPDATE events SET name = '${name}', date = '${date}', time = '${time}', description = '${description}', imgurl = '${imgurl}', id_location = '${id_location}', host = '${host}' WHERE id = ${id}`
    db.connection.query(queryString, (err, result) => {
        if(err){
            console.log('Error upating event in DB')
        }
        callback(err, result)
    })
}

module.exports = {
    saveEventDB,
    getAllEventsDB,
    deleteEventDB,
    updateEventDB
}


