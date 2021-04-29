import React from 'react'

class GeneralInfo extends React.Component {
    constructor() {
        super()

        this.state = {
            firstName: '',
            secondName: '',
            email: '',
            phone: '',
            location: '',
            isEditable: false,
        }
    }

    handleFirstNameChange = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }

    handleSecondNameChange = (e) => {
        this.setState({
            secondName: e.target.value
        })
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handlePhoneChange = (e) => {
        this.setState({
            phone: e.target.value
        })
    }

    handleLocationChange = (e) => {
        this.setState({
            location: e.target.value
        })
    }

    onSubmitInfo = (e) => {
        e.preventDefault()
        this.setState({ isEditable: !this.state.isEditable })
    }

    onEditInfo = (e) => {
        e.preventDefault()
        this.setState({ isEditable: !this.state.isEditable })

    }

    renderInfo = () => {
        return (
            <div>
                <h2>{this.state.firstName} {this.state.secondName}</h2>
                <hr />
                <h3>{this.state.email} | {this.state.phone} | {this.state.location} </h3>
                <button onClick={this.onEditInfo}>Edit</button>
            </div>
        )
    }

    renderEditInfo = () => {
        return (
            <div>
                <input type="text"
                    id="firstName"
                    placeholder="First Name"
                    value={this.state.firstName}
                    onChange={this.handleFirstNameChange}
                />

                <input type="text"
                    id="secondName"
                    placeholder="Second Name"
                    value={this.state.secondName}
                    onChange={this.handleSecondNameChange}
                />

                <input type="text"
                    id="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                />

                <input type="number"
                    id="phone"
                    placeholder="Phone"
                    value={this.state.phone}
                    onChange={this.handlePhoneChange}
                />

                <input type="text"
                    id="location"
                    placeholder="Location"
                    value={this.state.location}
                    onChange={this.handleLocationChange}
                />
                <button onClick={this.onSubmitInfo}>Submit</button>
            </div>
        )
    }


    render() {
        return (
            this.state.isEditable ? this.renderInfo() : this.renderEditInfo()
        )
    }
}

export default GeneralInfo