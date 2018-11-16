import * as Types from './../constants/ActionsTypes';

const initialState = 0;
// 0 up, 1 down

const myReducer = (state = initialState, action) => {   
    switch (action.type) {
        case Types.SORTTASK:
            return action.sort;
        default:
            return state;
    }
}



export default myReducer;