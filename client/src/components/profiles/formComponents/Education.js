import React from 'react'
import PastEducation from './educationSections/PastEducation'
import FormInput from '../../reusable/FormInput'

const Education = ( { setEducation, educationData, navigation }) => {
    
    const props = { setEducation, educationData }

    const { recentSchool, recentDegree, recentStartDate, recentEndDate } = educationData

    const { previous, next } = navigation;


    // handles regular input changes and saves to state :
    function changeHandler (e){
        const { name, value } = e.target
        setEducation({
            ...educationData,
            [name]: value
        })
    }

    return(
        <div>
            <div className="heading">
                <h4>
                    Education
                </h4>
            </div>
            <div className="profileFormDiv">

                <form className="profileForm">
                    <div>
                        <div className="eduProfileForm">
                            <h3 className="greyTitle">Most Recent </h3>
                            <div className="eduForms">
                                <div className="doubleFields">
                                    <div className="formFields">
                                        <label>
                                            School
                                        </label>
                                        <FormInput name="recentSchool" value={recentSchool} onChange={changeHandler} />

                                    </div>
                                    <div className="formFields">
                                        <label>
                                            Degree
                                        </label>
                                        <FormInput name="recentDegree" value={recentDegree} onChange={changeHandler} />

                                    </div>
                                </div>

                                <div className="doubleFields">
                                    <div className="formFields">
                                        <label>
                                            Start Date
                                        </label>
                                        <FormInput type="date" name="recentStartDate" value={recentStartDate} onChange={changeHandler} />

                                    </div>
                                    <div className="formFields">
                                        <label>
                                            End date
                                        </label>
                                        <FormInput type="date" name="recentEndDate" value={recentEndDate} onChange={changeHandler} />

                                    </div>
                                </div>



                            </div>
                            
                            

                            

                            
                    
                            <h3 className="greyTitle">Past Education</h3>
                            <PastEducation {...props} />
                            
                        </div>
                        </div>
                </form>

                <div className="navigationDiv">
                    <button className="nextBtn" onClick={previous}>back</button>  
                    <button className="nextBtn" onClick={next}>Next</button>
                </div>

            </div>
        </div>
    )
}


export default Education