import React from 'react';
import Login from './Login.jsx';
import {NavLink} from 'react-router-dom'

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
            <div className="navbar-menu">
                <div className="navbar-start">
                <NavLink className = "navbar-link" to = '/'>
                    Home
                </NavLink>
                <div className="navbar-item has-dropdown is-hoverable">
                    <NavLink className="navbar-link" to = '/'>
                    Events
                    </NavLink>
                    <div className="navbar-dropdown is-boxed">
                    <NavLink className="navbar-link" to = '/create'>
                    Create an Event
                    </NavLink>
                    <NavLink className="navbar-link" to = '/user'>
                    Profiles
                    </NavLink>
                    <NavLink className="navbar-link" to = '/event'>
                    Event Page
                    </NavLink>
                    <hr className="navbar-divider"/>
                    <NavLink className="navbar-link" to = '/'>
                    Events
                    </NavLink>
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