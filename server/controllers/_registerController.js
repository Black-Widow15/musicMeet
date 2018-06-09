const user = require('../database/userQueries.js');


const login = (req, res) => {
  user.checkUserPasswordMatchDB(req.body.username, req.body.password, (err, result) => {
    if (err) {
      console.error('Invalid username and/or password');
    } else {
      res.send(result);
    }
  });
};

const signup = (req, res) => {
  user.saveNewUserDB(req.body, (err) => {
    if (err) {
      console.error('User could not be saved into the database');
    } else {
      res.sendStatus(201);
    }
  });
};

module.exports = {
  login,
  signup,
};
