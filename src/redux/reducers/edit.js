import * as Types from './../constants/ActionsTypes';

const initialState = {
    id: '',
    name: '',
    status: false
};
// RESET, UPDATE

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.EDIT_ITEM:
            return {
                id: action.task.id,
                name: action.task.name,
                status: action.task.status
            };
        case Types.CLEAR_DATA_EDIT:
            return {
                id: '',
                name: '',
                status: false
            };
        default:
            return state;
    }
}

export default myReducer;