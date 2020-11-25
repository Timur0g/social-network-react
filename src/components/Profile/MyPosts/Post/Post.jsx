import React from 'react';

const Post = () => {
    return (
        <div className="post">
            <div class="col s12 m8 offset-m2 l6 offset-l3">
                <div class="card-panel grey lighten-5 z-depth-1">
                    <div class="row valign-wrapper">
                        <div class="col s2">
                            <img src="https://2e8ram2s1li74atce18qz5y1-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/shutterstock_1060094186-1024x768.jpg" alt="" class="circle responsive-img"></img>
                        </div>
                        <div class="col s10">
                            <span class="black-text">
                                This is a square image. Add the Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, illum, et recusandae delectus quae architecto, aspernatur assumenda molestias earum qui iure cumque. Sunt cum, doloribus accusantium sequi obcaecati iste impedit. "circle" class to it to make it appear circular.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;