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
  user.addMessageDB(req.body, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(result);
      res.send(201);
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
  user.getEventsAttendingDB(req.params.username, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
};

const getEventsHosting = (req, res) => {
  user.getEventsHostingDB(req.params.username, (err, result) => {
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