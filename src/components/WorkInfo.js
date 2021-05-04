import React, { useState } from 'react'
import uniqid from 'uniqid'
import WorkDisplay from './WorkDisplay'

const WorkInfo = () => {
    const [workInfo, setWorkInfo] = useState({
        company: "",
        position: "",
        tasks: "",
        dateFrom: "",
        dateTo: "",
        id: uniqid(),
    });

    const [workArr, setWorkArr] = useState([]);

    const handleCompanyName = (e) => {
        setWorkInfo({
            company: e.target.value,
            position: workInfo.position,
            tasks: workInfo.tasks,
            dateFrom: workInfo.dateFrom,
            dateTo: workInfo.dateTo,
            id: workInfo.id,
        })
    }

    const handlePosition = (e) => {
        setWorkInfo({
            company: workInfo.company,
            position: e.target.value,
            tasks: workInfo.tasks,
            dateFrom: workInfo.dateFrom,
            dateTo: workInfo.dateTo,
            id: workInfo.id,
        })
    }

    const handleTasks = (e) => {
        setWorkInfo({
            company: workInfo.company,
            position: workInfo.position,
            tasks: e.target.value,
            dateFrom: workInfo.dateFrom,
            dateTo: workInfo.dateTo,
            id: workInfo.id,
        })
    }

    const handleDateFrom = (e) => {
        setWorkInfo({
            company: workInfo.company,
            position: workInfo.position,
            tasks: workInfo.tasks,
            dateFrom: e.target.value,
            dateTo: workInfo.dateTo,
            id: workInfo.id,
        })
    }

    const handleDateTo = (e) => {
        setWorkInfo({
            company: workInfo.company,
            position: workInfo.position,
            tasks: workInfo.tasks,
            dateFrom: workInfo.dateFrom,
            dateTo: e.target.value,
            id: workInfo.id,
        })
    }

    const submitWork = (e) => {
        e.preventDefault()
        setWorkInfo({
            company: "",
            position: "",
            tasks: "",
            dateFrom: "",
            dateTo: "",
            id: uniqid(),
        });
        setWorkArr(workArr.concat(workInfo));
    }


    const editWork = (e) => {
        e.preventDefault()

        const foundWork = workArr.find((job) => { return job.id === e.target.value })
        setWorkArr(workArr.filter((job) => { return job.id !== e.target.value }))

        setWorkInfo({
            company: foundWork.company,
            position: foundWork.position,
            tasks: foundWork.tasks,
            dateFrom: foundWork.dateFrom,
            dateTo: foundWork.dateTo,
            id: foundWork.id,
        })
    }

    return (
        <div>
            <form onSubmit={submitWork}>
                <input type="text" id="company" placeholder="Company Name" value={workInfo.company} onChange={handleCompanyName} />
                <input type="text" id="postion" placeholder="Job Title" value={workInfo.position} onChange={handlePosition} />
                <textarea type="text" id="tasks" placeholder="Tasks" value={workInfo.tasks} onChange={handleTasks} />
                <input type="date" id="workDateFrom" placeholder="Date From" value={workInfo.dateFrom} onChange={handleDateFrom} />
                <input type="date" id="workDateTo" placeholder="Date To" value={workInfo.dateTo} onChange={handleDateTo} />
                <button type="submit">Submit</button>
            </form>

            <WorkDisplay
                work={workArr}
                edit={editWork}
            />
        </div>
    )
}

export default WorkInfo