import axios from 'axios';
import { API_URL } from "../Constants";

export function userSignupRequest(userData) {
    return dispatch => {
        return axios.post('api/users', userData);
    }
}

export function getUserById(userid) {

    return dispatch => {
        return axios.get(API_URL+'user/'+userid).then(
            (res) => {
                let user = res.data.user;
                if(user) {
                    return Promise.resolve(user);
                } else {
                    return Promise.reject(new Error (res.data.message));
                }
            }
        ).catch(function(err) {
            return Promise.reject(new Error (err.message));
        });
    }
}

//TODO : save user
export function saveUser(user) {
    return dispatch => {
        return Promise.resolve(user);
    }
}