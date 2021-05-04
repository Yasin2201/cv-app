import React, { useState } from 'react'
import uniqid from "uniqid"
import EducationDisplay from './EducationDisplay'

const EducationInfo = () => {
    const [eduInfo, setEduInfo] = useState({
        school: "",
        subject: "",
        dateTo: "",
        dateFrom: "",
        id: uniqid(),
    });

    const [eduArr, setEduArr] = useState([]);

    const handleSchoolName = (e) => {
        e.preventDefault()
        setEduInfo({
            school: e.target.value,
            subject: eduInfo.subject,
            dateFrom: eduInfo.dateFrom,
            dateTo: eduInfo.dateTo,
            id: eduInfo.id,
        })
    }

    const handleSubjName = (e) => {
        e.preventDefault()
        setEduInfo({
            school: eduInfo.school,
            subject: e.target.value,
            dateFrom: eduInfo.dateFrom,
            dateTo: eduInfo.dateTo,
            id: eduInfo.id,
        })
    }

    const handleDateFrom = (e) => {
        e.preventDefault()
        setEduInfo({
            school: eduInfo.school,
            subject: eduInfo.subject,
            dateFrom: e.target.value,
            dateTo: eduInfo.dateTo,
            id: eduInfo.id,
        })
    }

    const handleDateTo = (e) => {
        e.preventDefault()
        setEduInfo({
            school: eduInfo.school,
            subject: eduInfo.subject,
            dateFrom: eduInfo.dateFrom,
            dateTo: e.target.value,
            id: eduInfo.id,
        })
    }

    const submitEducation = (e) => {
        e.preventDefault()
        setEduInfo({
            school: "",
            subject: "",
            dateTo: "",
            dateFrom: "",
            id: uniqid(),
        })
        setEduArr(eduArr.concat(eduInfo))
    }

    const editEducation = (e) => {
        e.preventDefault()
        const foundEducation = eduArr.find((edu) => { return edu.id === e.target.value })
        setEduArr(eduArr.filter((edu) => { return edu.id !== e.target.value }))

        setEduInfo({
            school: foundEducation.school,
            subject: foundEducation.subject,
            dateFrom: foundEducation.dateFrom,
            dateTo: foundEducation.dateTo,
            id: foundEducation.id,
        })
        console.log(eduInfo)
        console.log(eduArr)
    }

    return (
        <div>
            <form onSubmit={submitEducation}>
                <input type="text" id="school" placeholder="School/University" value={eduInfo.school} onChange={handleSchoolName} />
                <input type="text" id="subject" placeholder="Subject" value={eduInfo.subject} onChange={handleSubjName} />
                <input type="date" id="eduDateFrom" value={eduInfo.dateFrom} onChange={handleDateFrom} />
                <input type="date" id="eduDateTo" value={eduInfo.dateTo} onChange={handleDateTo} />
                <button type="submit">Submit</button>
            </form>

            <EducationDisplay
                eduArr={eduArr}
                edit={editEducation}
            />
        </div>
    )
}

export default EducationInfo
