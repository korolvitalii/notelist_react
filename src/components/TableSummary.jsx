import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import {
  counterCategoriesType,
} from '../helpers/index.js';

const mapStateToProps = ({
  notes,
  archive,
  categories,
}) => {
  const props = {
    notes,
    archive,
    categories,
  };
  return props;
};

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

export default connect(mapStateToProps)(TableSummary);
