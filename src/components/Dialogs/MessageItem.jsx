import React from 'react';
import s from './Dialogs.module.css'


const MessageItem = (props) => {
    return (
        <div className="message_item">
            <div className={s.her}>{props.value}</div>
        </div>
    )
}

export default MessageItem;