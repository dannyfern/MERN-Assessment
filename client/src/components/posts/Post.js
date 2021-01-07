import React from 'react'
import {Link} from 'react-router-dom'

const Post = ({history, post}) => {


    if (!post) {
        return null
    } else {
        const { title, category, content, modified_date } = post
        console.log("POST", post)
        
        return (
            <div>
                <div>
                    <div className="singlePostTitle">
                        <Link to={`/posts/${post._id}`} className="singleTitleLink">
                            <h1 id="postTitle">{title}</h1>
                        </Link>
                    </div>
                    <div id="postSections" className="width70">
                        
                        <div className="singlePostInfo">
                            <h5 id="postDate">Posted {modified_date.toLocaleString()}</h5>
                            <h3>{category}</h3>
                            
                            <p>{content}</p>
                        </div>
                        <div className="authorInfo">
                            <p>author name</p>
                            <p>author description</p>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        )
    }
}


export default Post