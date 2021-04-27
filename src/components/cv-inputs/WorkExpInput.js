import React from 'react'
import WorkExpDisplay from '../cv-display/WorkExpDisplay'

class WorkExpInput extends React.Component {
    constructor() {
        super()

        this.state = {
            jobs: {
                title: '',
                tasks: '',
                date: {
                    from: '',
                    to: ''
                },
                jobsArr: []
            }
        }

    }

    handleTitleInput = (e) => {
        e.preventDefault()
        this.setState({
            jobs: {
                title: e.target.value,
                tasks: this.state.jobs.tasks,
                date: {
                    from: this.state.jobs.date.from,
                    to: this.state.jobs.date.to
                }
            }
        })
    }

    handleTasksInput = (e) => {
        e.preventDefault()
        this.setState({
            jobs: {
                title: this.state.jobs.title,
                tasks: e.target.value,
                date: {
                    from: this.state.jobs.date.from,
                    to: this.state.jobs.date.to
                }
            }
        })
    }

    handleDateFromInput = (e) => {
        e.preventDefault()
        this.setState({
            jobs: {
                title: this.state.jobs.title,
                tasks: this.state.jobs.tasks,
                date: {
                    from: e.target.value,
                    to: this.state.jobs.date.to
                }
            }
        })
    }

    handleDateToInput = (e) => {
        e.preventDefault()
        this.setState({
            jobs: {
                title: this.state.jobs.title,
                tasks: this.state.jobs.tasks,
                date: {
                    from: this.state.jobs.date.from,
                    to: e.target.value
                }
            }
        })
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" id="title" placeholder="Job Title" onChange={this.handleTitleInput} />
                    <input type="text" id="tasks" placeholder="Tasks/Achievements" onChange={this.handleTasksInput} />
                    <input type="text" id="dateFrom" placeholder="Date From" onChange={this.handleDateFromInput} />
                    <input type="text" id="dateTo" placeholder="Date To" onChange={this.handleDateToInput} />
                    <button >Add</button>
                    <button >Delete</button>
                    <button type="submit">Submit</button>
                </form>
                <WorkExpDisplay workInfo={this.state} />
            </div>
        )
    }
}

export default WorkExpInput