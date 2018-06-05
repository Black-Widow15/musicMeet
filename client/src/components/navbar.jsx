import React from 'react';
import Login from './Login.jsx';

class NavBar extends React.Component {
    constructor (props) {
        super(props)

        this.launchLoginModal = this.launchLoginModal.bind(this);
        this.closeLoginModal = this.closeLoginModal.bind(this);
    }

    launchLoginModal () {
      let modal = document.getElementById('login');
      modal.classList.add('is-active');
    }

    closeLoginModal () {
      let modal = document.getElementById('login');
      modal.classList.remove('is-active');
    }



    render () {
        return (
        <nav className="navbar is-fixed-top">
            <div className="navbar-brand">
                
            </div>

            <div className="navbar-menu">
                <div className="navbar-start">
                <a className="navbar-item" href="#">
                    Home
                </a>
                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link" href="#">
                    Events
                    </a>
                    <div className="navbar-dropdown is-boxed">
                    <a className="navbar-item" href="#">
                    Create an Event
                    </a>
                    <a className="navbar-item" href="#">
                    Profiles
                    </a>
                    <hr className="navbar-divider"/>
                    <a className="navbar-item" href="#">
                    Location
                    </a>
                    </div>
                </div>
                </div>

                <div className="navbar-end">
                <div className="navbar-item">
                    <div className="field is-grouped">
                    <a className="navbar-item" href="#" onClick={(e) => (this.launchLoginModal())}>
                        Login
                    </a>
                    <a className="navbar-item" href="#">
                        Sign up
                    </a>
                    </div>
                </div>
                </div>
            </div>
            <Login closeLoginModal={this.closeLoginModal} />
            </nav>
        )
    }
}

export default NavBar