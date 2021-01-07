import React, {useState} from 'react'
import FormInput from '../../../reusable/FormInput'

//  how to dry up past education and work ? functions are almost identical


// when displaying past education - capitalise and have as labels (eg. startDate, school etc.)

const PastEducation = ({ setEducation, educationData }) => {

    const { pastEducation } = educationData

    // empty initial data 
    const education  = {
        school: "",
        degree: "",
        startDate: "",
        endDate: ""
    }
    // temp values to save to state :
    const [tempVals, setTempVals] = useState(education)

    const { school, degree, startDate, endDate } = tempVals


    function handleChange (e) {
        const { name, value } = e.target
        setTempVals({
            ...tempVals,
            [name]: value
        })
    }

    function handleClick (e) {
        e.preventDefault()

        setEducation({
            ...educationData,
            pastEducation: [...pastEducation, tempVals]
        })

        setTempVals(education)
    }

    function Display(){

        if (pastEducation){
            return(
                pastEducation.map((item, index) => {
                    return (
                        <div className="eduItemDiv" key={index}>
                            {/* <h3></h3> */}
                            {
                                Object.entries(item).map(([key, value]) => {
                                    return <li className="eduItem" key={key}>{key}: {value}</li>
                                })
                            }
                        </div>
                    )
                })
            )
        }
    }


    return(
        <div className="eduForms">
            <div>
                <Display />
            </div>

            <div className="doubleFields">
                <div className="formFields">
                    <label>
                        School
                    </label>
                    <FormInput name="school" value={school} onChange={handleChange} />

                </div>
                <div className="formFields">
                    <label>
                        Degree
                    </label>
                    <FormInput name="degree" value={degree} onChange={handleChange} />

                </div>

            </div>

            <div className="doubleFields">
                <div className="formFields">
                    <label>
                        Start Date
                    </label>
                    <FormInput type="date" name="startDate" value={startDate} onChange={handleChange} />

                </div>
                <div className="formFields">
                    <label>
                        End Date
                    </label>
                    <FormInput type="date" name="endDate" value={endDate} onChange={handleChange} />

                </div>
            </div>
            <button className="plusButton" onClick={handleClick}>+</button>
        </div>
    )
}


export default PastEducation