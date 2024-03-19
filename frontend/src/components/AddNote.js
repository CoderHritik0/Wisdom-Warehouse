import React from "react";

function AddNote() {
  return (
    <form className="create sticky-top p-3">
      <h3>Add New Note</h3>
      <div className="form-floating mb-3">
        <input type="text" className="form-control focus-ring focus-ring-light" id="exampleFormControlInput" />
        <label for="exampleFormControlInput1" className="form-label">
          Note Title:
        </label>
      </div>
      <div className="form-floating mb-3">
        <textarea className="form-control focus-ring focus-ring-light" id="exampleFormControlTextarea1" rows="3"></textarea>
        <label for="exampleFormControlTextarea1" className="form-label">
          Descrption:
        </label>
      </div>

      <div className="mb-3">
      <select className="form-select focus-ring focus-ring-light">
        <option selected>Select Category</option>
        <option value="college">College</option>
        <option value="office">Office</option>
        <option value="personal">Personal</option>
      </select>
      </div>

      <button type="button" className="btn btn-outline-add">Add Note</button>
    </form>
  );
}

export default AddNote;
