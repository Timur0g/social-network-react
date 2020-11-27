import { uuid } from 'uuidv4';
// uuid()

const profileState = {
    posts: [{ id: 'dewfwr343fegr-54', value: 'its my post' }, { id: 'qseffwr-55gfrgr-54', value: 'hellohello' }],
    text_area_text: ''
}

export const profileReducer = (state = profileState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            const obj = { id: uuid(), value: state.text_area_text };
            state.posts.unshift(obj);
            state.text_area_text = ''
            return state;
        case 'CHANGE-TEXT':
            switch (action.text_area) {
                case 'profile_post':
                    state.text_area_text = action.value
                    return state;
                default:
                    return state;
            }
        default:
            return state;
    }

}