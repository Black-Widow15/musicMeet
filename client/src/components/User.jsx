import React from 'react';
import axios from 'axios';
import Messages from './Messages.jsx';
import EventsAttending from './EventsAttending.jsx';

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      username: this.props.match.params.username,
      imgurl: '',
      displayName: '',
      musician: 0,
      upcomingGigs: [],
      bio: '',
      photos: [],
      messages: [],
      eventsAttending: [],
      loggedInUser: this.props.loggedInUser
    };
  }

  componentDidMount() {
    axios
      .get('/users/:username', {
        params: {
          username: this.state.username
        }
      })
      .then(({ data }) => {
        if (data.length > 0) {
          this.setState({
            id: data[0].id,
            username: data[0].username,
            imgurl: data[0].imgurl,
            displayName: data[0].display_name,
            musician: data[0].musician,
            bio: data[0].bio
          });
        }
      });
  }

  render() {
    return (
      <div>
        <section className="hero is-warning is-bold">
          <div className="hero-body">
            <div className="container">
              <div className="level-left">
                <div className="level-item">
                  <figure className="image is-128x128 is-square">
                    <img src={this.state.imgurl} />
                  </figure>
                </div>
                <div className="level-item">
                  <div>
                    <h1 className="title">{this.state.displayName}</h1>
                    <p />
                    <h2 className="subtitle">@{this.state.username}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2>
            <strong>About me</strong>
          </h2>
          <p>{this.state.bio}</p>
          <div className="columns">
            <Messages
              username={this.state.username}
              loggedInUser={this.state.loggedInUser}
            />
            <EventsAttending username={this.state.username} />
          </div>
        </section>
      </div>
    );
  }
}

export default User;
