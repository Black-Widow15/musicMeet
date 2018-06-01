import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class User extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      image: '',
      displayName: '',
      musician: true,
      upcomingGigs: [],
      bio: '',
      pinnedTrackUrl: '',
      photos: [],
      eventsAttending: []
    }
  }

  render() {
    <div>
      {this.name}
      {this.image}
      {this.displayName}
      {this.bio}

      <ul>
        photos
        {this.photos.map(photo => {
        <li><img class="user-photos" src="{photo}"/></li>
        })}
      </ul>

      <ul>
        events i'm going to
        <EventsAttending events={this.state.eventsAttending}/>
      </ul>

      {this.state.musician ? 
      <ul>
        upcoming gigs
        {this.state.upcomingGigs.map(gig => <UpcomingGigs />
      </ul> : null}}
      
    </div>
  }


}