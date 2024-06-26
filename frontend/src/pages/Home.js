import React from "react";
import { useNotesContext } from '../hooks/useNotesContext'
import Note from "../components/Note.js";
import AddNote from "../components/AddNote.js";
import { useEffect } from "react";

const Home = () => {
  const {notes, dispatch} = useNotesContext();

  useEffect(() => {
    const fetchNotes = async () => {
      // console.log("Fetching notes");
      const response = await fetch("/api/notes");
      const json = await response.json();

      if (response.ok) {
        dispatch({type: 'SET_NOTE', payload: json})
      }
    };

    fetchNotes();
  }, [dispatch]);

  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="note-holder col-md-9">
            <div className="row">{notes && notes.map((note) => <Note key={note._id} note={note} />)}</div>
          </div>
          <div className="col-md-3">
            <AddNote />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
