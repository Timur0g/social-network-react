import React from 'react'

import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <div className="nav-wrapper  blue darken-3">
                    <a href="#!" className="brand-logo">Logo</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="/profile">Профиль</a></li>
                        <li><a href="/dialogs">Сообщения</a></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><a href="/profile">Профиль</a></li>
                <li><a href="/dialogs">Сообщения</a></li>
            </ul>
        </div>
    )
}

export default Header;