import React from 'react'

const WorkDisplay = (props) => {
    return (
        <div>
            {props.work.map((job) => {
                return (
                    <div key={job.id}>
                        <h1>{job.company}</h1>
                        <h2>{job.position}</h2>
                        <span>{job.tasks}</span>
                        <h3>From: {job.dateFrom} - To: {job.dateTo}</h3>
                        <button value={job.id} onClick={props.edit}>Edit</button>
                    </div>
                )
            })}
        </div>
    )
}

export default WorkDisplay