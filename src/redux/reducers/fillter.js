import * as Types from './../constants/ActionsTypes';

const initialState = {
    fillterName: '',
    fillterStatus: 0
}

const myReducer = (state = initialState, action) => {

    switch (action.type) {
        case Types.FILLTERTASK:
            return {
                fillterName: action.fillter.fillterName,
                fillterStatus: action.fillter.fillterStatus,
            }
        default:
            return state;

    }
}
export default myReducer;
