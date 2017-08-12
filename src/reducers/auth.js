import { SET_AUTH_USER } from '../Constants';
import isEmpty from 'lodash/isEmpty';

const initialState = {
    isAuthenticated:false,
    user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {

  case SET_AUTH_USER:
    return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user
    };

  default:
    return state;
  }
};
