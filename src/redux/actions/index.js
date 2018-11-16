import * as Types from './../constants/ActionsTypes'

export const getTasks = () => {
    return {
        type: Types.GETTASKS
    };
}

export const addTask = (task) => {
    return {
        type: Types.ADDTASK,
        task
    }
}

export const deleteTask = (taskid) => {
    return {
        type: Types.DELETETASK,
        taskid
    }
}

export const sortTask = (sort) => {
    return {
        type: Types.SORTTASK,
        sort
    }
}

export const toggleForm = () => {
    return {
        type: Types.TOGGLE_FORM
    }
}
export const openForm = () => {
    return {
        type: Types.OPEN_FORM
    }
}
export const closeForm = () => {
    return {
        type: Types.CLOSE_FORM
    }
}

export const searchTask = (keywork = '') => {
    return {
        type: Types.SEARCHTASK,
        keywork
    }
}

export const fillterTask = (fillter = {}) => {
    return {
        type: Types.FILLTERTASK,
        fillter
    }
}

export const updateStatusTask = (taskId) => {
    return {
        type: Types.UPDATE_STATUS_TASK,
        taskId,
    }
}

export const getDataEdit = (task) => {
    return {
        type: Types.EDIT_ITEM,
        task,
    }
}

export const clearDataEdit = () =>{
    return {
        type: Types.CLEAR_DATA_EDIT,
    }
}

export const updateTask = (task) =>{
    return {
        type: Types.UPDATE_TASK,
        task
    }
}


