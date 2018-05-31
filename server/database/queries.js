const {connection} = require('./index.js');

// (user login)
// query database to see if username matches password
// returns an array
// if username is not in database
// error 'invalid username
// if username is in database, but pasword is wrong
// error 'invalid password for username'

const checkUserPasswordMatch = (username, password, callback) => {
  let queryString = `SELECT username, password FROM users WHERE username = '${username}'`;
  console.log('username = ', username);
  console.log('password =', password);
  connection.query(queryString, (err, result) => {
    if (result.length === 0) {
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

console.log(checkUserPasswordMatch('makmandy', 'sickPassword', () => {
  console.log('yo');
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


