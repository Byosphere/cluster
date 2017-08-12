import axios from 'axios';
import { SET_AUTH_USER, API_URL } from "../Constants";
import setAuthorizationToken from '../Utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';

export function setAuthUser(user) {
    return {
        type: SET_AUTH_USER,
        user
    }
}

export function login (state){
    return dispatch => {
        return axios.post(API_URL+'login', state).then(res => {
            if(res.data.success) {
                const token = res.data.token;
                if(state.storage) {
                    localStorage.setItem('jwtToken', token);
                }
                setAuthorizationToken(token);
                dispatch(setAuthUser(jwt.decode(token)));
            } else {
                return Promise.reject(new Error (res.data.message));
            }

        }).catch(function(error) {
            return Promise.reject(new Error (error.message));
        });
    }

}

export function logout() {
    return dispatch => {
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch(setAuthUser({}));
        
    }
}