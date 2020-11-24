import React from 'react';

const Profile = () => {
    return (
        <div className="Profile">
            <div className="container">
                <div className="card">
                    <div className="card-image">
                        <img src="https://2e8ram2s1li74atce18qz5y1-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/shutterstock_1060094186-1024x768.jpg"></img>
                        <span className="card-title">Тимур Огнев</span>
                    </div>
                    <div className="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action">
                        <a href="#">This is a link</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;