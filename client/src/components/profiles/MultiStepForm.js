import React, { useState } from 'react'
import { useStep } from 'react-hooks-helper'

// form components : 
import Details from './formComponents/Details'
import Skills from './formComponents/Skills'
import Work from './formComponents/Work'
import Education from './formComponents/Education'
import Links from './formComponents/Links'
import Review from './formComponents/Review'



// steps/sections to the form : 
const steps = [
    { id: "details" },
    { id: "skills" },
    { id: "work" },
    { id: "education" },
    { id: "links" },
    { id: "review" }
]

// initial form data :

const initialDetailsData = {
    profilePhoto: "",
    firstName: "",
    lastName: "",
    username: "",
    location: "",
    phoneNumber: "",
    birthday: "",
    interests: [],
    bio: "",
    briefDescription: ""
}

const initialSkillsData = {
    technical: [],
    soft: [],
    skillLevel: "",
    yearsOfExperience: ""
}

const initialWorkData = {
    status: "",
    currentTitle: "",
    currentCompany: "",
    currentStartDate: "",
    pastRoles: []
}

const initialEducationData = {
    recentSchool: "",
    recentDegree: "",
    recentStartDate: "",
    recentEndDate: "",
    pastEducation: []
}

const initialLinkData = {
    linkedIn: "",
    twitter: "",
    instagram: "",
    facebook: "",
    portfolio: "",
    github: "",
    resume: "",
    additionalLinks: {}

}



const MultiStepForm = () => {
    // states :
    const [detailsData, setDetails] = useState(initialDetailsData)
    const [skillsData, setSkills] = useState(initialSkillsData)
    const [workData, setWork] = useState(initialWorkData)
    const [educationData, setEducation] = useState(initialEducationData)
    const [linkData, setLinks] = useState(initialLinkData)

    // functions for multi step form : 
    const { step, navigation } = useStep({ initialStep: 0, steps })
    const { id } = step

    // data and functions to pass to form
    const props = { navigation, detailsData, setDetails, skillsData, setSkills, 
    workData, setWork, educationData, setEducation, linkData, setLinks }

    // multi step form :
    switch (id) {
        case "details":
            return <Details {...props} />
        case "skills":
            return <Skills {...props} />
        case "work":
            return <Work {...props} />
        case "education":
            return <Education {...props} />
        case "links":
            return <Links {...props} />
        case "review":
            return <Review {...props} />
        default:
            return null
    }
    // return <Review {...props} />
 

    
}

export default MultiStepForm