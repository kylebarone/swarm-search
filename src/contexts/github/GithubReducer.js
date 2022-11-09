const githubReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload,
                isLoading: false
            }
        case 'GET_USER_AND_REPOS':
            return {
                ...state,
                user: action.payload.user,
                user_repos: action.payload.repos,
                isLoading: false
            }
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: true,
            }
        case 'CLEAR_USERS':
            return {
                ...state,
                users: [],
                isLoading: false
            }
        default:
            return state
    }
}

export default githubReducer;