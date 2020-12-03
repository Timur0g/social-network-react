import { v4 as uuid } from "uuid";

const ADD_POST = 'ADD_POST'
const CHANGE_TEXT = 'CHANGE_TEXT'
const SET_USER_PROFILE ='SET_USER_PROFILE'

const initialState = {
    posts: [{ id: 'dewfwr343fegr-54', value: 'its my post' }, { id: 'qseffwr-55gfrgr-54', value: 'hellohello' }],
    text_area_text: '',
    userProfile: undefined
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [{ id: uuid(), value: state.text_area_text } ,...state.posts],
                text_area_text: ''
            }
        case CHANGE_TEXT:
            switch (action.text_area) {
                case 'profile_post':
                    return {
                        ...state,
                        text_area_text: action.value
                    }
                default:
                    return state;
            }
        case SET_USER_PROFILE:
            return {...state, userProfile: action.user}
        default:
            return state;
    }

}

export const addPost = () => {return {type: ADD_POST}};
export const changeText = (value) => {return {type: CHANGE_TEXT, value: value, text_area: 'profile_post'}};
export const setUserProfile = user => {return {type: SET_USER_PROFILE, user: user}};