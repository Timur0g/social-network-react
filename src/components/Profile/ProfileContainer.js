import React from 'react';
import { connect } from 'react-redux';
import Post from './MyPosts/Post/Post';
import Profile from './Profile';

// const ProfileContainer = (props) => {
//     const addPost = () => props.dispatch({ type: 'ADD-POST' })
//     const changeText = (e) =>  {
//         const value = e.target.value;
//         props.dispatch({ type: 'CHANGE-TEXT', value: value, text_area: 'profile_post' });
//     }
//     const posts = props.profile.posts.map(item => <Post post={item.value} key={item.id}/>)

//     return <div className="profile_container"><Profile 
//     addPost={addPost} 
//     changeText={changeText}
//     text_area_text={props.profile.text_area_text}
//     posts={posts}
//     /></div>
// }


const mapStateToProps = (state) => {
    return {
        text_area_text: state.profile.text_area_text,
        posts: state.profile.posts.map(item => <Post post={item.value} key={item.id} />)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch({ type: 'ADD-POST' }),
        changeText: (e) => {
            const value = e.target.value;
            dispatch({ type: 'CHANGE-TEXT', value: value, text_area: 'profile_post' })
        }
    }
}
const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;