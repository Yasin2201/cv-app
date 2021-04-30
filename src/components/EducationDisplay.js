import React from 'react'

const EducationDisplay = (props) => {
    return (
        <div>
            {props.education.educationArr.map((edu) => {
                return (
                    <div key={edu.id}>
                        <h2>{edu.school}</h2>
                        <h3>Subject: {edu.subject}</h3>
                        <h3>From: {edu.dateFrom} - To: {edu.dateTo}</h3>
                        <button value={edu.id} onClick={props.edit} >Edit</button>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}

export default EducationDisplay