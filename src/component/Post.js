import React from 'react'
import './Post.css';
import Avatar from "@material-ui/core/Avatar";


const Post = () => {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar 
                    className="post__avatar" 
                    alt="Yunik"
                    src="/static/images/avatar/1.jpg"
                />
                <h3>Username</h3>
            </div>

            <img 
                className="post__image"
                src="https://images.unsplash.com/photo-1623265174181-4095a1a35702?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt="" />
            <h4 className="post__text"><strong>Username:</strong> caption</h4>
        </div>
    )
}

export default Post
