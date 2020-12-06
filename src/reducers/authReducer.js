
const INITIAL_STATE = {
    isSignedIn: localStorage.getItem('isSignedIn') ? true : null,
    username: localStorage.getItem('username') ? localStorage.getItem('username') : null,
    loginError: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return {...state, isSignedIn: true, username: action.payload, loginError: null }
        case 'LOGIN_FAILURE':
            return {...state, isSignedIn: false, username: null, loginError: action.payload }
        default:
            return state;
    }
}