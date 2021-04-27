import React from "react";
import GeneralInput from "../components/cv-inputs/GeneralInput"
import EducationInput from "../components/cv-inputs/EducationInput"
import WorkExpInput from "../components/cv-inputs/WorkExpInput"

function Main() {
    return (
        <div>
            <GeneralInput />
            <EducationInput />
            <WorkExpInput />
        </div>
    )
}

export default Main