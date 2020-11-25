import React from 'react';
import Post from './Post/Post' 

const MyPosts = (props) => {
    return (
        <div className="my_posts">
            <Post text={props.data}/>
            <Post text={props.data}/>
        </div>
    )
}

export default MyPosts;