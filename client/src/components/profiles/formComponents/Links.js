import React, { useState } from 'react'
import FormInput from '../../reusable/FormInput'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css';

// need to add validation on additional links form -> display error message if no name for additional link is selected

const Links = ({ setLinks, linkData, navigation,  }) => {

    const [disabled, setDisabled] = useState(true)

    // form props :
    const { linkedIn, twitter, instagram, facebook, additionalLinks, portfolio, github, resume } = linkData
    

    // for wizard form navigation :
    const { previous, next } = navigation;


    // local states for controlled forms :
    const [tempValue, setTempValue] = useState("")
    const [tempName, setTempName] = useState("")
    const [defaultOption, setDefaultOption] = useState("")


    // sets temp values for additional links form :
    function handleAdditional (e) {
        setTempValue(e.target.value)
    }


    // add form :
    // find div, create input element, set attributes of type and id, set value, add event listener for change,
    // append the input field to the div, 
    const addFormField = (e) => {

        const div = document.getElementById("additionalForms")
        const valueField = document.createElement("INPUT")

        valueField.setAttribute("type", "text")
        valueField.setAttribute("id", "valueField")
        valueField.value = tempValue

        valueField.addEventListener("change", handleAdditional)

        div.appendChild(valueField)

    }

    const hideFormField = (e) => {
        
    }


    // options for dropdown of additional links :
    const options = [
        "Youtube", "Pinterest", "Reddit", "Codewars", "Stack Overflow"
    ]


    // function for selecting dropdown options :
    // set the temp name for the additional link from selected value,
    // add a form field if there are no items in additional links object
    function onSelect (e) {

        const {value} = e
        setTempName(value)

        if (Object.entries(additionalLinks).length < 1){
            addFormField()
        } 
        setDisabled(false)
    }


    // function to handle changes from set input fields :
    // set linkdata to the name and value given
    function handleChange (e) {

        const { name, value } = e.target

        setLinks( {
            ...linkData,
            [name]: value
        })
    }


    // display additional items keys and values:
    function DisplayItems () {

        return (
            Object.entries(additionalLinks).map(([key, value]) => {
                return <li key={key}>{key}: {value}</li>
            })
        )
    }
    

    // function to handle the click of the + button :
    // set the additional links to the ones saved in temp name and value,
    // clear temp value, value field and dropdown selection
    // add validation in here to prevent blank name : (if !name => display msg, dont allow submission)
    function handleClick (e) {
        e.preventDefault()

        setLinks({
            ...linkData,
            additionalLinks: {...additionalLinks, [tempName]: tempValue}
        })
        
        setTempValue("")
        setTempName("")
        const valueField = document.getElementById("valueField")
        valueField.value = ""
        setDefaultOption("Select...")
    }

    function handleUpload (e) {
        console.log(e.target.files[0])
        setLinks({
            ...linkData,
            resume: e.target.files[0]
        })
    }

    return(
        <div>
            <div>
                <div className="heading">
                <h4>
                    Links
                </h4>  
                </div>
                <div className="profileFormDiv">
                    <form>
                        <div>
                            <h3 className="greyTitle">Social Media</h3>
                            
                            <div className="linkForms">
                                <div className="doubleFields">
                                    <div className="formFields">
                                        <label>
                                            LinkedIn
                                        </label>
                                        <FormInput name="linkedIn" value={linkedIn} onChange={handleChange} />
                                    </div>
                                    <div className="formFields">
                                        <label>
                                            Twitter
                                        </label>
                                        <FormInput name="twitter" value={twitter} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="doubleFields">
                                    <div className="formFields">
                                        <label>
                                            Instagram
                                        </label>
                                        <FormInput name="instagram" value={instagram} onChange={handleChange} />
                                    </div>
                                    <div className="formFields">
                                        <label>
                                            Facebook
                                        </label>
                                        <FormInput name="facebook" value={facebook} onChange={handleChange} />
                                    </div>

                                </div>
                            </div>
                            
                    

                                    
                        </div>


                        <div>
                            <h3 className="greyTitle">Portfolio</h3>
                            <div className="linkForms">
                                <div className="doubleFields">
                                    <div className="formFields">
                                        <label>
                                            Portfolio
                                        </label>
                                        <FormInput name="portfolio" value={portfolio} onChange={handleChange} />
                                    </div>
                                    <div className="formFields">
                                        <label>
                                            Github
                                        </label>
                                        <FormInput name="github" value={github} onChange={handleChange} />
                                    </div>

                                </div>
                                
                            </div>

                            <div className="profilePhotoUpload">
                                <label for="photoBtn">Upload Resume</label>
                                <input 
                                    type="file"
                                    name="resume"
                                    accept=".pdf"
                                    multiple="false"
                                    onChange={handleUpload}
                                    id="photoBtn"
                                    hidden
                                    
                                />
                                <span id="fileChosen">No file Chosen</span>

                            </div>
                            
                            
                            {/* <div className="formFields">
                                <label>
                                    Resume
                                </label>
                                <FormInput type="file" name="resume" accept=".pdf" onChange={handleUpload}/>
                                
                            </div> */}
                        </div>
                        <div>
                            <h3 className="greyTitle">Additional</h3>
                            
                            <div className="linkDropDown">
                                <Dropdown options={options} onChange={onSelect} value={defaultOption} name="additionalLinks" />
                                
                                <div id="additionalForms"></div>
                                <button className="plusButton" onClick={handleClick} disabled={disabled} >+</button>                
                            </div>
                                
                            <div id="additionalItems">
                                    
                                <DisplayItems />
                                    
                                
                            </div>
                            </div>

                    </form>  
                    <div className="navigationDiv">
                        <button className="nextBtn" onClick={previous}>back</button>  
                        <button className="nextBtn" onClick={next}>Next</button>
                    </div>
                </div>
            </div>
            

        </div>
    )
}


export default Links