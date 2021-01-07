import React from 'react'
import { Link } from 'react-router-dom'

// how to map over links and display them with matching icon?

const Profile = ({ profile }) => {

    // destructuring data variables
    const { detailsData, skillsData, workData, educationData, linkData } = profile

    const { username, firstName, lastName, location, phoneNumber, birthday, interests, bio, briefDescription } = detailsData
    const { status, currentTitle, currentCompany, currentStartDate, pastRoles } = workData
    const { recentSchool, recentDegree, recentStartDate, recentEndDate, pastEducation } = educationData
    const { technical, soft, skillLevel, yearsOfExperience } = skillsData
    // const { linkedIn, twitter, instagram, facebook, portfolio, github, resume, additionalLinks } = linkData

    const { additionalLinks } = linkData



    // to display links : 
    const links = Object.entries(linkData)
    const correctLinks = links.filter(x => x[1] !== "" && x[0] !== "additionalLinks")

    const DisplayLinks = ({ correctLinks }) => {

        const additional = Object.entries(additionalLinks)

        return (
            <div>
                <div className="linkDiv">
                    {
                        correctLinks.map((x, i) => {
                            return (
                                <Link to={x[1]}><li key={i} className="links" >{x[0]}</li></Link> 
                            )
                        })
                    } 
                    {
                        additional.length > 0 &&
                        additional.map((x, i) => {
                            return (
                                <Link to={x[1]}><li key={i} className="links">{x[0]}</li></Link>
                            )
                        }) 
                    }
                </div>
            </div>
        )
    }

    const DisplaySkills = ({ skills }) => {


        return (
            <div className="skillsDiv">
                {
                    skills.length > 0 &&
                    skills.map((x, i) => {
                        return (
                            <p className="skills">{x}</p>
                            
                        )
                    })
                }
            </div>

        )
    }

    return(
        <div id="profile">

            <div className="profileImgName">
                <div className="profileImageDisplay">
                    <div className="profileImg">

                    </div>

                    <div className="status-desktop">
                        {status}
                    </div>

                </div>

                <div className="nameLocation">
                    <h2 id="username">@{username}</h2>
                    <div className="lastChildren">
                        <h3 id="name">{firstName} {lastName}</h3>
                        <h4 id="location">{location}</h4>
                    </div>
                    
                </div>

                <div className="personalDetails">
                    <div className="status">
                        {status}
                    </div>
                    <div className="experienceDesc">
                        <div className="experienceLevel">
                            <p><span className="bold">{skillLevel}</span> Developer with <span className="bold">{yearsOfExperience}</span> year of experience</p>
                        </div>
                        <div>
                            <h2>Interested in:</h2>
                            <p>
                                {
                                    interests.map((x, index) => {
                                        return (`${x}, ` )
                                    })
                                }  
                            </p>

                        </div>
                        
                    </div>
                </div>

                

            </div>


            <div className="bioAndLinks">
                <div className="bio">
                    {bio}
                </div>
                
                <div className="linksDisplay">
                    <h1>Get in touch</h1>
                    <DisplayLinks correctLinks={correctLinks}/>

                </div>

            </div>
            
            
            

            
            <div className="workAndEdu">
                <div className="workDisplay">
                    <h1>Current Role</h1>
                    <h2>{currentTitle} at {currentCompany}</h2>
                    <h3>{currentStartDate.slice(0, 4)} - present</h3>
                    {
                        pastRoles.length > 0 &&
                        <h1>Past Roles ^</h1>
                    }
                    
                </div>

                <div className="eduDisplay">
                    <h1>Education</h1>
                    <h2>{recentSchool} ({recentStartDate.slice(0, 4)} - {recentEndDate.slice(0, 4)})</h2>
                    <h3>{recentDegree}</h3>
                    {
                        pastEducation.length > 0 &&
                        <h1>Previous Education ^</h1>
                    }
                </div>

            </div>
            

            <div className="skillsDisplay">
                <h1>Technical Skills/Languages</h1>
                <DisplaySkills skills={technical} />
                <h1>Soft Skills</h1>
                <DisplaySkills skills={soft} />
            </div>
            <div className="postsDisplay">
                <h1>Blog Posts</h1>
            </div>

        </div>
    )
}


export default Profile 