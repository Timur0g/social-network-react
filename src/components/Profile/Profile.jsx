import React from 'react';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {

    const addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    }

    const changeText = (value) => {
        props.dispatch({type: 'CHANGE-TEXT', value: value, text_area: 'profile_post'});
        
    }

    return (
        <div className="profile">
            <div className="container">
                <div className="card">
                    <div className="card-image">
                        <img alt=" изображение не найдено " src="https://2e8ram2s1li74atce18qz5y1-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/shutterstock_1060094186-1024x768.jpg"></img>
                        <span className="card-title">Тимур Огнев</span>
                    </div>
                    <div className="card-content">
                        <textarea value={props.profile.text_area_text} onChange={(e) => changeText(e.target.value)}></textarea>
                        <button onClick={addPost}>Send</button>
                        <MyPosts posts={props.profile.posts} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;