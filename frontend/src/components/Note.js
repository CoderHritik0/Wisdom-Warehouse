import React from "react";

export default function Note() {
  return (
    <div className="container">
      <div className="mt-4">
        <div className="card note" style={{width: "18rem"}}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Category</li>
          </ul>
          <div className="card-body d-flex justify-content-end">
            <a href="#" className="card-link">
            <button type="button" className="btn btn-outline-edit">Edit</button>
            </a>
            <a href="#" className="card-link">
            <button type="button" className="btn btn-outline-delete">Delete</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
