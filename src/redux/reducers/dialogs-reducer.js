import { v4 as uuid } from "uuid";

const ADD_MESSAGE = 'ADD_MESSAGE'
const CHANGE_TEXT = 'CHANGE_TEXT'

const initialState = {
    persons: [{ id: 'rerget-435-fg-gerg-5-f', name: 'Alex' }, { id: 'rer5-fg-ger-gerg-5-f', name: 'Ahmet' }],
    messages: [{ id: 'ret-5fg-gerg-5-f', value: 'Hello, msf' }, { id: 'vhyht-rfuuk-cvcfr-44-f', value: 'What you say?' }],
    text_area_text: '1'
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { id: uuid(), value: state.text_area_text }],
                text_area_text: ''
            }
        case CHANGE_TEXT:
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

export const addMessage = () => {return {type: ADD_MESSAGE}};
export const changeText = (value) => {return {type: CHANGE_TEXT, value: value, text_area: 'dialogs_message'}};
