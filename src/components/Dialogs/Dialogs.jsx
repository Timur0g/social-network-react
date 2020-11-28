import React from 'react';
import s from './Dialogs.module.css'


const Dialogs = (props) => {
    return (
        <div className="dialogs">
            <div className="row">
                <div className="col s7 push-s5">
                    <div className={s.wrap_message + "flow-text center"} >
                        {props.messages}
                    </div>
                    <textarea value={props.text_area_text } onChange={props.changeText}></textarea>
                    <button onClick={props.addMessage} className="btn">Send</button>

                </div>
                <div className="col s5 pull-s7 center">
                    {props.persons}
                </div>
            </div>
        </div>
    )
}
export default Dialogs;