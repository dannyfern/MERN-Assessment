import React, { useState } from 'react'
import FormInput from '../../../reusable/FormInput'

const PastWork = ({ setWork, workData }) => {

    const { pastRoles } = workData

    // initial form data for past roles :
    const pastRole = {
        title: "",
        company: "", 
        startDate: "", 
        endDate: ""
    }

    // temp values to save to state and then to form data : 
    const [tempVals, setTempVals] = useState(pastRole)
    const { title, company, startDate, endDate } = tempVals


    // function to set values for tempvals from form input :
    function handleChange (e) {
        const { name, value } = e.target
        setTempVals({
            ...tempVals,
            [name]: value
        })
    }

    // handle plus button click 
    function handleClick (e) {
        e.preventDefault()

        // set work form details to include the tempvals
        setWork({
            ...workData,
            pastRoles: [...pastRoles, tempVals]
        })

        // clear tempvals 
        setTempVals(pastRole)
        
    }

    // display past roles data if there is any :
    function Display (){

        if (pastRoles){
            return (
                pastRoles.map((item, index) => {
                    return (
                        <div key={index}>

                            <h3>role: {index + 1}</h3>
                            {
                                Object.entries(item).map(([key, value]) => {
                                    return <li key={key}>{key}: {value}</li>
                                })
                            }

                        </div>
                    )
                })
            )
        } else return null
    }


    return(
        <div className="recentWorkInfo">

            <div>
                <Display />
            </div>
            <div className="eduForms">
                <div className="doubleFields">
                    <div className="formFields">
                        <label>
                            Title
                        </label>
                        <FormInput name="title" value={title} onChange={handleChange} />
                    </div>

                    <div className="formFields">
                        <label>
                            Company
                        </label>
                        <FormInput name="company" value={company} onChange={handleChange} />
                    </div>
                </div>
            
                <div className="doubleFields">
                    <div className="formFields">
                        <label>
                        Start date
                        </label>
                        <FormInput type="date" name="startDate" value={startDate} onChange={handleChange} />
                    </div>

                    <div className="formFields">
                        <label>
                        End date
                        </label>
                        <FormInput type="date" name="endDate" value={endDate} onChange={handleChange} />
                    </div>
                

                </div>
            </div>
            

            <button className="plusButton" onClick={handleClick}>+</button>

        </div>
    )
}

export default PastWork