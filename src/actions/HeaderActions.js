'use strict';

import Dispatcher from '../Dispatcher';
import ActionTypes from '../Constants';

const HeaderActions = {

    sendNotification(text) {

        Dispatcher.dispatch({
            type: ActionTypes.SEND_NOTIFICATION,
            text
        });
    }
}

export default HeaderActions;