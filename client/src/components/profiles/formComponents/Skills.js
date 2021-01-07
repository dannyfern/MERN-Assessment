import React from 'react'
import SkillsForm from './skillsComponents/SkillForm'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css';
import FormInput from '../../reusable/FormInput'


const Skills = ({ setSkills, skillsData, navigation }) => {

    const props = { setSkills, skillsData, navigation }
    const { skillLevel, yearsOfExperience } = skillsData
    const { previous, next } = navigation;

    // due to current bug, have to disable enter keypress from submitting :
    function onKeyPress (e) {
        if (e.which === 13 /* Enter */) {
            e.preventDefault();
        }
    }

    // function to handle regular input
    function handleChange (e) {

        const { name, value } = e.target
        setSkills({
            ...skillsData,
            [name]: value
        })
    }

    // function to handle dropdown and assign its value to the skill level in form data :
    function onSelect (e) {
        const { value } = e
        setSkills({
            ...skillsData,
            skillLevel: value
        })
    }
    // options for skill level drop down :
    const options = ['Aspirational', 'Junior-level', 'Mid-level', 'Senior-level']

    return(
        <div>
            <div className="profileFormDiv">
                <div className="heading">
                    <h4>
                        Skills
                    </h4>
                </div>
                <form onKeyPress={onKeyPress}>
                    <div className="skillsFormSection">
                        <div>
                            <h3>Technical Skills</h3>
                            <SkillsForm {...props} skillType="technical"/>
                        </div>
                        <div>
                            <h3>Soft Skills</h3>
                            <SkillsForm {...props} skillType="soft"/>
                        </div>
                        <div>
                            <h3>Experience</h3>
                            <div>
                                <label>
                                    Skill level
                                </label>
                                {/* dropdown component from package : */}
                                <Dropdown options={options} onChange={onSelect} value={skillLevel} id="skillDropDown" name="skillLevel" />
                            </div>
                            <div>
                                <label>
                                    Years of Experience
                                </label>
                                <FormInput name="yearsOfExperience" value={yearsOfExperience} onChange={handleChange} />
                                
                            </div>
                            
                            
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


export default Skills