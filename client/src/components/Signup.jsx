import React from 'react'
import axios from 'axios'

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
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeSignupModal = this.closeSignupModal.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleSubmit(e){
        e.preventDefault()
        // grab username and password from state and send to user schema    
        axios.post('/signup', this.state)
        .then( () => this.closeSignupModal())
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
                
                    <label className="label">Username</label>
                    <div className="control">
                        <input name = 'name' className="input" type="text" placeholder="Username" value = {this.state.name} onChange = {this.handleChange}/>
                    </div>

                    <label className="label">Display Name</label>
                    <div className="control">
                        <input name = 'display_name' className="input" type="text" placeholder="Display name" value = {this.state.display_name} onChange = {this.handleChange}/>
                    </div>

                    <label className="label">Password</label>
                    <div className="control">
                        <input name = 'password'className="input" type="password" placeholder="Password" value = {this.state.password} onChange = {this.handleChange}/>
                    </div>

                    <label className="label">Profile Picture</label>
                    <div className="control">
                        <input name = 'imgurl' className="input" type="text" placeholder="Paste image URL here" value = {this.state.imgurl} onChange = {this.handleChange}/>
                    </div>

                    <label className="label">E-mail</label>
                    <div className="control">
                        <input name = 'email' className="input" type="text" placeholder="E-mail address" value = {this.state.email} onChange = {this.handleChange}/>
                    </div>

                    <label className="label">Bio</label>
                    <div className="control">
                        <input name = 'bio' className="input" type="text" placeholder="Quick bio" value = {this.state.bio} onChange = {this.handleChange}/>
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