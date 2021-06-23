import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';

const mapStateToProps = ({
  archive,
}) => {
  const props = {
    archive,
  };
  return props;
};

const actionCreators = {
  unarchiveNote: actions.unarchiveNote,
};

const TableArchiveNotes = ({ archive, unarchiveNote }) => {
  const handleUnarchiveNote = (note) => () => {
    unarchiveNote(note);
  };
  if (_.isEmpty(archive)) {
    return null;
  }
  return (
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
        {archive.map((n) => {
          const { name } = n;
          return (
            <tr key={_.uniqueId()}>
              <th scope="row">{name}</th>
              <th scope="col" className="w-25 p-3 text-right">
                <button type="button" className="btn btn-link custom" onClick={handleUnarchiveNote(n)}>
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
};

export default connect(mapStateToProps, actionCreators)(TableArchiveNotes);
