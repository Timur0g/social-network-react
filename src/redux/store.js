import { dialogsReducer } from "./reducers/dialogs-reducer";
import { profileReducer } from "./reducers/profile-reducer"


const store = {
    state: {
        dialogs: {
            persons: [{id: 'rerget-435-fg-gerg-5-f',name: 'Alex'}, {id: 'rer5-fg-ger-gerg-5-f', name: 'Ahmet'}],
            messages: [{id: 'ret-5fg-gerg-5-f', value: 'Hello, msf'}, {id: 'vhyht-rfuuk-cvcfr-44-f', value: 'What you say?'}],
            text_area_text: ''
        },
        profile: {
            posts: [{id: 'dewfwr343fegr-54', value: 'its my post'}, {id: 'qseffwr-55gfrgr-54', value:'hellohello'}],
            text_area_text: ''
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch: (action) => {
        store.state.profile = profileReducer(store.state.profile, action);
        store.state.dialogs = dialogsReducer(store.state.dialogs, action)
        store._callSubscriber()
    }
}


export default store;