import Axios from 'axios';
import React from 'react';

const Users = props => {
    const side = () => {if (props.users.length === 0) {
        Axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUser(response.data.items)
        })
    }}
    return (
        <div className="users">
            <div className="col s12 m7">
                <button onClick={side}>Показать</button>

                {props.users.map(item => {
                    return (
                        <div className="card horizontal">
                            <div className="card-image">
                                <img alt='-' src={item.photos.large ? item.photos.large : 'https://image.freepik.com/free-vector/error-404-not-found-glitch-effect_8024-4.jpg'}></img>
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                    <h2>{item.name}</h2>
                                    <p>{item.status}</p>
                                </div>
                                <div className="card-action">
                                    {item.followed ? <a onClick={() => props.unfollow(item.id)}>Отписаться</a> : <a onClick={() => props.follow(item.id)}>Подписаться</a>}

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