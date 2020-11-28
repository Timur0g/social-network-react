const initState = {
    users: [
        {
            id: 1,
            photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/220px-Dmitry_Nagiev_2017_4.jpg',
            followed: false,
            fullName: 'Dmitry',
            status: 'I am a boss',
            location: { city: 'Minsk', country: 'Belarus' }
        },
        {
            id: 2,
            photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/220px-Dmitry_Nagiev_2017_4.jpg',
            followed: true,
            fullName: 'Sasha',
            status: 'I am a boss too',
            location: { city: 'Moscow', country: 'Russia' }
        },
        {
            id: 3,
            photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/220px-Dmitry_Nagiev_2017_4.jpg',
            followed: false,
            fullName: 'Andrew',
            status: 'I am a boss too',
            location: { city: 'Kiev', country: 'Ukraine' }
        }]
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
        default:
            return state
    }
}

export default usersReducer;