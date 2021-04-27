import React from 'react'

const EducationDisplay = (props) => {
    // console.log(props) // remove
    return (
        <div>
            <h2>{props.educationInfo.education.organisation}</h2>
            <h3>{props.educationInfo.education.subject}</h3>
            <p>{props.educationInfo.education.date.from}</p>
            <p>{props.educationInfo.education.date.to}</p>
        </div>
    )
}

export default EducationDisplay