import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Messages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    };
  }
}

export default Messages;

// maybe better as functional stateless?