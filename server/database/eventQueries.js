const db = require('./connection.js');

const saveEventDB = ({
  name, date, time, description, imgurl, address, city, host
}, callback) => {
  const queryString = `INSERT INTO events (name, date, time, description, imgurl, address, city, host) 
                       VALUES ('${name}', '${date}', '${time}' , '${description}', '${imgurl}', '${address}', '${city}', '${host}')`;
  db.connection.query(queryString, (err, result) => {
    if (err) {
      console.log('Could not create event');
    }
    callback(err, result);
  });
};

const deleteEventDB = (eventId, callback) => {
  const queryString = `DELETE FROM events WHERE id = '${eventId}'`;
  db.connection.query(queryString, (err, result) => {
    callback(err, result);
  });
};

const getAllEventsDB = (callback) => {
  const queryString = 'SELECT * FROM events ORDER BY date ASC, time ASC';
  db.connection.query(queryString, (err, result) => {
    callback(err, result);
  });
};

const updateEventDB = ({
    id, name, date, time, description, imgurl, address, city, host 
}, callback) => {
  const queryString = `UPDATE events SET name = '${name}', date = '${date}', time = '${time}', description = '${description}', imgurl = '${imgurl}', address = '${address}', city = '${city}', host = '${host}' WHERE id = ${id}`;
  db.connection.query(queryString, (err, result) => {
    if (err) {
      console.log('Error upating event in DB');
    }
    callback(err, result);
  });
};

const getPopularEventsDB = (callback) => {
  const queryString = `SELECT * FROM events ORDER BY 
                        (SELECT COUNT(id_event) FROM users_events WHERE id_event=events.id) DESC;`;
  db.connection.query(queryString, (err, result) => {
    if (err) {
      console.log('Error getting popular events from database');
    }
    callback(err, result);
  });
};

const getRecentEventsDB = (callback) => {
  const queryString = 'SELECT name, date, time, address, city, description, imgurl, host FROM events ORDER BY DATE DESC';
  db.connection.query(queryString, (err, result) => {
    if (err) {
      console.log('Error getting recent events from database');
    }
    callback(err, result);
  });
};

const getEventAttendeesDB = (eventId, callback) => {
  const queryString = `SELECT username, imgurl FROM users INNER JOIN users_events 
                        WHERE id_event=${eventId} AND users.id=id_user;`;

  db.connection.query(queryString, (err, result) => {
    if (err) {
      console.log('Error getting attendees');
    }
    callback(err, result);
  });
};

const getEventCommentsDB = (eventId, callback) => {
  const queryString = `SELECT event_comments.id, message, timestamp, display_name, imgurl  
                        FROM event_comments INNER JOIN users
                        WHERE id_event=${eventId} AND id_user=users.id;`;
  db.connection.query(queryString, (err, result) => {
    if (err) {
      console.log('Error getting comments');
    }
    callback(err, result);
  });
};

const getSpecificEventDB = (eventId, callback) => {
  const queryString = `SELECT * FROM events WHERE id=${eventId};`;

  db.connection.query(queryString, (err, result) => {
    if (err) {
      console.log('Error getting event data');
    }
    callback(err, result);
  });
};

const addAttendeeDB = (eventId, userId, callback) => {
  const queryString = `INSERT INTO users_events (id_user, id_event) VALUES (${userId}, ${eventId});`

  db.connection.query(queryString, (err, result) => {
    if (err) {
      console.log('Error adding attendee');
    }
    callback(err, result);
  });
}

const removeAttendeeDB = (eventId, userId, callback) => {
  const queryString = `DELETE FROM users_events WHERE id_user=${userId} AND id_event=${eventId};`

  db.connection.query(queryString, (err, result) => {
    if (err) {
      console.log('Error removing attendee');
    }
    callback(err, result);
  });
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
  getSpecificEventDB,
  addAttendeeDB,
  removeAttendeeDB,
};

