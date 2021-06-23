import React from 'react';
// import { useForm } from 'react-hook-form';
import _ from 'lodash';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import {
  currentNote,
} from '../helpers/index.js';

const mapStateToProps = ({
  notes,
  formState,
  defaultValues,
}) => {
  const props = {
    notes,
    formState,
    defaultValues,
  };
  return props;
};

const actionCreators = {
  archiveNotes: actions.archiveNotes,
  removeNotes: actions.removeNotes,
  addDefaultNote: actions.addDefaultNote,
  toggleForm: actions.toggleForm,
  addNote: actions.addNote,
};

const TableNotesBox = ({
  notes, formState, archiveNotes, removeNotes, addDefaultNote, toggleForm,
}) => {
  if (notes.length === 0) {
    return null;
  }
  const handleArchivateNote = (note) => () => {
    archiveNotes(note);
  };

  const handleRemoveNote = (note) => () => {
    removeNotes(note);
  };

  const handleFormAddNewNote = (id) => () => {
    const current = currentNote(notes, id);
    addDefaultNote(current);
    toggleForm(formState);
  };

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

export default connect(mapStateToProps, actionCreators)(TableNotesBox);
