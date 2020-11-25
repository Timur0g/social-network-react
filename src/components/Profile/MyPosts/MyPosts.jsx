import React from 'react';
import Post from './Post/Post' 

const MyPosts = (props) => {
    return (
        <div className="my_posts">
            {props.posts.map(item => <Post post={item.value} key={item.id}/>)}
        </div>
    )
}

export default MyPosts;