
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USER = 'SET_USER'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_PAGE = 'SET_PAGE'
const ACTIVE_PRELOADER = 'FOLLOW'
const initialState = {
    users: [],
    page: 1,
    totalCount: null,
    preloader: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(item => item.id === action.id && item.followed === false ? { ...item, followed: true } : item)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(item => item.id === action.id && item.followed === true ? { ...item, followed: false } : item)
            }

        case SET_USER:
            return {
                ...state,
                users: action.user
            }

        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.count
            }
        case SET_PAGE:
            return {
                ...state,
                page: action.page
            }

        case ACTIVE_PRELOADER:
            return {
                ...state,
                preloader: action.boolean
            }
        default:
            return state
    }
}

export const follow = id => {return { type: FOLLOW, id: id }}
export const unfollow = id => {return { type: FOLLOW, id: id }}
export const setUser = user => {return { type: SET_USER, user: user }}
export const setTotalCount= count => {return { type: SET_TOTAL_COUNT, count: count }}
export const setPage= page => {return { type: SET_PAGE, page: page }}
export const activePreloader= boolean => {return { type: ACTIVE_PRELOADER, boolean: boolean }}


export default usersReducer;