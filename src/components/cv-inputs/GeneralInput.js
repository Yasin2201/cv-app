import React from 'react'
import GeneralDisplay from '../cv-display/GeneralDisplay'

class GeneralInput extends React.Component {
    constructor() {
        super()

        this.state = {

            firstName: '',
            secondName: '',
            jobTitle: '',
            email: '',
            phone: '',
            location: '',

        }
    }

    handleFirstNameInput = (e) => {
        e.preventDefault()
        this.setState({

            firstName: e.target.value,
            secondName: this.state.secondName,
            jobTitle: this.state.jobTitle,
            email: this.state.email,
            phone: this.state.phone,
            location: this.state.location,

        })
    }

    handleSecondNameInput = (e) => {
        e.preventDefault()
        this.setState({

            firstName: this.state.firstName,
            secondName: e.target.value,
            jobTitle: this.state.jobTitle,
            email: this.state.email,
            phone: this.state.phone,
            location: this.state.location,

        })
    }

    handleJobTitleInput = (e) => {
        e.preventDefault()
        this.setState({

            firstName: this.state.firstName,
            secondName: this.state.secondName,
            jobTitle: e.target.value,
            email: this.state.email,
            phone: this.state.phone,
            location: this.state.location,

        })
    }

    handleEmailInput = (e) => {
        e.preventDefault()
        this.setState({

            firstName: this.state.firstName,
            secondName: this.state.secondName,
            jobTitle: this.state.jobTitle,
            email: e.target.value,
            phone: this.state.phone,
            location: this.state.location,

        })
    }

    handlePhoneInput = (e) => {
        e.preventDefault()
        this.setState({

            firstName: this.state.firstName,
            secondName: this.state.secondName,
            jobTitle: this.state.jobTitle,
            email: this.state.email,
            phone: e.target.value,
            location: this.state.location,

        })
    }

    handleLocationInput = (e) => {
        e.preventDefault()
        this.setState({

            firstName: this.state.firstName,
            secondName: this.state.secondName,
            jobTitle: this.state.jobTitle,
            email: this.state.email,
            phone: this.state.phone,
            location: e.target.value,

        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({

            firstName: this.state.firstName,
            secondName: this.state.secondName,
            jobTitle: this.state.jobTitle,
            email: this.state.email,
            phone: this.state.phone,
            location: this.state.location,

        })
    }

    render() {
        return (
            <div>
                <h2>General Information</h2>
                <form onSubmit={this.handleSubmit} className="GeneralInfoForm">
                    <input type="text" id="firstName" placeholder="First Name" onChange={this.handleFirstNameInput} />
                    <input type="text" id="secondName" placeholder="Second Name" onChange={this.handleSecondNameInput} />
                    <input type="text" id="jobTitle" placeholder="Job Title" onChange={this.handleJobTitleInput} />
                    <input type="text" id="email" placeholder="Email" onChange={this.handleEmailInput} />
                    <input type="text" id="phone" placeholder="Phone" onChange={this.handlePhoneInput} />
                    <input type="text" id="location" placeholder="Location" onChange={this.handleLocationInput} />
                    <button type="submit">Submit</button>
                </form>
                <GeneralDisplay generalInfo={this.state} />
            </div >
        )
    }
}

export default GeneralInput