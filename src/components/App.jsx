import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { useForm } from 'react-hook-form';
import {
  addNote,
  archiveNotes,
  removeNotes,
  unarchiveNote,
  toggleForm,
  addDefaultNote,
  getUniqueCategories,
} from '../actions/index.js';
import {
  counterCategoriesType,
  generateDate,
  currentNote,
} from '../helpers/index.js';
import 'font-awesome/css/font-awesome.min.css';
import '../style/index.css';

const mapStateToProps = ({
  notes,
  archive,
  categories,
  formState,
  form,
  defaultValues,
}) => {
  const props = {
    notes,
    archive,
    categories,
    formState,
    form,
    defaultValues,
  };
  return props;
};

const TableNotesBox = ({
  notes,
  handleArchivateNote,
  handleRemoveNote,
  handleFormAddNewNote,
}) => {
  if (notes.length === 0) {
    return null;
  }
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Created</th>
          <th scope="col">Category</th>
          <th scope="col">Content</th>
          <th scope="col">Dates</th>
          <th scope="col" className="text-right">
            <i className="p-1 bi bi-archive" />
            <i className="p-1 bi bi-trash" />
          </th>
        </tr>
      </thead>
      <tbody>
        {notes.map((note) => {
          const generateUniqueId = _.uniqueId();
          note.id = Number(generateUniqueId);
          const {
            name, created, category, content, dates, id,
          } = note;
          return (
            <tr key={id}>
              <th scope="row">{name}</th>
              <td>{created}</td>
              <td>{category}</td>
              <td>{content}</td>
              <td>{dates}</td>
              <th scope="col" className="w-25 p-3 text-right">
                <button type="button" className="btn btn-link custom" onClick={handleFormAddNewNote(id)}>
                  <i
                    className="p-1 bi bi-pencil"
                  />
                </button>
                <button type="button" className="btn btn-link custom" onClick={handleArchivateNote(note)}>
                  <i
                    className="p-1 bi bi-archive"
                  />
                </button>
                <button type="button" className="btn btn-link custom" onClick={handleRemoveNote(note)}>
                  <i
                    className="p-1 bi bi-trash"
                  />
                </button>
              </th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const ButtonAddNewTask = ({ handleAddNewNote }) => (
  <button
    type="button"
    className="btn btn-dark p-2 m-2 float-right"
    onClick={handleAddNewNote}
  >
    Add note
  </button>
);

const TableSummary = ({ categories, notes, archive }) => (
  <table className="table">
    <thead className="thead-dark">
      <tr>
        <th scope="col">Note Category</th>
        <th scope="col">Active</th>
        <th scope="col">Archive</th>
      </tr>
    </thead>
    <tbody>
      {categories.map((category) => (
        <tr key={_.uniqueId()}>
          <th scope="row">{category}</th>
          <td>{counterCategoriesType(category, notes)}</td>
          <td>{counterCategoriesType(category, archive)}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const TableArchiveNotes = ({ archive, handleUnarchiveNote }) => (
  <table className="table">
    <thead className="thead-dark">
      <tr>
        <th scope="col">Archive Notes Name</th>
        <th scope="col" className="w-25 p-3 text-right">
          <i className="bi bi-box-arrow-up" />
        </th>
      </tr>
    </thead>
    <tbody>
      {archive.map((note) => {
        const { name } = note;
        return (
          <tr key={_.uniqueId()}>
            <th scope="row">{name}</th>
            <th scope="col" className="w-25 p-3 text-right">
              <button type="button" className="btn btn-link custom" onClick={handleUnarchiveNote(note)}>
                <i
                  className="bi bi-box-arrow-up"
                />
              </button>
            </th>
          </tr>
        );
      })}
    </tbody>
  </table>
);

const Form = ({ handleFormAddNewNote, defaultValues }) => {
  const { register, handleSubmit } = useForm({
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(handleFormAddNewNote)}>
      <div className="form-row">
        <div className="form-group col-md-3">
          <label htmlFor="name">
            Name
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              {...register('name')}
            />
          </label>
        </div>

        <div className="form-group col-md-3">
          <label htmlFor="category">
            Category
            <input
              type="text"
              className="form-control"
              placeholder="Category"
              {...register('category')}
            />
          </label>
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="dates">
            Dates
            <input
              type="text"
              className="form-control"
              placeholder="Dates"
              {...register('dates')}
            />
          </label>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="content">
            Content
            <textarea
              className="form-control"
              rows="3"
              {...register('content')}
            />
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-dark p-2 m-2">
        Add Note
      </button>
    </form>
  );
};

const App = (state) => {
  const {
    dispatch, notes, archive, categories, formState, defaultValues,
  } = state;

  useEffect(() => dispatch(getUniqueCategories(notes)));

  const handleArchivateNote = (note) => () => {
    dispatch(archiveNotes(note));
  };

  const handleRemoveNote = (note) => () => {
    dispatch(removeNotes(note));
  };

  const handleAddNewNote = () => {
    dispatch(toggleForm(formState));
    dispatch(getUniqueCategories(notes));
  };

  const handleUnarchiveNote = (note) => () => {
    dispatch(unarchiveNote(note));
  };

  const handleFormAddNewNote = (id) => (data) => {
    if (id) {
      console.log(id);
      const current = currentNote(notes, id);
      dispatch(addDefaultNote(current));
      dispatch(toggleForm(formState));
    } else {
      const currentDate = generateDate();
      data.created = currentDate;
      data.id = _.uniqueId();
      dispatch(toggleForm(formState));
      dispatch(addNote(data));
    }
  };

  return (
    <>
      <TableNotesBox
        state={state}
        notes={notes}
        handleArchivateNote={handleArchivateNote}
        handleRemoveNote={handleRemoveNote}
        handleFormAddNewNote={handleFormAddNewNote}
      />
      {!formState && <ButtonAddNewTask handleAddNewNote={handleAddNewNote} />}
      {formState && (
        <Form
          handleFormAddNewNote={handleFormAddNewNote()}
          defaultValues={defaultValues}
        />
      )}
      <TableSummary categories={categories} notes={notes} archive={archive} />
      {!_.isEmpty(archive) && (
        <TableArchiveNotes
          archive={archive}
          handleUnarchiveNote={handleUnarchiveNote}
        />
      )}
    </>
  );
};

export default connect(mapStateToProps)(App);
