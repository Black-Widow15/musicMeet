const user = require('../database/userQueries.js');

// should log in be elsewhere than here?

const editUser = (req, res) => {


};

const retrieveUserInfo = (req, res) => {
  user.retrieveUserInfoDB(req.body.username, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
};

const addMessage = (req, res) => {
  user.addMessageDB(/*text, username*/, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(result);
      res.send(201);
    }
  });
};

const getMessages = (req, res) => {
  user.getMessagesDB(req.body.username, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(result);
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