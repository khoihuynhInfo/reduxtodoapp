import React, { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import * as actions from './../redux/actions/index';

class TaskList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fillterName: '',
            fillterStatus: 0
        }
    }

    onChange = (event) => {
        const {
            fillterName = '',
            fillterStatus = 0
        } = this.state;
        const target = event.target;
        const name = target.name;
        const value = (
            target.value === '0'
            || target.value === '1'
            || target.value === '-1'
        )
            ? parseInt(target.value)
            || 0
            : target.value;
        this.setState({ [name]: value });

        this.props.onFillterList({
            fillterName: name
                === 'fillterName'
                ? value
                : fillterName,
            fillterStatus: name
                === 'fillterStatus'
                ? value
                : fillterStatus,
        });

    }

    // search keywork
    search = (tasks = [], keywork = '') => {
        return (tasks
            && tasks.length
            && keywork
        ) ? [...tasks].filter(task => {
            return (
                task.name
                    .toLowerCase()
                    .indexOf(keywork)
                !== -1
                || task.name
                    .toUpperCase()
                    .indexOf(keywork)
                !== -1
            );
        }) : tasks;
    }
    // sort Name
    sortName = (tasks = [], kindSort = 0) => {
        return (kindSort === 0)
            ? [...tasks].sort((a, b) => { // a -> z
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if (nameA > nameB) return 1;
                else if (nameA < nameB) return -1;
                else return 0;
            })
            : [...tasks].sort((a, b) => { // z -> a
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if (nameA < nameB) return 1;
                else if (nameA > nameB) return -1;
                else return 0;
            });
    }
    // Fillter
    onFillter(dataFilter, tasks) {
        let taskFillter = [];
        const {
            fillterName = '',
            fillterStatus = 0
        } = dataFilter;

        if (tasks && tasks.length) {
            switch (fillterStatus) {
                case 1: // Active
                    taskFillter = [...tasks].filter(task => {
                        return (
                            task.name.toLowerCase()
                                .indexOf(fillterName)
                            !== -1
                            && task.status
                        );
                    });
                    break;
                case -1: // DisActive
                    taskFillter = [...tasks].filter(task => {
                        return (
                            task.name.toLowerCase()
                                .indexOf(fillterName)
                            !== -1
                            && !task.status
                        );
                    });
                    break;
                default: // All
                    taskFillter = [...tasks].filter(task => {
                        return (
                            task.name.toLowerCase()
                                .indexOf(fillterName)
                            !== -1
                        );
                    });
            }
        }

        return taskFillter;
    }

    render() {

        let tasks = this.onFillter(this.props.fillter, this.props.tasks);
        tasks = this.search(this.props.tasks, this.props.keywork);
        tasks = this.sortName(this.props.tasks, this.props.sort);

        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                            <th scope="col">Tool</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"></th>

                            <td><input
                                name="fillterName"
                                value={this.state.fillterName}
                                onChange={this.onChange}
                                type="text"
                                className="form-control"
                                placeholder="Username" />
                            </td>
                            <td>
                                <div className="form-group">
                                    <select
                                        onChange={this.onChange}
                                        name="fillterStatus"
                                        className="form-control"
                                        value={this.state.fillterStatus}>

                                        <option value={0}>All</option>
                                        <option value={1}>Active</option>
                                        <option value={-1}>DisActive</option>
                                    </select>
                                </div>
                            </td>

                            <td></td>
                        </tr>

                        {/* TASK ITEM */}
                        {
                            tasks.map((task, index) => {
                                return (
                                    <TaskItem
                                        key={index}
                                        task={task}
                                        index={index}
                                    />
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        isDisplayForm: state.isDisplayForm,
        keywork: state.search,
        sort: state.sort,
        fillter: state.fillter
    }
}

const mapDisPatchToProps = (dispatch) => {
    return {
        onFillterList: (fillter) => {
            dispatch(actions.fillterTask(fillter));
        }
    }
}

export default connect(mapStateToProps, mapDisPatchToProps)(TaskList);
