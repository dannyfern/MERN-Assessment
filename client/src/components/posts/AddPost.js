import React from 'react'
import './../../styles/Posts.css'

const AddPost = () => {


    return(
        <div>
            
            
            <div id="addPostDiv">
                <div className="heading">
                    Add post
                </div>
                <form id="addPostForm" >
                    <label>Post Title</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="title here..."
                        className="addPostField"
                    />
                    <label>Post Category</label>
                    <input
                        type="text"
                        name="category"
                        placeholder="category here..."
                        className="addPostField"

                    />
                    <label>Post Content</label>
                    <textarea
                        name="content"
                        placeholder="content here..."
                        className="addPostField"
                        
                    />
                    <input 
                    type="submit"
                    className="addPostSubmit"
                    />

                </form>
            </div>
        </div>
    )
}


export default AddPost