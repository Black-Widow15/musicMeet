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

// TESTS FOR CHECKUSERPASSWORDMATCH
// username not found in database
console.log(checkUserPasswordMatch('josephmartin', 'sickPassword', () => {
  console.log('callback handled in express server');
}));
// username found but incorrect password
console.log(checkUserPasswordMatch('makmandy', 'badpassword', () => {
  console.log('callback handled in express server');
}));
// username and password match
console.log(checkUserPasswordMatch('makmandy', 'sickPassword', () => {
  console.log('callback handled in express server');
}));


// (user sign up)
// values is an object of values to input
// query database to see if username is in users
// query database to see if email address is in users
// if neither are used
// insert into `users` username, password, email address, musician
// 

const saveNewUser = (values, callback) => {
  let queryString = `INSERT INTO users (username,password,email,musician)\
   VALUES ('${values.username}', '${values.password}', \
   '${values.email}', '${values.musician}')`;
    console.log('queryString = ', queryString);
  connection.query(queryString, (err, result) => {
    if (err) {
      console.log('username in use');
      console.error(err);
    } else {
  }
  });
};
  
// TESTS FOR SAVENEWUSER

// user is added
console.log(saveNewUser({username: 'iamnotindatabase', password: 'hackmebro', email: 'mchl@example.com', musician: 0}, () => {
  console.log('callback handled in express server');
}));

// // username in use
console.log(saveNewUser({username: 'mikey', password: 'hackmebro', email: 'mchl@example.com', musician: 0}, () => {
  console.log('callback handled in express server');
}));

// missing required field (like email or pw)
console.log(saveNewUser({username: 'charlie', password: '', email: '', musician: 0}, () => {
  console.log('callback handled in express server');
}));



module.exports = {
  checkUserPasswordMatch: checkUserPasswordMatch,
  saveNewUser: saveNewUser
};