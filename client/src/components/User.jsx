import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import EventsAttending from './EventsAttending.jsx'

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'pancake',
      image: 'https://i.pinimg.com/564x/ce/eb/92/ceeb92ff02869506c45878d00f8f651a.jpg',
      displayName: 'Pancake Jr.',
      musician: true,
      upcomingGigs: [],
      bio: 'i love music',
      pinnedTrackUrl: '',
      photos: [],
      eventsAttending: []
    };
  }

  componentDidMount() {
    axios.get('/')
    // get events that the user is going to
    // set this.state.eventsAttending to it
    // 
  }

  render() {
    return(
    <div> 
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
          <img src={this.state.image} alt="Image"/>
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{this.state.displayName}</strong> <small>{this.state.name}</small>
                <br/>
                {this.state.bio}
            </p>
              <EventsAttending attending={this.state.eventsAttending}/>
          </div>
        </div>
      </article>
    </div>
    <EventsAttending/>
    </div>
    )
  }
}


export default User;