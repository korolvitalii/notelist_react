import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TableNotesBox from './TableNotesBox.jsx';
import ButtonAddNewNote from './ButtonAddNewNote.jsx';
import TableSummary from './TableSummary.jsx';
import TableArchiveNotes from './TableArchiveNotes.jsx';
import Form from './Form.jsx';
import * as actions from '../actions/index.js';
import 'font-awesome/css/font-awesome.min.css';
import '../style/index.css';

const mapStateToProps = ({
  notes,
}) => {
  const props = {
    notes,
  };
  return props;
};
const actionCreators = {
  getUniqueCategories: actions.getUniqueCategories,
};

const App = ({ notes, getUniqueCategories }) => {
  useEffect(() => getUniqueCategories(notes));

  return (
    <>
      <TableNotesBox />
      <ButtonAddNewNote />
      <Form />
      <TableSummary />
      <TableArchiveNotes />
    </>
  );
};

export default connect(mapStateToProps, actionCreators)(App);
