import React from 'react'
import uniqid from "uniqid"
import EducationDisplay from './EducationDisplay'


class EducationInfo extends React.Component {
    constructor() {
        super()

        this.state = {
            education: {
                school: "",
                subject: "",
                dateTo: "",
                dateFrom: "",
                id: uniqid(),
            },
            educationArr: [],
        }
    }

    handleSchoolName = (e) => {
        e.preventDefault()
        this.setState({
            education:
            {
                school: e.target.value,
                subject: this.state.education.subject,
                dateFrom: this.state.education.dateFrom,
                dateTo: this.state.education.dateTo,
                id: this.state.education.id,
            }
        })
    }

    handleSubjName = (e) => {
        e.preventDefault()
        this.setState({
            education:
            {
                school: this.state.education.school,
                subject: e.target.value,
                dateFrom: this.state.education.dateFrom,
                dateTo: this.state.education.dateTo,
                id: this.state.education.id,
            }
        })
    }

    handleDateFrom = (e) => {
        e.preventDefault()
        this.setState({
            education:
            {
                school: this.state.education.school,
                subject: this.state.education.subject,
                dateFrom: e.target.value,
                dateTo: this.state.education.dateTo,
                id: this.state.education.id,
            }
        })
    }

    handleDateTo = (e) => {
        e.preventDefault()
        this.setState({
            education:
            {
                school: this.state.education.school,
                subject: this.state.education.subject,
                dateFrom: this.state.education.dateFrom,
                dateTo: e.target.value,
                id: this.state.education.id,
            }
        })
    }

    submitEducation = (e) => {
        e.preventDefault()
        this.setState({
            educationArr: this.state.educationArr.concat(this.state.education),
            education: {
                school: "",
                subject: "",
                dateTo: "",
                dateFrom: "",
                id: uniqid(),
            }
        })
    }

    editEducation = (e) => {
        e.preventDefault()
        const foundEducation = this.state.educationArr.find((edu) => { return edu.id === e.target.value })

        this.setState({ educationArr: this.state.educationArr.filter((edu) => { return edu.id !== e.target.value }) })

        this.setState({
            education:
            {
                school: foundEducation.school,
                subject: foundEducation.subject,
                dateFrom: foundEducation.dateFrom,
                dateTo: foundEducation.dateTo,
                id: foundEducation.id,
            }
        })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <form onSubmit={this.submitEducation}>
                    <input type="text" id="school" placeholder="School/University" value={this.state.education.school} onChange={this.handleSchoolName} />
                    <input type="text" id="subject" placeholder="Subject" value={this.state.education.subject} onChange={this.handleSubjName} />
                    <input type="date" id="eduDateFrom" value={this.state.education.dateFrom} onChange={this.handleDateFrom} />
                    <input type="date" id="eduDateTo" value={this.state.education.dateTo} onChange={this.handleDateTo} />
                    <button type="submit">Submit</button>
                </form>

                <EducationDisplay education={this.state}
                    edit={this.editEducation}
                />
            </div>
        )
    }
}

export default EducationInfo
