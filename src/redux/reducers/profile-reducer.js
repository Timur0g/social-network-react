import { v4 as uuid } from "uuid";
// uuid()

const profileState = {
    posts: [{ id: 'dewfwr343fegr-54', value: 'its my post' }, { id: 'qseffwr-55gfrgr-54', value: 'hellohello' }],
    text_area_text: '',
    userProfile: undefined
}

export const profileReducer = (state = profileState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                posts: [{ id: uuid(), value: state.text_area_text } ,...state.posts],
                text_area_text: ''
            }
        case 'CHANGE-TEXT':
            switch (action.text_area) {
                case 'profile_post':
                    return {
                        ...state,
                        text_area_text: action.value
                    }
                default:
                    return state;
            }
        case 'SET-USER-PROFILE':
            return {...state, userProfile: action.user}
        default:
            return state;
    }

}