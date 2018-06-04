import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

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

  render() {
    return(
      <div>
        name: {this.name}
        <img src={this.state.image}/>
        {this.displayName}
        quick bio:{this.bio}
      
        {/* <ul>
          photos
          {this.photos.map(photo => {
          <li><img class="user-photos" src="{photo}"/></li>
          })}
        </ul> */}
      
        {/* <ul>
          events i'm going to
          <EventsAttending events={this.state.eventsAttending}/>
        </ul> */}
      
        
      </div>

    )
  }
}


export default User;