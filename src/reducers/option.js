import { SET_SIDEBAR_POSITION } from '../Constants';

const initialState = {
    position: 'left'
};

export default (state = initialState, action) => {
    switch (action.type) {

        case SET_SIDEBAR_POSITION:
            return {
                position:action.position
            };

        default:
            return state;
    }
}