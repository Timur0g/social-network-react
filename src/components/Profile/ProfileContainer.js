import React from 'react';
import Post from './MyPosts/Post/Post';
import Profile from './Profile';

const ProfileContainer = (props) => {
    const addPost = () => props.dispatch({ type: 'ADD-POST' })
    const changeText = (e) =>  {
        const value = e.target.value;
        props.dispatch({ type: 'CHANGE-TEXT', value: value, text_area: 'profile_post' });
    }
    const posts = props.profile.posts.map(item => <Post post={item.value} key={item.id}/>)

    return <div className="profile_container"><Profile 
    addPost={addPost} 
    changeText={changeText}
    text_area_text={props.profile.text_area_text}
    posts={posts}
    /></div>
}

export default ProfileContainer;