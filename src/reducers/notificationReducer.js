import { SEND_NOTIFICATION } from '../Constants';

export default function notification(state = {}, action) {
    switch (action.type) {
        case SEND_NOTIFICATION:
            return Object.assign({}, state, {
                message: action.message,
                level: action.level
            });

        default:
            console.debug('notification reducer :: hit default', action.type);
            return state;
    }
}