import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const background = {
    'backgroundColor': 'white'
}

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
        .then(resp => {
            // do something with boolean
            console.log(resp.data[0])
            if(!!resp.data[0] && !!resp.data[0].username) {
                this.props.handleLoggedin(this.state)
                this.setState({
                    username: '',
                    password: '',
                    valid: !this.state.valid
                },() => {
                    this.closeLoginModal()
                })
                
               
            }
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
                            <label className="label">Name</label>
                            <div className="control">
                                <input name = 'username' className="input" type="text" placeholder="Text input" value = {this.state.username} onChange = {this.handleChange}/>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Username</label>
                            <div className="control has-icons-left has-icons-right">
                                <input name = 'password' className="input" type="text" placeholder="Text input"  onChange = {this.handleChange}/>
                            </div>
                        </div>
                        
                        <button type = "submit" className="button is-link">Submit</button>
                    </div>
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={(e) => {this.closeLoginModal()}}></button>
        
                </div>
            </form>
        )
    }
}
export default Login