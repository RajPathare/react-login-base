
import history from '../history';

export const checkLogin = (formValues) => {
    return async (dispatch) => {
        
        if(formValues.username === 'raj' && formValues.password === 'raj')
        {
            console.log('Login Success!');
            localStorage.setItem('isSignedIn', true);
            dispatch({ type: 'LOGIN_SUCCESS', payload: formValues });
            history.push('/dashboard');
        }
        else {
            const message = 'Invalid login creds'
            dispatch({ type: 'LOGIN_FAILURE', payload: message });
        }
    }
}