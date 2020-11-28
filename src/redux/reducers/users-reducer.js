const initState = {
    users: []
}

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(item => item.id === action.id && item.followed === false ? { ...item, followed: true } : item)
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(item => item.id === action.id && item.followed === true ? { ...item, followed: false } : item)
            }

        case 'SET-USER':
            return {
                ...state,
                users: [ ...state.users, ...action.user]
            }
        default:
            return state
    }
}

export default usersReducer;