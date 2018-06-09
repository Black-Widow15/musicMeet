import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class EventsAttending extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      eventsAttending: []
    }
  }
  componentDidMount() {
    axios.get('/users/attending', {
      params: {
        username: this.props.username
      }
    })
    .then(({data}) => {
      console.log('events attending front: ', data);
      this.setState({
        eventsAttending: data
      }, () => console.log(this.state.eventsAttending))
    })
  }

  render() {
    return(
      <div className="column">
        <div className="notification is-primary has-text-centered">
          Events I am attending
        </div>
        <ul>
          {this.state.eventsAttending.map(event => {
            return (
              <li>
              {event.name}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

};

export default EventsAttending;
