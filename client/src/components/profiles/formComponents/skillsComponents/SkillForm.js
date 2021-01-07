import React, { useState } from 'react'
import FormInput from '../../../reusable/FormInput'

// skills forms working, current bug: 
// tryed different ways to have button as a submit button, however 
// prevent default does not work and the page refreshes,
// the forms also dont work as expected when pressing enter instead 
// of clicking the button,
// right now have settled with onclick instead of onsubmit and disabled enter from 
// causing submit, find a way to use enter and have forms working as expected,
// possibly by figuring out how to fix submit problem

// also need to figure out way to store these skills in global state or just to the 
// parent skills component

// also need to figure out how to get rid of the empty string when updating the skills state
// or a way to not print it to the screen



const SkillsForm = ({ setSkills, skillsData, navigation, skillType }) => {
  
    const { technical, soft } = skillsData
    
    // states for tech and soft skills arrays :
    const [techSkills, setTechSkills] = useState([])

    const [softSkills, setSoftSkills] = useState([])

    // states for temporary values and names :
    const [tempVal, setTempVal] = useState("")
    const [tempName, setTempName] = useState("")


    // function that handles text change :
    // sets temp val and name :
    function handleChange (e) {
        setTempVal(e.target.value)
        setTempName(e.target.name)
    }


    // function that handles button click :
    // calls add to array function passing the temp val, which
    // adds the values to either the tech or soft array based on the temp name :
    // it then sets tempval to empty  :
    function handleSubmit (e) {
        addToArray(tempVal)
        setTempVal("")
        
        e.preventDefault()
    }


    // function described above ^ :
    const addToArray = (item) => {
        if (tempName === "technical" && item !== ""){
            const newArr = [...techSkills, item ]
            setTechSkills(newArr)
            setSkills({
                ...skillsData,
                technical: newArr
            })
        } else if (tempName === "soft" && item !== ""){
            const newArr = [...softSkills, item]
            setSoftSkills(newArr)
            setSkills({
                ...skillsData,
                soft: newArr
            })
        }
        console.log(skillsData)
    }

    // display function that displays the correct list of skills based on temp name :
    function Display(){
        
        if (tempName === "technical"){
            return techSkills.map((item, index) => 

                    <li className="skillItem" key={index}>{item}</li>
 
                
            )
        } else if (tempName === "soft"){
            return softSkills.map((item, index) => 

                    <li className="skillItem" key={index}>{item}</li>

                
            )
        } else return null

    }


    return(
        <div className="skillsDisplayInput">
            <div className="formFields">
                <div>
                    <label>
                        Language/skill
                    </label>
                    <div className="skillInputSection">
                        <FormInput name={skillType} value={tempVal} onChange={handleChange} />
                        <button onClick={handleSubmit} className="addBtn">+</button>
                    </div>
                </div>
                
                <div className="skillsList">
                   <Display /> 
                </div>
                
            </div>
            

            

            
            
            
        </div>
    )
}


export default SkillsForm