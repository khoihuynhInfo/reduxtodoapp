import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../redux/actions';

class TaskForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      status: false,
    }
  }

  componentWillMount() {
    const { edit = {} } = this.props;
    const {
      id = '',
      name = '',
      status = false,
    } = edit;
    this.setState({
      id: id,
      name: name,
      status: status
    });
  }

  // New next props edit pass into component
  componentWillReceiveProps(nextProps) {
    const { edit = {} } = nextProps;
    const {
      id = '',
      name = '',
      status = false,
    } = edit;
    this.setState({
      id: id,
      name: name,
      status: status
    });
  }

  // form change select status, input name, 
  onChange = (event) => {
    const target = event.target;
    const name = target.name;
    let value = target.value;

    if (name === 'status') {
      value = target.value
        === 'true'
        ? true
        : false;
    }
    this.setState({
      [name]: value
    });
  }

  closeAddTask = () => {
    this.props.closeAddTask();
  }


  // click submit form for add task 
  onSubmit = (event) => {
    event.preventDefault();
    if (this.props.edit.id) {
      this.props.onUpdateTask(this.state);
    } else {
      this.props.onAddTask(this.state);
    }
    this.props.closeAddTask();
  }

  clearForm = (event) => {
    event.preventDefault();
    this.setState({
      id: '',
      name: '',
      status: false
    });
  }

  render() {
    // console.log('props',this.props.edit);
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <span>
            <h3 className="panel-title"> {this.props.edit.id ? 'Edit Task' : 'Add Task'}
              <span onClick={this.closeAddTask}
                className="glyphicon glyphicon-remove text-right"
                style={{ cursor: 'pointer', float: 'right', fontSize: '12px' }}>
              </span>
            </h3>
          </span>
        </div>
        <div className="panel-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Status:</label>
              <select className="form-control"
                name="status"
                value={this.state.status}
                onChange={this.onChange}>onSubmit

                <option value={true}>Active</option>
                <option value={false}>DisActive</option>
              </select>
            </div>

            <span>
              <button className="btn btn-warning" type="submit">Save</button>
            </span>
            &nbsp;
            <span><button className="btn btn-danger"
              onClick={this.clearForm}>Cancel</button></span>
          </form>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    edit: state.edit
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTask: (task) => {
      dispatch(actions.addTask(task));
    },
    closeAddTask: () => {
      dispatch(actions.closeForm());
    },
    onUpdateTask: (task) => {
      dispatch(actions.updateTask(task));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
