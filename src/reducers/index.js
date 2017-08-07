import { combineReducers } from 'redux';
import notification from './notificationReducer';
import auth from './auth';

export default combineReducers({
    notification,
    auth
});