import React, { useState, useEffect } from 'react'
// import CheckBox from '../../reusable/CheckBox'
// import interestsCheckBoxes from './../../../config/interestsCheckBoxes'
import FormInput from '../../reusable/FormInput'

import Checkbox from '@material-ui/core/Checkbox';

// checkboxes are broken >:(

// have image shown on screen when uploaded - maybe look into components (antd)
// move checkbox data to data file (once merged)

const Details = ({ setDetails, detailsData, navigation }) => {
    
    // fields from detail form data :
    const { profilePhoto, firstName, lastName, username, location, 
    phoneNumber, birthday, bio, briefDescription } = detailsData

    // next from hooks helper
    const { next } = navigation;

    

    const interests = [
        {id: 1, value: "Front End", isChecked: false},
        {id: 2, value: "Back End", isChecked: false},
        {id: 3, value: "Full Stack", isChecked: false},
        {id: 4, value: "AI", isChecked: false},
        {id: 5, value: "Mobile Development", isChecked: false},
        {id: 6, value: "Software Development", isChecked: false},
        {id: 7, value: "Data Science", isChecked: false},
        {id: 8, value: "Cyber Security", isChecked: false},
        {id: 9, value: "DevOps", isChecked: false},
        {id: 10, value: "Game Development", isChecked: false}
    ]

    const [checked, setChecked] = useState(interests)



    function handleCheckboxChange (e) {
        // console.log(e.target.checked)
        // const checkbox = ""
        
        // checked.forEach(item => {
        //     if (item.value === e.target.value){
        //         console.log(item)
        //         setChecked({
        //             ...checked,
                    
        //         })

        //         item.isChecked = e.target.checked
                
        //     }
            
        // })
        // // setChecked(
        // //     ...checked
        // // )
        // console.log(checked)



    }
  



    // function to handle change of regular form inputs :
    function handleChange (e) {
        const { name, value } = e.target
        setDetails({
            ...detailsData,
            [name]: value
        })
    }

    // function for image upload :
    function uploadImg (e) {
        setDetails({
            ...detailsData,
            profilePhoto: e.target.files[0]
        })

        const file = document.getElementById('fileChosen')
        file.textContent = e.target.files[0].name
    }




    return(
        <div>
    
            <div className="heading">
                <h4>
                    Personal Details
                </h4>
            </div>

            <div className="profileFormDiv">
                <div className="profilePhoto">
                    <img
                        src={profilePhoto}
                        alt="profilephoto"
                        />
                </div>


                <form className="profileForm">


                    <div className="profilePhotoUpload">
                        <label for="photoBtn">Upload Image</label>
                        <input 
                            type="file"
                            name="profilePhoto"
                            accept="image/png, image/jpeg"
                            multiple="false"
                            onChange={uploadImg}
                            id="photoBtn"
                            hidden
                            
                        />
                        <span id="fileChosen">No file Chosen</span>

                    </div>


                    <div className="profileFormSection">

                        <div className="doubleFields">
                            <div className="formFields">
                                <label>
                                    First Name
                                </label>
                                <FormInput name="firstName" value={firstName} onChange={handleChange} />  
                            </div>

                            
                            <div className="formFields">
                                <label>
                                    Last Name
                                </label>
                
                                <FormInput name="lastName" value={lastName} onChange={handleChange} />
                            </div>

                        </div>
                        


                        <div className="doubleFields">
                            <div className="formFields">
                                <label>
                                    Username
                                </label>
                                <FormInput name="username" value={username} onChange={handleChange} /> 
                            </div>

                            
                            <div className="formFields">
                                <label>
                                    Location
                                </label>
            
                                <FormInput name="location" value={location} onChange={handleChange} />
                            </div>
                        </div>

                        
                        <div className="doubleFields">
                            <div className="formFields">

                                <label>
                                    Phone Number
                                </label>
                                <FormInput name="phoneNumber" value={phoneNumber} onChange={handleChange} />
                            </div>

                            <div className="birthdayFields formFields">
                                <label>Birthday</label>

                                <FormInput type="date" name="birthday" value={birthday} onChange={handleChange}/>
            
                            </div>
                        </div>


                        {/* <div className="interestsSection">
                            <h4>Interests</h4>
                            <div className="interestsCheckBoxes">

                            
                            { // map over checkbox items from checkbox data file :
                                checked.map((item, index) => {
                                    // const { value, isChecked, id } = item
                                    // let isChecked = checkedItems[name]
                                    // console.log('isChecked', isChecked)
                                    return(
                                        <div key={item.id} className="checkboxes">
                                            

                                            <Checkbox value={item.value} checked={item.isChecked} onChange={handleCheckboxChange}  />
                                          
                                            <label className="checkLabel">
                                                {item.value}
                                            
                                            </label>
                                        </div>
                                    )   
                                })
                            }
                            
                               

                            </div>
                        </div> */}

                        <div className="formFields">
                            <label>
                                Bio
                            </label>
                            <textarea 
                                name="bio"
                                value={bio}
                                onChange={handleChange}
                                className="bio"
                            />
                        </div>

                        <div className="formFields">
                            <label>
                                Brief Author Description 
                            </label>
                            <p>(This will be shown underneath your blog posts)</p>
                            
                            <textarea 
                                name="briefDescription"
                                value={briefDescription}
                                onChange={handleChange}
                                className="description"
                            />
                        </div>
                    </div>
                </form>
                <div className="navigationDiv">
                    <button className="nextBtn" onClick={next}>next</button>
                </div>

                
            </div>

            
            
        </div>
    )
}

export default Details