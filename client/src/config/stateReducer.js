// eslint-disable-next-line import/no-anonymous-default-export
export default function (state, action) {
    switch(action.type) {
        case "setLoggedInUser": {
            return {
                ...state,
                loggedInUser: action.data
            }
        }
        case "setBlogPosts": {
            return {
                ...state, 
                blogPosts: action.data
            }
        }
        case "setError": {
            return {
                ...state,
                error: action.data
            }
        }
        case "setUserProfile": {
            return {
                ...state,
                userProfile: action.data
            }
        }
        default:
            return state
    }
}