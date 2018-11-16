
import * as Types from './../constants/ActionsTypes';

const data = JSON.parse(
    localStorage.getItem('tasks')
);

const initialState = data ? data : [];

// Reducer get tasks
const myReducer = (state = [...initialState], action) => {
    switch (action.type) {
        case Types.ADDTASK:
            const newTask = {
                id: guid(),
                name: action.task.name,
                status: action.task.status
            }
            state = [...state, newTask];
            storeDataLocal(state);
            return [...state];

        case Types.DELETETASK:
            const { taskid = '' } = action;
            state = deleteItem(state, taskid);
            storeDataLocal(state);
            return [...state];

        case Types.UPDATE_STATUS_TASK:
            state = updateStatus(state, action.taskId);
            storeDataLocal(state);
            return [...state];

        case Types.UPDATE_TASK:
            console.log(action);
            state = editTasks(state, action.task);
            storeDataLocal(state);
            return [...state];
            
        default:
            return [...state];
    }
}

// generate UID data
const guid = () => {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}

const deleteItem = (arr = [], value = '') => {
    if (arr && arr.length) {
        const index = arr.map(e => e.id)
            .indexOf(value);
        (index > -1)
            && arr.splice(index, 1);
    } return arr;
}

const storeDataLocal = (data) => {
    localStorage.setItem(
        'tasks',
        JSON.stringify(data)
    );
}


const updateStatus = (tasks = [], id) => {
    if (tasks && tasks.length) {
        tasks.find(e => {
            if (e.id === id) {
                e.status = !e.status;
            }
        });
        return tasks;
    }
}

const editTasks = (tasks = [], dataEdit = {}) => {
    if (tasks && tasks.length) {
        tasks.find(e => {
            if (e.id === dataEdit.id) {
                e.name = dataEdit.name;
                e.status = dataEdit.status;
            }
        });
        return tasks;
    }
}

export default myReducer;