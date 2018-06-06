const { connection } = require('./connection.js');

// (user login)
// query database to see if username matches password
// returns an array
// if username is not in database
// error 'invalid username
// if username is in database, but pasword is wrong
// error 'invalid password for username'

const checkUserPasswordMatchDB = (username, password, callback) => {
  const queryString = `SELECT username, password FROM users WHERE username = '${username}'`;
  connection.query(queryString, (err, result) => {
    if (err) {
      console.error('invalid username');
      callback();
    } else if (result.length === 1) {
      console.log(result);
      if (password === result[0].password) {
        console.log('access granted!');
        callback();
      } else {
        console.error('invalid password. try again');
        callback();
      }
    }
  });
};

// TESTS FOR CHECKUSERPASSWORDMATCH
// username not found in database
// console.log(checkUserPasswordMatch('josephmartin', 'sickPassword', () => {
//   console.log('callback handled in express server');
// }));
// // username found but incorrect password
// console.log(checkUserPasswordMatch('makmandy', 'badpassword', () => {
//   console.log('callback handled in express server');
// }));
// // username and password match
// console.log(checkUserPasswordMatch('makmandy', 'sickPassword', () => {
//   console.log('access granted yo');
//   console.log('callback handled in express server');
// }));


// (user sign up)
// values is an object of values to input
// query database to see if username is in users
// query database to see if email address is in users
// if neither are used
// insert into `users` username, password, email address, musician
//

const saveNewUserDB = ({
 username, display_name, password, imgurl, email, bio
 }, callback) => {
  const queryString = `INSERT INTO users (username, display_name, password, imgurl, email, bio) VALUES ('${username}', '${display_name}','${password}', '${imgurl}', '${email}', '${bio}')`;
  console.log(queryString);
  connection.query(queryString, (err, result) => {
    if (err) {
      console.log('username in use');
    } else {
      callback(err, result);
    }
  });
};


// Edit User data:
  // Define the query string.
const editUserDB = (username, values) => {
  // We should pull out the user data first, define an object with all the current properties.
  // I'll use a dummy object for now.
  const dummy = {
    id: 1,
    username: 'BartSimpson',
    display_name: 'Bart Simpson',
    password: 'fido',
    imgUrl: NULL,
    email: 'bart@gmail.com',
    bio: NULL,
    musician: 0,
  };
  // Values object will have those properties which can safely be changed.
  // display_name, password, imgUrl and bio.  Maybe musician.

  for (let key in values) {
    if (values[key] !== NULL) {
      dummy[key] = values[key];
    }
  }

  // Set the query string based on this new object. Submit the query string.
  const queryString =
      `UPDATE users
      SET display_name = '${dummy.display_name}', password = '${dummy.password}', 
      imgUrl = '${dummy.imgUrl}', bio = '${dummy.bio}', musician = '${dummy.musician}'
      WHERE username = '${username}'`;

  connection.query(queryString, (err, result) => {
    if (err) {
      console.log(error);
    } else {
      console.log(result);
    }
  });
};

// Retrieve user data:
const retrieveUserInfoDB = (username, callback) => {
  const queryString = `SELECT * FROM users WHERE username = '${username}'`;

  connection.query(queryString, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(result);
      callback(null, result);
    }
  });
};

const addMessageDB = ({ text, timestamp, username }, callback) => {
  const queryString = `INSERT INTO messages(text, timestamp, username) VALUES('${text}', '${timestamp}', '${username}'`;

  connection.query(queryString, (err, result) => {
    if (err) {
      console.error(err);
      callback(err);
    } else {
      console.log(result);
      callback(null, result);
    }
  });
};


const getMessagesDB = (username, callback) => {
  const querySting = `SELECT messages FROM messages WHERE username = '${username}`;

  connection.query(queryString, (err, result) => {
    if (err) {
      console.error(err);
      callback(err);
    } else {
      console.log(result);
      callback(null, result);
    }
  });
};

const getEventsAttendingDB = (username, callback) => {
  // let queryString = `SELECT events.* FROM events JOIN `;

  // a= select id from user_events join users where username=username
  // b = select id_event from users_events where id_user = a
  // // select IDs of events from users_events table where user is attending
  // select * from events where id = b
  // // get all info about events provided their IDs  where these users are attending

};


const getEventsHostingDB = (username, callback) => {
  const queryString = `SELECT * FROM events WHERE host = ${username}`;

  connection.query(queryString, (err, result) => {
    if (err) {
      console.error(err);
      callback(error);
    } else {
      console.log(result);
      callback(err, result);
    }
  });
};

module.exports = {
  checkUserPasswordMatchDB,
  saveNewUserDB,
  editUserDB,
  retrieveUserInfoDB,
  addMessageDB,
  getMessagesDB,
  getEventsAttendingDB,
  getEventsHostingDB,
};
