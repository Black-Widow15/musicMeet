import React from 'react'

class CreateEvent extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            date: '',
            time: '12:00',
            ampm: '',
            location: '',
            description: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleName = this.handleName.bind(this)
        this.handleDate  = this.handleDate.bind(this)
        this.handleTime = this.handleTime.bind(this)
        this.handleLocation = this.handleLocation.bind(this)
        this.handleDescription = this.handleDescription.bind(this)
    }
    handleSubmit(e){
        e.preventDefault()
        console.log(this.state)
    }
    handleName (e) {
        this.setState({
            name: e.target.value
        })
    }
    handleDate (e) {
        this.setState({
            date: e.target.value
        })
    }
    handleTime (e) {
        this.setState({
            time: e.target.value
        })
    }
    handleLocation (e) {
        this.setState({
            location: e.target.value
        })
    }
    handleDescription(e) {
        this.setState({
            description: e.target.value
        })
    }
    render () {
        return (
            <form onSubmit = {this.handleSubmit} className = "field">
                <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Name</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <input value = {this.state.name} onChange = {this.handleName} className="input" type="text" placeholder="Name"/>
                    </div>
                
                </div>
                
                </div>

                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">Date</label>
                    </div>
                    <div className="field-body">
                        <div className="field is-expanded">
                            <div className="field has-addons">
                                <input value = {this.state.date} onChange = {this.handleDate}className="input" type="text" placeholder="How can people contact you?"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Time</label>
                </div>
                <div className="field-body">
                    <div className="field is-narrow">
                    <div className="control">
                        <div className="select is-fullwidth">
                        <select value = {this.state.time} onChange ={this.handleTime}>
                            <option value = "12:00">12:00</option>
                            <option value = "1:00">1:00</option>
                            <option value = "2:00">2:00</option>
                            <option value = "3:00">3:00</option>
                            <option value = "4:00">4:00</option>
                            <option value = "5:00">5:00</option>
                            <option value = "6:00">6:00</option>
                            <option value = "7:00">7:00</option>
                            <option value = "8:00">8:00</option>
                            <option value = "9:00">9:00</option>
                            <option value = "10:00">10:00</option>
                            <option value = "11:00">11:00</option>
                        </select>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <div className="field is-horizontal">
                <div className="field-label">
                    <label className="label">AM / PM</label>
                </div>
                <div className="field-body">
                    <div className="field is-narrow">
                    <div className="control">
                        <label className="radio">
                        <input type="radio" name="member"/>
                        AM
                        </label>
                        <label className="radio">
                        <input type="radio" name="member"/>
                        PM
                        </label>
                    </div>
                    </div>
                </div>
                </div>

                <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Location</label>
                </div>
                <div className="field-body">
                    <div className="field">
                    <div className="control">
                        <input className="input" type="text" placeholder="How can people find you?" value = {this.state.location} onChange = {this.handleLocation}/>
                    </div>
                    </div>
                </div>
                </div>

                <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Description</label>
                </div>
                <div className="field-body">
                    <div className="field">
                    <div className="control">
                        <textarea className="textarea" placeholder="What do you want people to know about your event?"></textarea>
                    </div>
                    <div class="control">
                        <button class="button is-link">Submit</button>
                    </div>
                    </div>
                </div>
                </div>
            </form>
        )
    }
}

export default CreateEvent