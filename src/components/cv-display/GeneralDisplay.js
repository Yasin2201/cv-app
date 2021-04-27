import React from 'react'

const GeneralDisplay = (props) => {
    // console.log(props) // remove

    return (
        <div className="generalInfoOutput">
            <h2> {props.generalInfo.firstName} {props.generalInfo.secondName}</h2>
            <h3>{props.generalInfo.jobTitle}</h3>
            <p>{props.generalInfo.email}</p>
            <p>{props.generalInfo.phone}</p>
            <p>{props.generalInfo.location}</p>
        </div >
    )
}

export default GeneralDisplay