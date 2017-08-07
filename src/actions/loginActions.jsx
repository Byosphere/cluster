import axios from 'axios';
import { SET_CURRENT_USER } from "../Constants";

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    }
}

export function login (data){
    return dispatch => {
        return axios.post('/api/auth', data).then(res => {
            const token = res.data.token;
            localStorage.setItem('jwtToken', token);
            dispatch(setCurrentUser());

        }).catch(function(error) {
            return Promise.reject(error.message);
        });
    }

}

export function logout() {
    return dispatch => {
        localStorage.removeItem('jwtToken');
        //setAuthorizationToken(false)
        dispatch(setCurrentUser({}));
        
    }
}