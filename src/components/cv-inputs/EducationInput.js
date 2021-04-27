import React from 'react'
import EducationDisplay from "../cv-display/EducationDisplay"

class EducationInput extends React.Component {
    constructor() {
        super()

        this.state = {
            education: {
                organisation: '',
                subject: '',
                date: {
                    from: '',
                    to: ''
                }
            },
            educationArray: [],
        }
    }

    handleOrganisationInput = (e) => {
        e.preventDefault()
        this.setState({
            education: {
                organisation: e.target.value,
                subject: this.state.education.subject,
                date: {
                    from: this.state.education.date.from,
                    to: this.state.education.date.to
                }
            },
        })
    }

    handleSubjectInput = (e) => {
        e.preventDefault()
        this.setState({
            education: {
                organisation: this.state.education.organisation,
                subject: e.target.value,
                date: {
                    from: this.state.education.date.from,
                    to: this.state.education.date.to
                }
            },
        })
    }

    handleDateFromInput = (e) => {
        e.preventDefault()
        this.setState({
            education: {
                organisation: this.state.education.organisation,
                subject: this.state.education.subject,
                date: {
                    from: e.target.value,
                    to: this.state.education.date.to
                }
            },
        })
    }

    handleDateToInput = (e) => {
        e.preventDefault()
        this.setState({
            education: {
                organisation: this.state.education.organisation,
                subject: this.state.education.subject,
                date: {
                    from: this.state.education.date.from,
                    to: e.target.value
                }
            },
        })
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" id="organisation" placeholder="Organisation Name" onChange={this.handleOrganisationInput} />
                    <input type="text" id="subject" placeholder="Subject" onChange={this.handleSubjectInput} />
                    <input type="text" id="dateFrom" placeholder="Date from" onChange={this.handleDateFromInput} />
                    <input type="text" id="dateTo" placeholder="Date to" onChange={this.handleDateToInput} />
                    <button >Add</button>
                    <button >Delete</button>
                    <button type="submit">Submit</button>
                </form>
                <EducationDisplay educationInfo={this.state} />
            </div>
        )
    }
}

export default EducationInput