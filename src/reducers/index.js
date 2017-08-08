import { combineReducers } from 'redux';
import notification from './notificationReducer';
import auth from './auth';
import option from './option';

export default combineReducers({
    notification,
    auth,
    option
});