import * as Types from './../constants/ActionsTypes';

const initialState = '';

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.SEARCHTASK:
            return action.keywork;
        default:
            return state;
    }
}

export default myReducer;