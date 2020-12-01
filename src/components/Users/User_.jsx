import React from 'react';

const Users = props => {
    return (
        <div className="users">
            <div className={c.pages}>
                <ul className={`pagination center`}>
                    {pages.map(item => <li className={item === this.props.page ? 'active ' : ''}><a onClick={() => this.changePage(item)}>{item}</a></li>)}
                </ul>
            </div>

            <div className="col s12 m12">
                {this.props.users.map(item => {
                    return (
                        <div className="card horizontal small">
                            <div className="card-image">
                                <img alt='-' src={item.photos.large ? item.photos.large : 'https://image.freepik.com/free-vector/error-404-not-found-glitch-effect_8024-4.jpg'}></img>
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                    <h2>{item.name}</h2>
                                    <p>{item.status}</p>
                                </div>
                                <div className="card-action">
                                    {item.followed ? <a onClick={() => this.props.unfollow(item.id)}>Отписаться</a> : <a onClick={() => this.props.follow(item.id)}>Подписаться</a>}

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