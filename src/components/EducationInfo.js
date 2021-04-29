import React from 'react'

class EducationInfo extends React.Component {
    constructor() {
        super()

        this.state = {
            school: '',
            subject: '',
            dateFrom: '',
            dateTo: '',
            isEditable: false,
        }
    }

    handleSchoolChange = (e) => {
        this.setState({ school: e.target.value })
    }

    handleSubjectChange = (e) => {
        this.setState({ subject: e.target.value })
    }

    handleDateFromChange = (e) => {
        this.setState({ dateFrom: e.target.value })
    }

    handleDateToChange = (e) => {
        this.setState({ dateTo: e.target.value })
    }

    onSubmitEducation = (e) => {
        e.preventDefault()
        this.setState({ isEditable: !this.state.isEditable })
    }

    onEditEducation = (e) => {
        e.preventDefault()
        this.setState({ isEditable: !this.state.isEditable })
    }

    renderEducationInfo = () => {
        return (
            <div>
                <h2>{this.state.school}</h2>
                <h3>{this.state.subject}</h3>
                <p>{this.state.dateFrom} - {this.state.dateTo}</p>
                <button onClick={this.onEditEducation}>Edit</button>

            </div>
        )
    }

    renderEducationEditInfo = () => {
        return (
            <div>
                <input type="text"
                    id="school"
                    placeholder="School/University"
                    value={this.state.school}
                    onChange={this.handleSchoolChange}
                />

                <input type="text"
                    id="subject"
                    placeholder="Subject"
                    value={this.state.subject}
                    onChange={this.handleSubjectChange}
                />

                <input type="date"
                    id="dateFrom"
                    placeholder="Date From"
                    value={this.state.dateFrom}
                    onChange={this.handleDateFromChange}
                />

                <input type="date"
                    id="dateTo"
                    placeholder="Date To"
                    value={this.state.dateTo}
                    onChange={this.handleDateToChange}
                />
                <button onClick={this.onSubmitEducation}>Submit</button>
            </div>
        )
    }


    render() {
        return (
            this.state.isEditable ? this.renderEducationInfo() : this.renderEducationEditInfo()
        )
    }
}

export default EducationInfo