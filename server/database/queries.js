const {connection} = require('./index.js');

// (user login)
// query database to see if username matches password
// returns an array
// if username is not in database
// error 'invalid username
// if username is in database, but pasword is wrong
// error 'invalid password for username'

const checkUserPasswordMatch = (username, password, callback) => {
  let queryString = 'SELECT * FROM users username = ' + connection.escape(username);
  connection.query(queryString, (err, result) => {
    console.log(result);
    if (err) console.error('invalid username');
    let queryString2 = 'SELECT username FROM users WHERE username = ' + connection.escape(username) + ' and password = ' + password;
    connection.query(queryString2, (err, result) => {
       if (err) console.error('invalid password, try again');
       callback();
    });
  });
};

console.log(checkUserPasswordMatch('hello', 'hello', () => {
  console.log('result =', result);
}));
// (user sign up)
// values is an object of values to input
// query database to see if username is in users
// query database to see if email address is in users
// if neither are used
// insert into `users` username, password, email address, musician
// 
// const addUserToDB = (values, callback) => {
//   let queryString = `SELECT username FROM users WHERE username=${values.username}`;
//   connection.query(queryString, (err, result) => {
//     if ()
//   }
// }


