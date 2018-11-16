import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import { connect } from 'react-redux';
import * as actions from './redux/actions/index';

class App extends Component {

  constructor(props) {
    super(props);
  }

  // fill all, fill active, fill disactive
  fillterList = (data) => {
    this.setState({
      dataFilter: data
    });
  }

  addTask = () => {
    this.props.openToggleForm();
    this.props.onClearDataEditForm();
  }

  closeAddTask = () => {
    this.props.closeToggleForm();
  }

  render() {
    const elementTaskForm = this.props.isDisplayForm
      ? <TaskForm />
      : '';
    return (
      <div>
        <div className="container">

          <div className="text-center">
            <h1>Management Task</h1><hr />
          </div>

          <div className="row">
            {/* FORM */}
            <div className="col-lg-4 col-md-6">
              {elementTaskForm}
            </div>
            {/* button add job */}

            <div className={
              this.props.isDisplayForm ? 'col-lg-8 col-md-6' : 'col-lg-12 col-md-12'
            } >
              <span>
                <button className="btn btn-primary" onClick={this.addTask}>
                  <span className="glyphicon glyphicon-plus" aria-hidden="true">
                  </span> Add task
                </button>
              </span>
              <br />
              <br />
              {/* Search & Sort */}
              <Control />
              <br />
              {/* Table */}
              <TaskList />
            </div>
          </div>
        </div>

      </div >
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.isDisplayForm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openToggleForm: () => {
      dispatch(actions.openForm());
    },
    closeToggleForm: () => {
      dispatch(actions.closeForm());
    },
    onClearDataEditForm: () => {
      dispatch(actions.clearDataEdit());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
