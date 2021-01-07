import React, { useState } from 'react'
import './../../styles/Posts.css'
import FormInput from './../reusable/FormInput'
import Posts from './Posts'


const AddPost = ({ history, nextId, addPost}) => {
    // const [posts, setTwoots] = useState([])

    

    const initialFormState = {
        title: "",
        category: "",
        content: ""
    }

    const [formState, setFormState] = useState(initialFormState)


    const handleChange = e => {
        const { name, value } = e.target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    

    const handleSubmit = e => {
        e.preventDefault()
        const newPost = {
            _id: nextId,
            title: formState.title,
            category: formState.category || "general",
            modified_date: new Date(),
            content: formState.content
        }
        addPost(newPost)
        history.push(`/posts/${nextId}`)
    }
    console.log(formState)


    return(
        <div>
            
            
            <div id="addPostDiv">
                <div className="heading">
                    <h1>Add post</h1>
                </div>
                <form id="addPostForm" onSubmit={handleSubmit}>

                    <label>Post Title</label>
                    <FormInput name="title" placeholder="Title here..." className="addPostField" onChange={handleChange} />

                    <label>Post Category</label>
                    <FormInput name="category" placeholder="Category here..." className="addPostField" onChange={handleChange} />

                    <label>Post Content</label>
                    <textarea
                        name="content"
                        placeholder="content here..."
                        className="addPostField"
                        onChange={handleChange}
                        
                    />
                    <input 
                    type="submit"
                    className="addPostSubmit"
                    value="New Post"
                    />

                </form>
            </div>
        </div>
    )
}


export default AddPost