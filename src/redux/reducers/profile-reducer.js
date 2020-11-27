import { uuid } from 'uuidv4';
// uuid()


export const profileReducer = (state, action) => {
    switch (action.type) {
        case 'ADD-POST':
            const obj = { id: uuid(), value: state.text_area_text };
            state.posts.unshift(obj);
            state.text_area_text = ''
            return state;
        case 'CHANGE-TEXT':
            state.text_area_text = action.value
            return state;
        default:
            return state;
    }

}