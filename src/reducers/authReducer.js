
const INITIAL_STATE = {
    isSignedIn: null,
    creds: null,
    loginError: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return {...state, isSignedIn: true, creds: action.payload, loginError: null }
        case 'LOGIN_FAILURE':
            return {...state, isSignedIn: false, creds: null, loginError: action.payload }
        default:
            return state;
    }
}