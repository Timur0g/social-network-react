import React from 'react';
import s from './Dialogs.module.css'


const Dialogs = () => {
    return (
        <div className="dialogs">
            <div className="row">
                <div className="col s7 push-s5">
                    <div className={s.wrap_message + "flow-text center"} >
                        <div className={s.me}>Hello</div>
                        <div className={s.her}>Hello</div>
                    </div>
                </div>
                <div className="col s5 pull-s7 center">
                    <div className="flow-text">5-columns wide pulled to the left by 7-columns.</div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;