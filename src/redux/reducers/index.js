import { combineReducers } from 'redux';
import tasks from './tasks';
import sort from './sort';
import isDisplayForm from './isDisplayForm';
import search from './search';
import fillter from './fillter';
import edit from './edit';

const myReducer = combineReducers({
    tasks,
    isDisplayForm,
    search,
    sort,
    fillter,
    edit
});

export default myReducer;