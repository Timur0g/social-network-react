import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './Users.module.css'

const Users = props => {
    return (
        <div className="users">
            <div className={c.pages}>
                <ul className={`pagination center`}>
                    {props.pages.map(item => <li className={item === props.page ? 'active ' : ''}><a onClick={() => props.changePage(item)}>{item}</a></li>)}
                </ul>
            </div>

            <div className="col s12 m12">
                {props.users.map(item => {
                    return (
                        <div className="card horizontal small">
                            <div className="card-image">
                                <NavLink to={`/profile/${item.id}`}>
                                    <img alt='-' src={item.photos.large ? item.photos.large : 'https://image.freepik.com/free-vector/error-404-not-found-glitch-effect_8024-4.jpg'}></img>
                                </NavLink>
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