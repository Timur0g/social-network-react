import React from 'react'
import { NavLink } from 'react-router-dom';

import s from'./Header.module.css';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <div className={`${s.nav_wrapper} nav-wrapper  blue darken-3`}>
                    <a href="#!" className="brand-logo">React</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><NavLink to="/profile" activeClassName={s.active}>Профиль</NavLink></li>
                        <li><NavLink to="/dialogs" activeClassName={s.active}>Сообщения</NavLink></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><NavLink to="/profile" activeClassName={s.active}>Профиль</NavLink></li>
                <li><NavLink to="/dialogs" activeClassName={s.active}>Сообщения</NavLink></li>
            </ul>
        </div>
    )
}

export default Header;