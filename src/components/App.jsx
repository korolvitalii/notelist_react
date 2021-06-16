import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { updateNewTaskText, addTask, removeTask } from '../actions/index.js';

const mapStateToProps = ({ tasks, text }) => {
    const props = { tasks, text };
    return props;
  };
  
  const TasksBox = ({ tasks, handleRemoveTask }) => {
    if (tasks.length === 0) {
      return null;
    }
    return (
      <div className="mt-3">
        <ul className="list-group">
          {tasks.map(({ id, text }) => (
            <li key={id} className="list-group-item d-flex">
              <span className="mr-auto">{text}</span>
              <button type="button" className="close" onClick={handleRemoveTask(id)}>
                <span>&times;</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  const App = ({ dispatch, text, tasks }) => {
    const handleAddTask = (e) => {
      e.preventDefault();
      const task = { text, id: _.uniqueId() };
      dispatch(addTask(task));
    };
  
    const handleRemoveTask = (id) => () => {
      dispatch(removeTask(id));
    };
  
    const handleUpdateNewTaskText = (e) => {
      dispatch(updateNewTaskText(e.target.value));
    };
  
    return (
      <div className="col-5">
        <form action="" className="form-inline" onSubmit={handleAddTask}>
          <div className="form-group mx-sm-3">
            <input type="text" required value={text} onChange={handleUpdateNewTaskText} />
          </div>
          <button type="submit" className="btn btn-primary btn-sm">Add</button>
        </form>
        <TasksBox tasks={tasks} handleRemoveTask={handleRemoveTask} />
      </div>
    );
  };
  
  export default connect(mapStateToProps)(App);