import React from "react"

const WorkExpDisplay = (props) => {
    return (
        <div>
            <h2>{props.workInfo.jobs.title}</h2>
            <h3>{props.workInfo.jobs.tasks}</h3>
            <p>{props.workInfo.jobs.date.from}</p>
            <p>{props.workInfo.jobs.date.to}</p>
        </div>
    )
}

export default WorkExpDisplay