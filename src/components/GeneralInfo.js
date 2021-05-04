import { useState } from "react"
import React from 'react'

// class GeneralInfo extends React.Component {
//     constructor() {
//         super()

//         this.state = {
//             firstName: '',
//             secondName: '',
//             email: '',
//             phone: '',
//             location: '',
//             isEditable: false,
//         }
//     }

//     handleFirstNameChange = (e) => {
//         this.setState({
//             firstName: e.target.value
//         })
//     }

//     handleSecondNameChange = (e) => {
//         this.setState({
//             secondName: e.target.value
//         })
//     }

//     handleEmailChange = (e) => {
//         this.setState({
//             email: e.target.value
//         })
//     }

//     handlePhoneChange = (e) => {
//         this.setState({
//             phone: e.target.value
//         })
//     }

//     handleLocationChange = (e) => {
//         this.setState({
//             location: e.target.value
//         })
//     }

//     onUpdateInfo = (e) => {
//         e.preventDefault()
//         this.setState({ isEditable: !this.state.isEditable })
//     }

//     renderInfo = () => {
//         return (
//             <div>
//                 <h1>{this.state.firstName} {this.state.secondName}</h1>
//                 <hr />
//                 <h3>{this.state.email} | {this.state.phone} | {this.state.location} </h3>
//                 <button onClick={this.onUpdateInfo}>Edit</button>
//             </div>
//         )
//     }

//     renderEditInfo = () => {
//         return (
//             <div>
//                 <input type="text"
//                     id="firstName"
//                     placeholder="First Name"
//                     value={this.state.firstName}
//                     onChange={this.handleFirstNameChange}
//                 />

//                 <input type="text"
//                     id="secondName"
//                     placeholder="Second Name"
//                     value={this.state.secondName}
//                     onChange={this.handleSecondNameChange}
//                 />

//                 <input type="text"
//                     id="email"
//                     placeholder="Email"
//                     value={this.state.email}
//                     onChange={this.handleEmailChange}
//                 />

//                 <input type="number"
//                     id="phone"
//                     placeholder="Phone"
//                     value={this.state.phone}
//                     onChange={this.handlePhoneChange}
//                 />

//                 <input type="text"
//                     id="location"
//                     placeholder="Location"
//                     value={this.state.location}
//                     onChange={this.handleLocationChange}
//                 />
//                 <button onClick={this.onUpdateInfo}>Submit</button>
//             </div>
//         )
//     }


//     render() {
//         return (
//             this.state.isEditable ? this.renderInfo() : this.renderEditInfo()
//         )
//     }
// }

const GeneralInfo = props => {
    const [info, setInfo] = useState({
        firstName: '',
        secondName: '',
        email: '',
        phone: '',
        location: '',
        isEditable: false,
    })

    const handleFirstNameChange = (e) => {
        setInfo({
            ...info, firstName: e.target.value
        })
    }

    const handleSecondNameChange = (e) => {
        setInfo({
            ...info, secondName: e.target.value
        })
    }

    const handleEmailChange = (e) => {
        setInfo({
            ...info, email: e.target.value
        })
    }

    const handlePhoneChange = (e) => {
        setInfo({
            ...info, phone: e.target.value
        })
    }

    const handleLocationChange = (e) => {
        setInfo({
            ...info, location: e.target.value
        })
    }

    const onUpdateInfo = (e) => {
        e.preventDefault()
        setInfo({ ...info, isEditable: !info.isEditable })
        console.log(info)
    }

    const renderInfo = () => {
        return (
            <div>
                <h1>{info.firstName} {info.secondName}</h1>
                <hr />
                <h3>{info.email} | {info.phone} | {info.location} </h3>
                <button onClick={onUpdateInfo}>Edit</button>
            </div>
        )
    }

    const renderEditInfo = () => {
        return (
            <div>
                <input type="text"
                    id="firstName"
                    placeholder="First Name"
                    value={info.firstName}
                    onChange={handleFirstNameChange}
                />
                <input type="text"
                    id="secondName"
                    placeholder="Second Name"
                    value={info.secondName}
                    onChange={handleSecondNameChange}
                />

                <input type="text"
                    id="email"
                    placeholder="Email"
                    value={info.email}
                    onChange={handleEmailChange}
                />

                <input type="number"
                    id="phone"
                    placeholder="Phone"
                    value={info.phone}
                    onChange={handlePhoneChange}
                />

                <input type="text"
                    id="location"
                    placeholder="Location"
                    value={info.location}
                    onChange={handleLocationChange}
                />
                <button onClick={onUpdateInfo}>Submit</button>
            </div>
        )
    }

    return (
        <div>
            {info.isEditable ? renderInfo() : renderEditInfo()}
        </div>
    )
}

export default GeneralInfo