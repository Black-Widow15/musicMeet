import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'


const background = {
    'backgroundColor': 'white'
}

class Signup extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            display_name: '',
            password: '',
            imgurl: '',
            email: '',
            bio: '',
            musician: 6
        }

        this.handleName = this.handleName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleDisplayName = this.handleDisplayName.bind(this)
        this.handleProfilePicture = this.handleProfilePicture.bind(this)
        this.handleEmail = this.handleEmail.bind(this);
        this.handleBio = this.handleBio.bind(this);
        

        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeSignupModal = this.closeSignupModal.bind(this);
        
    }

    handleName(e){
        this.setState({
            username: e.target.value,
        })
    }
    handlePassword(e) {
        this.setState({
            password: e.target.value
        })
    }
    handleDisplayName(e){
        this.setState({
            display_name: e.target.value
        })
    }
    handleProfilePicture(e){
        this.setState({
            imgurl: e.target.value
        })
    }
    handleEmail(e){
        this.setState({
            email: e.target.value
        })
    }
    handleBio(e){
        this.setState({
            bio: e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault()
        // grab username and password from state and send to user schema    
        axios.post('/signup', this.state)   
    }
    closeSignupModal () {
      let modal = document.getElementById('Signup');
      modal.classList.remove('is-active');
    }
    render() {
        return (
            <form onSubmit ={this.handleSubmit}>
            <div id="Signup" className="modal">        
            <div className="modal-background"></div>
            <div className="modal-content">
                <div className="box">
                <div className="field">
                
                    <label className="label">Name</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Text input" value = {this.state.name} onChange = {this.handleName}/>
                    </div>

                    <label className="label">Display Name</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Text input" value = {this.state.display_name} onChange = {this.handleDisplayName}/>
                    </div>

                    <label className="label">Password</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Text input" value = {this.state.password} onChange = {this.handlePassword}/>
                    </div>

                    <label className="label">Profile Picture</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Text input" value = {this.state.imgurl} onChange = {this.handleProfilePicture}/>
                    </div>

                    <label className="label">E-mail</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Text input" value = {this.state.email} onChange = {this.handleEmail}/>
                    </div>

                    <label className="label">Bio</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Text input" value = {this.state.bio} onChange = {this.handleBio}/>
                    </div>
                
                    </div>
                    <button className="button is-link">Submit</button>
                </div>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={(e) => {this.closeSignupModal()}}></button>
            </div>
            </form>
        )
    }
}
export default Signup