
import * as Types from './../constants/ActionsTypes';

const initialState = false;

// Reducer get tasks
const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.TOGGLE_FORM:
            return !state;
        case Types.OPEN_FORM:
            return true;
        case Types.CLOSE_FORM:
            return false;
        default:
            return state;
    }
}

export default myReducer;