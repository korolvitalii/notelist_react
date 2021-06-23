import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';

const mapStateToProps = ({
  notes,
  formState,
}) => {
  const props = {
    notes,
    formState,
  };
  return props;
};

const actionCreators = {
  toggleForm: actions.toggleForm,
  getUniqueCategories: actions.getUniqueCategories,
};

const ButtonAddNewTask = ({
  notes, formState, toggleForm, getUniqueCategories,
}) => {
  const handleAddNewNote = () => {
    toggleForm(formState);
    getUniqueCategories(notes);
  };

  if (formState) {
    return null;
  }
  return (
    <button
      type="button"
      className="btn btn-dark p-2 m-2 float-right"
      onClick={handleAddNewNote}
    >
      Add note
    </button>
  );
};

export default connect(mapStateToProps, actionCreators)(ButtonAddNewTask);
