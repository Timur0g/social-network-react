import React from 'react';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
    const REF_textArea = React.createRef();
    const REF_textArea2 = React.createRef();

    const addPost = () => {
        props.data.addPost(REF_textArea.current.value, REF_textArea2.current.value)
        REF_textArea.current.value = REF_textArea2.current.value = ''
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
                        <textarea ref={REF_textArea2}></textarea>
                        <textarea ref={REF_textArea}></textarea>
                        <button onClick={addPost}>Send</button>
                        <MyPosts posts={props.data.posts} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;