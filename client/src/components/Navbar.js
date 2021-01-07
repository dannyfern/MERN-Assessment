import React, { useState } from 'react'
import { Link } from 'react-router-dom'



// put logo in here to the left and have everyhting else float to the right


const Navbar = () => {

    const [isClicked, setClicked] = useState(false)

    const toggleNav = () => {
        if (isClicked === false){
            setClicked(true)
        } else {
            setClicked(false)
        }
        
    }

    let className = isClicked ? "openNav" : "closedNav"

    return (
        <div>
            <div id="navbar">

                <div>
                    <button className="hamburger" id="hamburger" onClick={toggleNav}>
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                

                <div id="navLinks" className={className}>
                    <Link className="navLinkStyles" id="logo" to="/" >Dot Developer</Link>
                    <Link className="navLinkStyles" to="/" >Home</Link>
                    <Link className="navLinkStyles" to="/posts/new">New Post</Link>
                    <Link className="navLinkStyles" to="/profiles">Developers</Link>
                    <Link className="navLinkStyles" to="/auth/register">Register account</Link>
                    <Link className="navLinkStyles" to="/auth/signin">Sign in</Link>
                </div>
            </div>
            
            

        </div>
    )
}



export default Navbar