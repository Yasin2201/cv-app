import React from 'react'

const WorkDisplay = (props) => {
    return (
        <div>
            {props.work.workArr.map((job) => {
                return (
                    <div key={job.id}>
                        <h1>{job.company}</h1>
                        <h2>{job.position}</h2>
                        <span>{job.tasks}</span>
                        <h3>From: {job.dateFrom} - To: {job.dateTo}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default WorkDisplay