import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'


const MessageItem = (props) => {
    return (
        <div className="message_item">
            <div className={s.her}>{props.value}</div>
        </div>
    )
}
const PersonItem = (props) => {
    return (
        <div className="person_item">
            <NavLink to={props.id} className="flow-text">{props.name}</NavLink>
        </div>
    )
}

const Dialogs = (props) => {
    const changeText = (entitie, value) => {
        props.state.dispatch({ type: 'CHANGE-TEXT', entitie: entitie, value: value });
    }

    const addMessage = () => {
        props.state.dispatch({ type: 'ADD-MESSAGE' });
    }
    return (
        <div className="dialogs">
            <div className="row">
                <div className="col s7 push-s5">
                    <div className={s.wrap_message + "flow-text center"} >
                        {props.state.dialogs.data.messages.map(item => <MessageItem value={item.value} key={item.id} />)}
                    </div>
                    <textarea value={props.state.dialogs.entities.text_area_text } onChange={(e) => changeText('text_area_text_dialogs', e.target.value)}></textarea>
                    <button onClick={addMessage}>Send</button>

                </div>
                <div className="col s5 pull-s7 center">
                    {props.state.dialogs.data.persons.map(item => <PersonItem id={item.id} name={item.name} key={item.id} />)}
                </div>
            </div>
        </div>
    )
}
export default Dialogs;