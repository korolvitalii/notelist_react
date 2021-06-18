import React from 'react';
import { connect } from 'react-redux';
// import _ from 'lodash';
import { archiveNotes, removeNotes, toggleForm } from '../actions/index.js';
// import Form from './Form';
import  { counterCategoriesType } from '../helpers/index.js';
import 'font-awesome/css/font-awesome.min.css';

const mapStateToProps = ({ notes, archive, categories, formState, form }) => {
    const props = { 
      notes,
      archive,
      categories,
      formState,
      form,
    };
    return props;
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

  const TableBodyNotesBox = ({ notes, handleArchivateTask, handleRemoveNote }) => {
    if (notes.length === 0) {
      return null;
    }
    return (
      <tbody>
        {notes.map((note) => {
        const { name, created, category, content, dates, id } = note;
         return (
       <tr key={id}>
        <th scope="row">{name}</th>
        <td>{created}</td>
        <td>{category}</td>
        <td>{content}</td>
        <td>{dates}</td>
        <th scope="col" className="w-25 p-3 text-right">
        <i className="p-1 bi bi-pencil"></i>        
        <i className="p-1 bi bi-archive" onClick={handleArchivateTask(note)}></i>
        <i className="p-1 bi bi-trash" onClick={handleRemoveNote(id)}></i>
      </th>
      </tr>
        );
      })
    }
      </tbody>
    );
  };
  
  const ButtonAddNewTask = ({ handleAddTask, handleAddNewNote }) => {
    return (
      <button type="button" className="btn btn-outline-primary p-2 m-2 float-right" onClick={handleAddNewNote}>Add note</button>
    )
  };

  const TableHeadSumCountCategories = () => {
    return (
      <thead className="thead-dark">
        <tr>
        <th scope="col">Note Category</th>
        <th scope="col">Active</th>
        <th scope="col">Archive</th>
        </tr>
      </thead>
      )
  };

  const TableBodySumCountCategories = ({ categories, notes, archive }) => {
    return (
      <tbody>
      {categories.map((category) => 
         <tr>
           <th scope="row">{category}</th>
           <td>{counterCategoriesType(category, notes)}</td>
           <td>{counterCategoriesType(category, archive)}</td>
        </tr>
             )}
      </tbody>
    )
  };
 
  const App = (state) => {
    const { dispatch, notes, archive, categories, formState } = state;
    // console.log(state);

    const handleArchivateTask = (note) => () => {
      dispatch(archiveNotes(note));
    };

    const handleRemoveNote = (id) => () => {
      dispatch(removeNotes(id));
    };
    
    const handleAddNewNote = () => {
      dispatch(toggleForm(formState));
    };

    const handleForm = (e) => {
      e.preventDefault();
      const { target } = e;
      const formData = new FormData(target);

      dispatch(toggleForm(formState));
    };

    return (
      <div>
        <table className="table">
        <TableHead state={state}/>
        <TableBodyNotesBox notes={notes} handleArchivateTask={handleArchivateTask} handleRemoveNote={handleRemoveNote}/>
      </table>
      {!formState && <ButtonAddNewTask handleAddNewNote={handleAddNewNote}/>}
      {/* {formState && <Form handleForm={handleForm}/>} */}
      <table className="table">
        <TableHeadSumCountCategories/>
        <TableBodySumCountCategories categories={categories} notes={notes} archive={archive}/>
      </table>
    </div>  
    );
  };
  
  export default connect(mapStateToProps)(App);