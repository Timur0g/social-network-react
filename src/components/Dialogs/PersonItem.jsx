import React from 'react';
import { NavLink } from 'react-router-dom';

const PersonItem = (props) => {
    return (
        <div className="person_item">
            <NavLink to={props.id} className="flow-text">{props.name}</NavLink>
        </div>
    )
}

export default PersonItem;