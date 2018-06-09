import React from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';

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
    .then(({data = null}) => {
      console.log('events attending front: ', data);
      this.setState({
        eventsAttending: data
      }, () => console.log(this.state.eventsAttending))
    })
  }

  render() {
    //below, the link is a placeholder but would like for the user to be brought to the corresponding EventPage
    return(
      <div className="column">
        <div className="notification is-primary has-text-centered">
          Events I am attending
        </div>
        <ul>
          {this.state.eventsAttending.map(event => {
            return (
              <NavLink to = {`/event/${event.id}`}>
                <li><a>{event.name}</a></li>
              </NavLink>
            )
          })}
        </ul>
      </div>
    )
  }

};

export default EventsAttending;
