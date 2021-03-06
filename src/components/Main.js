import React from "react";
import GeneralInfo from './GeneralInfo'
import EducationInfo from './EducationInfo'
import WorkInfo from './WorkInfo'


function Main() {
    return (
        <div>
            <div className="header">
                <h1>CV Application</h1>
                <hr />
            </div>

            <h1>General Information</h1>
            <hr />
            <GeneralInfo />
            <h1>Education</h1>
            <hr />
            <EducationInfo />
            <h1>Work</h1>
            <hr />
            <WorkInfo />
        </div >
    )
}

export default Main