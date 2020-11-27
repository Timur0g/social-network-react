import React from 'react';

const MyPosts = (props) => {
    return (
        <div className="my_posts">
            {props.posts}
        </div>
    )
}

export default MyPosts;