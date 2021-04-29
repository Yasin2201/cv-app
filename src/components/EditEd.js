import React from 'react'
import uniqid from "uniqid"


const EditEd = (props) => {
    return (
        <div>
            {props.education.map((educationItem) => {
                return (
                    <div key={uniqid()}>
                        <h2>{educationItem.school}</h2>
                        <h3>{educationItem.subject}</h3>
                        <p>{educationItem.dateFrom} - {educationItem.dateTo}</p>
                        <button value={educationItem.id} onClick={props.deleteEducation}>Delete</button>
                        <button value={educationItem.id} onClick={props.edit}>Edit</button>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default EditEd