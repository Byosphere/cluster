import axios from 'axios';
import { SET_AUTH_USER, API_URL } from "../Constants";
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';

export function setAuthUser(user) {
    return {
        type: SET_AUTH_USER,
        user
    }
}

export function login(state) {
    return dispatch => {
        return axios.post(API_URL + 'login', state).then(res => {
            if (res.data.success) {
                const token = res.data.token;
                if (state.storage) {
                    localStorage.setItem('jwtToken', token);
                }
                setAuthorizationToken(token);
                dispatch(setAuthUser(res.data.user));
                return Promise.resolve();
            } else {
                return Promise.reject(new Error(res.data.message));
            }

        }).catch(function (error) {
            return Promise.reject(new Error(error.message));
        });
    }

}

export function getAuthUser() {
    if (!localStorage.jwtToken) return Promise.reject(new Error("No user connected"));
    var token = jwt.decode(localStorage.jwtToken);
    if(!token) return Promise.reject(new Error("Token error"));
    var userId = token.sub;
    if(!userId) return Promise.reject(new Error("Wrong user ID"));
    return axios.get(API_URL + 'user/' + userId).then(
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

export function logout() {
    return dispatch => {
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch(setAuthUser({}));

    }
}

export function signup(state) {
    return dispatch => {
        return axios.post(API_URL + 'register', state).then(res => {
            if (res.data.success) {
                const token = res.data.token;
                localStorage.setItem('jwtToken', token);
                setAuthorizationToken(token);
                dispatch(setAuthUser(res.data.user));
            } else {
                return Promise.reject(new Error(res.data.message));
            }

        }).catch(function (error) {
            return Promise.reject(new Error(error.message));
        });
    }
}

export function update(user) {
    return dispatch => {
        return axios.put(API_URL + 'user/'+user.id, user).then(res => {
            if (res.data.success) {
                let user = res.data.user;
                if (user) {
                    dispatch(setAuthUser(res.data.user));
                    return Promise.resolve(user);
                } else {
                    return Promise.reject(new Error(res.data.message));
                }
            } else {
                return Promise.reject(new Error(res.data.message));
            }

        }).catch(function (error) {
            return Promise.reject(new Error(error.message));
        });
    }
}