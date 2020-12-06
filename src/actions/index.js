
import history from '../history';

export const checkLogin = (formValues) => {
    return async (dispatch) => {
        
        if(formValues.username === 'raj' && formValues.password === 'raj')
        {
            console.log('Login Success!');
            localStorage.setItem('isSignedIn', true);
            localStorage.setItem('username', formValues.username );
            dispatch({ type: 'LOGIN_SUCCESS', payload: formValues.username });
            history.push('/dashboard');
        }
        else {
            const message = 'Invalid login credentials!'
            dispatch({ type: 'LOGIN_FAILURE', payload: message });
        }
    }
}