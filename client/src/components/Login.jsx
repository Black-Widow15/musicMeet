import React from 'react'
import axios from 'axios'

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            valid: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeLoginModal = this.closeLoginModal.bind(this);
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault()
        axios.post('/login', {
            username: this.state.username,
            password: this.state.password
        })
        .then(response => {
            console.log(response);
            if(response.data) {
                this.props.handleLoggedin(response.data)
                this.setState({
                    valid: !this.state.valid
                },() => {
                    this.closeLoginModal()
                })
            } else {
                this.setState({
                    username: '',
                    password: ''
                })
            }
        })
        .catch(()=> {
            this.setState({
                username:'',
                password: ''
            })
        })  
    }

    closeLoginModal () {
      let modal = document.getElementById('Login');
      modal.classList.remove('is-active');
    }

    render() {
        return (
            <form onSubmit ={this.handleSubmit}>
                <div id="Login" className="modal">        
                <div className="modal-background"></div>
                <div className="modal-content">
                    <div className="box">
                        <div className="field">
                            <label className="label">Username</label>
                            <div className="control">
                                <input name = 'username' className="input" type="text" placeholder="username" value = {this.state.username} onChange = {this.handleChange}/>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Password</label>
                            <div className="control has-icons-left has-icons-right">
                                <input name = 'password' className="input" type="password" placeholder="password" onChange = {this.handleChange}/>
                            </div>
                        </div>
                        
                        <button type = "submit" className="button is-link">Submit</button>
                    </div>
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={() => { this.closeLoginModal(); }}></button>
        
                </div>
            </form>
        )
    }
}
export default Login