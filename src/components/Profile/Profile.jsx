import React from 'react';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
    if (!props.userProfile) {
        return <div>Загрузка...</div>
    }
    return (
        <div className="profile">
            <div className="container">
                <div className="card">

                    <div className="card-image">
                        <img alt=" изображение не найдено " src={props.userProfile.photos.large ? props.userProfile.photos.large : 'https://image.shutterstock.com/image-vector/404-not-found-problem-disconnect-600w-721322569.jpg'}></img>
                        <span className="card-title">{props.userProfile.fullName}</span>
                    </div>
                    <div className="card-content">
                        <textarea
                            value={props.text_area_text}
                            onChange={props.changeText}
                        ></textarea>
                        <button onClick={props.addPost} className="btn">Send</button>
                        {/* <MyPosts posts={props.posts} /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;