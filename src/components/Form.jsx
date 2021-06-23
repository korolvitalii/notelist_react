import React from 'react';
import { useForm } from 'react-hook-form';
import _ from 'lodash';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import {
  generateDate,
} from '../helpers/index.js';

const mapStateToProps = ({
  notes,
  defaultValues,
  formState,
}) => {
  const props = {
    notes,
    defaultValues,
    formState,
  };
  return props;
};

const actionCreators = {
  addDefaultNote: actions.addDefaultNote,
  toggleForm: actions.toggleForm,
  addNote: actions.addNote,
};

const Form = ({
  defaultValues, formState, addNote, toggleForm,
}) => {
  if (!formState) {
    return null;
  }
  const { register, handleSubmit } = useForm({
    defaultValues,
  });
  const handleFormAddNewNote = (data) => {
    const currentDate = generateDate();
    data.created = currentDate;
    data.id = _.uniqueId();
    toggleForm(formState);
    addNote(data);
  };
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

export default connect(mapStateToProps, actionCreators)(Form);
