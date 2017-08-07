import axios from 'axios';

export function userSignupRequest(userData) {
    return dispatch => {
        return axios.post('api/users', userData);
    }
}

export function getUserById(userid) {
    return dispatch => {
        return axios.get('https://randomuser.me/api/', {params:{id:userid}}).then(
            (res) => {
                let user = res.data.results[0];
                if(user)
                    return user;
                else 
                    throw 'User not found';
            }
        ).catch(function(err) {
            return Promise.reject(error.message);
        });
    }
}