import React from 'react'
import uniqid from 'uniqid'
import WorkDisplay from './WorkDisplay'

class WorkInfo extends React.Component {
    constructor() {
        super()

        this.state = {
            work: {
                company: "",
                position: "",
                tasks: "",
                dateFrom: "",
                dateTo: "",
                id: uniqid(),
            },
            workArr: [],
        }
    }

    handleCompanyName = (e) => {
        this.setState({
            work: {
                company: e.target.value,
                position: this.state.work.position,
                tasks: this.state.work.tasks,
                dateFrom: this.state.work.dateFrom,
                dateTo: this.state.work.dateTo,
                id: this.state.work.id,
            }
        })
    }

    handlePosition = (e) => {
        this.setState({
            work: {
                company: this.state.work.company,
                position: e.target.value,
                tasks: this.state.work.tasks,
                dateFrom: this.state.work.dateFrom,
                dateTo: this.state.work.dateTo,
                id: this.state.work.id,
            }
        })
    }

    handleTasks = (e) => {
        this.setState({
            work: {
                company: this.state.work.company,
                position: this.state.work.position,
                tasks: e.target.value,
                dateFrom: this.state.work.dateFrom,
                dateTo: this.state.work.dateTo,
                id: this.state.work.id,
            }
        })
    }

    handleDateFrom = (e) => {
        this.setState({
            work: {
                company: this.state.work.company,
                position: this.state.work.position,
                tasks: this.state.work.tasks,
                dateFrom: e.target.value,
                dateTo: this.state.work.dateTo,
                id: this.state.work.id,
            }
        })
    }

    handleDateTo = (e) => {
        this.setState({
            work: {
                company: this.state.work.company,
                position: this.state.work.position,
                tasks: this.state.work.tasks,
                dateFrom: this.state.work.dateFrom,
                dateTo: e.target.value,
                id: this.state.work.id,
            }
        })
    }

    submitWork = (e) => {
        e.preventDefault()
        this.setState({
            workArr: this.state.workArr.concat(this.state.work),
            work: {
                company: "",
                position: "",
                tasks: "",
                dateFrom: "",
                dateTo: "",
                id: uniqid(),
            }
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitWork}>
                    <input type="text" id="company" placeholder="Company Name" value={this.state.work.company} onChange={this.handleCompanyName} />
                    <input type="text" id="postion" placeholder="Job Title" value={this.state.work.position} onChange={this.handlePosition} />
                    <textarea type="text" id="tasks" placeholder="Tasks" value={this.state.work.tasks} onChange={this.handleTasks} />
                    <input type="date" id="dateFrom" placeholder="Date From" value={this.state.work.dateFrom} onChange={this.handleDateFrom} />
                    <input type="date" id="dateTo" placeholder="Date To" value={this.state.work.dateTo} onChange={this.handleDateTo} />
                    <button type="submit">Submit</button>
                </form>
                <WorkDisplay work={this.state} />
            </div>
        )
    }
}

export default WorkInfo