import React from 'react'
import { Link } from 'react-router-dom'
import Profile from './Profile'

const Profiles = ({profileData}) => {

    // console.log(profileData)


    return(
        <div>
            <div className="heading">
                <h1>Profiles</h1>
                <Link to="/profiles/new">New Profile</Link>
            </div>

            <div>
                <Profile profile={profileData}/>

            </div>
            
        </div>
    )
}


export default Profiles