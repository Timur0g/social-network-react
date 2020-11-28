import React from 'react';

const Users = props => {
    console.log(props)
    return (
        <div className="users">
            <div className="col s12 m7">

                {props.users.map(item => {
                    return (
                        <div className="card horizontal">
                            <div className="card-image">
                                <img alt='-' src={item.photoUrl}></img>
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                    <p>{item.status}</p>
                                </div>
                                <div className="card-action">
                                    {item.followed? <a onClick={() => props.unfollow(item.id)}>Отписаться</a>: <a onClick={() => props.follow(item.id)}>Подписаться</a>}
                                    
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Users;