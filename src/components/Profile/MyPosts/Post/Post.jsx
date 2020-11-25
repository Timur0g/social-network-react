import React from 'react';

const Post = (props) => {
    return (
        <div className="post">
            <div className="col s12 m8 offset-m2 l6 offset-l3">
                <div className="card-panel grey lighten-5 z-depth-1">
                    <div className="row valign-wrapper">
                        <div className="col s2">
                            <img src="https://2e8ram2s1li74atce18qz5y1-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/shutterstock_1060094186-1024x768.jpg" alt="" className="circle responsive-img"></img>
                        </div>
                        <div className="col s10">
                            <span className="black-text">
                                {props.text}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;