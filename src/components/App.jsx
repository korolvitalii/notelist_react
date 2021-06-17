import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { updateNewTaskText, addTask, removeTask } from '../actions/index.js';
import 'font-awesome/css/font-awesome.min.css';

const mapStateToProps = ({ tasks, text }) => {
    const props = { 
      tasks,
      text
    };
    return props;
  };
  
  const TasksBody = ({ tasks }) => {
    if (tasks.length === 0) {
      return null;
    }
    return (
      <tbody>
        {tasks.map(({name, created, category, content, dates }) => 
        <tr>
        <th scope="row">{name}</th>
        <td>{created}</td>
        <td>{category}</td>
        <td>{content}</td>
        <td>{dates}</td>
        <th scope="col" className="w-25 p-3 text-right">
        <i className="p-1 bi bi-pencil"></i>        
        <i className="p-1 bi bi-archive"></i>
        <i className="p-1 bi bi-trash"></i>
      </th>
      </tr>
        )}
      </tbody>
    );
  };
  
  const TableHead = () => {
    return (
    <thead className="thead-dark">
      <tr>
      <th scope="col">Name</th>
      <th scope="col">Created</th>
      <th scope="col">Category</th>
      <th scope="col">Content</th>
      <th scope="col">Dates</th>
      <th scope="col" className="text-right">
        <i className="p-1 bi bi-archive"></i>
        <i className="p-1 bi bi-trash"></i>        
      </th>
      </tr>
    </thead>
    )
  };

  const TableHeadResult = () => {
    return (
      <thead className="thead-dark">
        <tr>
        <th scope="col">Name</th>
        <th scope="col">Active</th>
        <th scope="col">Archive</th>
        </tr>
      </thead>
      )
  };

  const ButtonAddNewTask = ({ handleAddTask }) => {
    return (
      <button type="button" className="btn btn-outline-primary p-2 m-2 float-right" onClick={handleAddTask}>Add note</button>
    )
  };

  const handleAddTask = () => {
    return (
      <form>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
          </div>
          <div class="form-group col-md-6">
           <label for="inputPassword4">Password</label>
            <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Sign in</button>
      </form>
     )
  };

  const App = (state) => {
    console.log(state);
    const { dispatch, tasks } = state;

    // const handleAddTask = (e) => {
    //   e.preventDefault();
    //   return (
    //     <Form />
    //   )
    // }
 
    return (
      <div>
        <table className="table">
        <TableHead state={state}/>
        <TasksBody tasks={tasks}/>
      </table>
      <ButtonAddNewTask handleAddTask={handleAddTask}/>
      <table className="table">
        <TableHeadResult/>
      </table>
    </div>  
    
    );
  };
  
  export default connect(mapStateToProps)(App);