import React from "react";

const Note = ({ note }) => {
// let {id, title, desc, category, creation_time} = props;

  return (
        <div className="card note m-3" style={{width: "18rem"}}>
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.desc}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{note.category}</li>
          </ul>
          <div className="card-body d-flex justify-content-end">
            <a href="/" className="card-link">
            <button type="button" className="btn btn-outline-edit">Edit</button>
            </a>
            <a href="/" className="card-link">
            <button type="button" className="btn btn-outline-delete">Delete</button>
            </a>
          </div>
        </div>
  );
}


export default Note;