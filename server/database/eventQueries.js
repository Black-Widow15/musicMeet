const db = require('./connection.js');

const saveEventDB = ({
    name, date, time, description, imgurl, address, city, host }, callback) => {
    let queryString = `INSERT INTO events (name, date, time, description, imgurl, address, city, host) 
                       VALUES ('${name}', '${date}', '${time}' , '${description}', '${imgurl}', '${address}', '${city}', '${host}')`;
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
    let queryString = `SELECT * FROM events ORDER BY date ASC, time ASC`
    db.connection.query(queryString, (err, result) =>{
        callback(err,result)
    })
}

const updateEventDB = ({id, name, date, time, description, imgurl, address, city, host }, callback) => {
    let queryString = `UPDATE events SET name = '${name}', date = '${date}', time = '${time}', description = '${description}', imgurl = '${imgurl}', address = '${address}', city = '${city}', host = '${host}' WHERE id = ${id}`
    db.connection.query(queryString, (err, result) => {
        if(err){
            console.log('Error upating event in DB')
        }
        callback(err, result)
    })
}

const getPopularEventsDB = (callback) => {
    let queryString = `SELECT * FROM events ORDER BY 
                        (SELECT COUNT(id_event) FROM users_events WHERE id_event=events.id) DESC;`
    db.connection.query(queryString, (err, result) => {
        if(err) {
            console.log('Error getting popular events from database')
        }
        callback(err, result)
    })
}

const getRecentEventsDB = (callback) => {
    let queryString = `SELECT name, date, time, address, city, description, imgurl, host FROM events ORDER BY DATE DESC`
    db.connection.query(queryString, (err, result) => {
        if(err) {
            console.log('Error getting recent events from database');
        }
        callback(err, result)
    })
}

const getEventAttendeesDB = (eventId, callback) => {
    let queryString = `SELECT username, imgurl FROM users INNER JOIN users_events 
                        WHERE id_event=${eventId} AND users.id=id_user;`

    db.connection.query(queryString, (err, result) => {
        if(err) {
            console.log('Error getting attendees');
        }
        callback(err, result);
    })

}

const getEventCommentsDB = (callback) => {
    
}

module.exports = {
    saveEventDB,
    getAllEventsDB,
    deleteEventDB,
    updateEventDB,
    getPopularEventsDB,
    getRecentEventsDB,
    getEventAttendeesDB,
    getEventCommentsDB,
}


