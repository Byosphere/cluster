'use strict';
import { Store } from 'flux/utils';
import ActionTypes from '../Constants';
import Dispatcher from '../Dispatcher';

class HeaderStore extends Store {
    constructor(Dispatcher) {
        super(Dispatcher);
    }

    __onDispatch(actionType) {
        console.log(actionType);
        this.__emitChange();
    }
}

export default new HeaderStore(Dispatcher);