import { uuid } from 'uuidv4';
// uuid()


export const dialogsReducer = (state, action) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            state.messages.push({ id: uuid(), value: state.text_area_text });
            state.text_area_text = '';
            return state;

            case 'CHANGE-TEXT':
                state.text_area_text = action.value
                return state;
        default:
            return state;
    }

}