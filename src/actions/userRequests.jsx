import axios from 'axios';
import { API_URL } from "../Constants";

export function userSignupRequest(state) {
    return dispatch => {
        return axios.post(API_URL + 'register', state).then(res => {
            if (res.data.success) {
                const token = res.data.token;
                if (state.storage) {
                    localStorage.setItem('jwtToken', token);
                }
                setAuthorizationToken(token);
                dispatch(setAuthUser(jwt.decode(token)));
            } else {
                return Promise.reject(new Error(res.data.message));
            }

        }).catch(function (error) {
            return Promise.reject(new Error(error.message));
        });
    }
}

export function getUserById(userid) {

    return dispatch => {
        return axios.get(API_URL + 'user/' + userid).then(
            (res) => {
                let user = res.data.user;
                if (user) {
                    return Promise.resolve(user);
                } else {
                    return Promise.reject(new Error(res.data.message));
                }
            }
        ).catch(function (err) {
            return Promise.reject(new Error(err.message));
        });
    }
}

//TODO : save user
export function saveUser(user) {
    return dispatch => {
        return Promise.resolve(user);
    }
}