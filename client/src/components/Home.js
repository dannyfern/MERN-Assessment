import React from 'react'
import Posts from './posts/Posts'
import { Link } from 'react-router-dom'



const Home = ({postsData}) => {
    const props = {postsData}


    return (
    <div>
        <section className='home'>
            <div className='dark-overlay'>
                <div className='home-inner'>
                    <h1 className='x-large'>Welcome </h1>
                    <p class="homelead">
                    Giving Developers another life! Your one stop for everything developer
                    </p>
                    <div className="homebuttons">
                        <Link to='auth/register' className='btn btn-primary'>Sign Up!</Link>
                        &nbsp;&nbsp;&nbsp;
                        <Link to='auth/signin' className='btn btn-secondary'>Sign In!</Link>
                    </div>
                </div>
            </div>
        </section>
    
        <div className="width70">
            <div className="heading">

                <h1 className="headingFont">Latest Posts</h1>

            </div>
            

            <Posts {...props} />


        </div>
    </div>
    )
}



export default Home