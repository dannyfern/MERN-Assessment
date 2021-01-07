import React from 'react'
import { useForm, useStep } from 'react-hooks-helper'
import MultiStepForm from './MultiStepForm'




const AddProfile = () => {



    return(
        <div>
            <div>
                <div className="heading">
                    <h1 className="headingFont">Create Your Profile</h1>
                </div>
                <MultiStepForm />
                

            </div>
             
        </div>
    )
}


export default AddProfile 