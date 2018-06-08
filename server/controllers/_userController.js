const user = require('../database/userQueries.js');

// should log in be elsewhere than here?

const editUser = (req, res) => {


};

const retrieveUserInfo = (req, res) => {
  user.retrieveUserInfoDB(req.query.username, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log('user info: ', result);
      res.send(result);
    }
  });
};

const addMessage = (req, res) => {
  console.log('req.body', req.body);
  user.addMessageDB(req.body.text, req.body.username, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(result);
      res.sendStatus(201);
    }
  });
};

const getMessages = (req, res) => {
  user.getMessagesDB(req.query.username, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log('messages: ', result);
      res.send(result);
    }
  });
};

const getEventsAttending = (req, res) => {
  user.getEventsAttendingDB(req.query.username, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
};
// getEventsHosting below has not been tested except in Postman (it works)
const getEventsHosting = (req, res) => {
  user.getEventsHostingDB(req.query.username, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
};

module.exports = {
  editUser,
  retrieveUserInfo,
  addMessage,
  getMessages,
  getEventsAttending,
  getEventsHosting,
};