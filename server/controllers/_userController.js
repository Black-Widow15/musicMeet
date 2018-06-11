const user = require('../database/userQueries.js');

// should log in be elsewhere than here?

const editUser = (req, res) => {


};

const retrieveUserInfo = (req, res) => {
  user.retrieveUserInfoDB(req.query.username, (err, result) => {
    if (err) {
      console.error('Error getting user info', err);
    } else {
      res.send(result);
    }
  });
};

const addMessage = (req, res) => {
  user.addMessageDB(req.body.text, req.body.username, req.body.sender, (err, result) => {
    if (err) {
      console.error('Unable to add message', err);
    } else {
      res.sendStatus(201);
    }
  });
};

const getMessages = (req, res) => {
  user.getMessagesDB(req.query.username, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Got messages!');
      res.send(result);
    }
  });
};

const getEventsAttending = (req, res) => {
  console.log('getting events attending now');
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
