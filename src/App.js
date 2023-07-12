import React, { useState } from "react";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import Notes from "./Notes";

function App() {
  function createNote(Notes, index) {
    return (
      <Note
        key={index}
        id={index}
        title={Notes.title}
        desc={Notes.desc}
        onDelete={deleteNote}
      />
    );
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((Notes, index) => {
        return index !== id;
      });
    });
  }

  const [Notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {Notes.map(createNote)}
      <Footer />
    </div>
  );
}
export default App;
