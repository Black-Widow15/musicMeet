import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Events from './Events.jsx'

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
        username: 'makm' // MICHAEL: please change this when you do routing
      }
    })
    .then(({data}) => {
      console.log('events attending front: ', data);
      this.setState({
        eventsAttending: data
      })
    })
    .then(() => {
      console.log(this.state.eventsAttending);
    })
  }

  render() {
    return(
      <div className="column">
        <div className="notification is-primary has-text-centered">
          events i am attending
        </div>
        <ul>
          {this.state.eventsAttending.map(event => {
            return (
            <a  href="#"><li>{event.name}</li></a>
            )
          })}
        </ul>
      </div>
    )
  }

};

export default EventsAttending;