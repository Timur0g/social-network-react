import { v4 as uuid } from "uuid";
// uuid()

const dialogsState = {
    persons: [{ id: 'rerget-435-fg-gerg-5-f', name: 'Alex' }, { id: 'rer5-fg-ger-gerg-5-f', name: 'Ahmet' }],
    messages: [{ id: 'ret-5fg-gerg-5-f', value: 'Hello, msf' }, { id: 'vhyht-rfuuk-cvcfr-44-f', value: 'What you say?' }],
    text_area_text: ''
}

export const dialogsReducer = (state = dialogsState, action) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            return {
                ...state,
                messages: [...state.messages, { id: uuid(), value: state.text_area_text }],
                text_area_text: ''
            }
        case 'CHANGE-TEXT':
            switch (action.text_area) {
                case 'dialogs_message':
                    return {
                        ...state,
                        text_area_text: action.value
                    }
                default:
                    return state
            }
        default:
            return state;
    }

}