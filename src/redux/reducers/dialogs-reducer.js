import { uuid } from 'uuidv4';
// uuid()

const dialogsState = {
    persons: [{ id: 'rerget-435-fg-gerg-5-f', name: 'Alex' }, { id: 'rer5-fg-ger-gerg-5-f', name: 'Ahmet' }],
    messages: [{ id: 'ret-5fg-gerg-5-f', value: 'Hello, msf' }, { id: 'vhyht-rfuuk-cvcfr-44-f', value: 'What you say?' }],
    text_area_text: ''
}

export const dialogsReducer = (state = dialogsState, action) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            state.messages.push({ id: uuid(), value: state.text_area_text });
            state.text_area_text = '';
            return state;
        case 'CHANGE-TEXT':
            switch (action.text_area) {
                case 'dialogs_message':
                    state.text_area_text = action.value
                    return state;
                default:
                    break
            }
        default:
            return state;
    }

}