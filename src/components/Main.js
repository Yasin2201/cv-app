import React from "react";
import GeneralInfo from './GeneralInfo'
import EducationInfo from './EducationInfo'


function Main() {
    return (
        <div>
            <GeneralInfo />
            <h1>Education</h1>
            <hr />
            <EducationInfo />
        </div >
    )
}

export default Main