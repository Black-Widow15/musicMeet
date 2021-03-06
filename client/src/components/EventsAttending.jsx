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
    console.log('trying to get events attending (react)');
    axios.get('/users/attending', {
      params: {
        username: this.props.username
      }
    })
    .then(({data}) => {
      console.log('data from eventsAttending request', data);
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
        {this.state.eventsAttending.length === 0 ? <p><strong>{this.props.username}</strong> is not attending any upcoming events.</p> :
        <ul>
          {this.state.eventsAttending.map(event => {
            return (
            <NavLink to = {`/event/${event.id}`}>
              <li><a>{event.name}</a></li>
            </NavLink>
            )
          })}
        </ul>
      }
      </div>
    )
  }

};

export default EventsAttending;
