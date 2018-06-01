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

module.exports = {
    saveEventDB
}


