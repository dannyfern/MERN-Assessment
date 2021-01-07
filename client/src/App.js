import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

// components :
import Navbar from './components/Navbar'
import Home from './components/Home'

import Post from './components/posts/Post'
import AddPost from './components/posts/AddPost'
import EditPost from './components/posts/EditPost'

import Profile from './components/profiles/Profile'
import Profiles from './components/profiles/Profiles'
import AddProfile from './components/profiles/AddProfile'
import EditProfile from './components/profiles/EditProfile'

import Register from './components/auth/Register'
import SignIn from './components/auth/SignIn'

// styles :
import './styles/Styles.css'





const App = () => {



    return (
        <div>
            <BrowserRouter >
            <Navbar />

            <Switch>

                <Route exact path="/auth/register" component={Register} />
                <Route exact path="/auth/signin" component={SignIn} />

                <Route exact path="/profiles" render={(props) => <Profiles {...props} />} />
                <Route exact path="/profiles/new" component={AddProfile} />
                <Route exact path="/profiles/edit/:id" render={(props) => <EditProfile {...props} />} />
                <Route exact path="/profiles/:id" render={(props) => <Profile {...props} />} />
                
                
                <Route exact path="/posts/new" component={AddPost} />
                <Route exact path="/posts/edit/:id" render={(props) => <EditPost {...props} />} />
                <Route exact path="/posts/:id" render={(props) => <Post {...props} />} />
                
                <Route exact path="/" component={Home} />

            </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;
