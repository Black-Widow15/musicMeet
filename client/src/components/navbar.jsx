import React from 'react'

class NavBar extends React.Component {
    constructor (props) {
        super(props)
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
                    <a className="navbar-item" href="#">
                        Login
                    </a>
                    <a className="navbar-item" href="#">
                        Sign up
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </nav>
        )
    }
}

export default NavBar