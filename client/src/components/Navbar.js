import React from 'react'
import {Link} from 'react-router-dom'
import './../styles/Navbar.css'

const Navbar = () => {



    return (
        <div>
            <div id="navbar">
                <Link className="navLinkStyles" to="/">Home</Link>
                <Link className="navLinkStyles" to="/posts/new">New Post</Link>
                <Link className="navLinkStyles" to="/profiles">Profiles</Link>
                <Link className="navLinkStyles" to="/auth/register">Register account</Link>
                <Link className="navLinkStyles" to="/auth/signin">signin</Link>
            </div>
            

        </div>
    )
}



export default Navbar