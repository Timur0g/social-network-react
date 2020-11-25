import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

const persons = [{id: 'rerget-435-fg-gerg-5-f',name: 'Alex'}, {id: 'rer5-fg-ger-gerg-5-f', name: 'Ahmet'}]
const messages = [{id: 'ret-5fg-gerg-5-f', value: 'Hello, msf'}, {id: 'vhyht-rfuuk-cvcfr-44-f', value: 'What you say?'}]

const MessageItem = (props) => {
    return(
        <div className="message_item">
            <div className={s.her}>{props.value}</div>
        </div>
    )
}
const PersonItem = (props) => {
    return(
        <div className="person_item">
            <NavLink to={props.id} className="flow-text">{props.name}</NavLink>
        </div>
    )
}

const Dialogs = () => {
    return (
        <div className="dialogs">
            <div className="row">
                <div className="col s7 push-s5">
                    <div className={s.wrap_message + "flow-text center"} >
                    {messages.map(item => <MessageItem value={item.value}/>)}
                    </div>
                    <form>
                        <textarea></textarea>
                        <button>Send</button>
                    </form>
                    
                </div>
                <div className="col s5 pull-s7 center">
                    {persons.map(item => <PersonItem id={item.id} name={item.name}/>)}
                </div>
            </div>
        </div>
    )
}
export default Dialogs;