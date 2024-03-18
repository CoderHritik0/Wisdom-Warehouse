import React from "react";
import Note from "../components/Note.js";
import { useEffect, useState } from 'react';

const Home = () => {

  const [notes, setNotes] = useState(null)
  useEffect(() => {
    const fetchNotes = async () => {
      // console.log("Fetching notes");
      const response = await fetch('/api/notes');
      const json = await response.json();

      if(response.ok){
        setNotes(json);
        // console.log(json);
      }
    }

    fetchNotes();
  
  }, [])
  

  return (
    <div>
      <div className="container">
        <div className="note-holder mt-4">
          <div className="row">
            {notes && notes.map((note) => (
              <Note key={note._id} note={note} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
