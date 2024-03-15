import React from "react";
import Navbar from "../components/Navbar.js";
import Note from "../components/Note.js";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="note-holder mt-4">
          <div className="row">
          <div className="col-md-3">
            <Note />
          </div>
          <div className="col-md-3">
            <Note />
          </div>
          <div className="col-md-3">
            <Note />
          </div>
          <div className="col-md-3">
            <Note />
          </div>
          <div className="col-md-3">
            <Note />
          </div>
          <div className="col-md-3">
            <Note />
          </div>
          <div className="col-md-3">
            <Note />
          </div>
          <div className="col-md-3">
            <Note />
          </div>
          <div className="col-md-3">
            <Note />
          </div>
          <div className="col-md-3">
            <Note />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
