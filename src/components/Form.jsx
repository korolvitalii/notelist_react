import React from 'react'
// import { reduxForm } from 'reduxForm';

const Form = ({handleForm}) => {
    return (
      <form onSubmit={handleForm}>
        <div className="form-row">
          <div className="form-group col-md-3">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" placeholder="Name"/>
          </div>

          <div className="form-group col-md-3">
            <label htmlFor="category">Category</label>
            <input type="text" className="form-control" placeholder="Category"/>
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="dates">Dates</label>
            <input type="text" className="form-control"  placeholder="Dates"/>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="content">Content</label>
            <textarea className="form-control" rows="3"></textarea>
          </div>
        </div>
        <button type="submit" className="btn btn-primary p-2 m-2">Add Note</button>
      </form>
    )
  }

// export default reduxForm({
//   form: 'newNote',
// })(Form);
