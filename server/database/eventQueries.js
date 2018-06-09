const db = require('./connection.js');

const saveEventDB = ({
  name, date, time, description, imgurl, address, city, host
}, callback) => {
  const name1 = name.split('\'').join('') || '';
  const description1 = description.split('\'').join('') || '';
  const imgurl1 = imgurl.split('\'').join('') || '';
  const address1 = address.split('\'').join('') || '';
  const city1 = city.split('\'').join('') || '';
  const host1 = (host === undefined) ? 'unknown' : host.split('\'').join('');

  const queryString = `INSERT INTO events (name, date, time, description, imgurl, address, city, host) 
                       VALUES ('${name1}', '${date}', '${time}' , '${description1}', '${imgurl1}', '${address1}', '${city1}', '${host1}')`;
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
  const name1 = name.split('\'').join('') || '';
  const description1 = description.split('\'').join('') || '';
  const address1 = address.split('\'').join('') || '';
  const city1 = city.split('\'').join('') || '';
  const host1 = host.split('\'').join('') || '';
  const queryString = `UPDATE events SET name = '${name1}', date = '${date}', time = '${time}', description = '${description1}', imgurl = '${imgurl1}', address = '${address1}', city = '${city1}', host = '${host1}' WHERE id = ${id}`;
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

const postEventCommentDB = ({ eventId, message, sender }, callback) => {
  const message1 = message.split('\'').join('') || '';
  const sender1 = sender.split('\'').join('') || '';
  const queryString = `INSERT INTO event_comments(id_event, message, timestamp, sender) VALUES('${eventId}', '${message1}', now(), '${sender1}')`;

  db.connection.query(queryString, (err) => {
    if (err) {
      console.error('Unable to add comment');
    } else {
      callback();
    }
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

module.exports = {
  saveEventDB,
  getAllEventsDB,
  deleteEventDB,
  updateEventDB,
  getPopularEventsDB,
  getRecentEventsDB,
  getEventAttendeesDB,
  getEventCommentsDB,
  postEventCommentDB,
  getSpecificEventDB,
};

