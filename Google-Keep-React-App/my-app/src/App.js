import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";
import Notes from "./components/Notes/Notes";
import Modal from "./components/Modal/Modal";

const NOTES = [];

console.log(
  NOTES.map((note) => {
    return note;
  })
);
const App = () => {
  const [notes, setNotes] = useState(NOTES);
  const [selectedNote, setSelectedNote] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addNote = (note) => {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  };
  const editNote = (editedNote) => {
    const newArray = notes.map(note => {
      console.log("before",note)
      if(editedNote.id === note.id) {
        note.title = editedNote.title
        note.text = editedNote.text
      }
      console.log("after",note)
      return note;
    })
    console.log(newArray)
  }
  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => id !== note.id);
    });
  };
  const toggleModal = () => {
    // open or close the modal based on previous state - setIsModalOpen
    setIsModalOpen((prevState) => {
      return !prevState;
    });
  };
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Form addNote={addNote} />
      <Notes
        notes={notes}
        deleteNote={deleteNote}
        toggleModal={toggleModal}
        setSelectedNote={setSelectedNote}
      />
      {isModalOpen && (
        <Modal isModalOpen={isModalOpen} selectedNote={selectedNote} toggleModal={toggleModal} editNote={editNote} />
      )}
    </div>
  );
};

export default App;

// use Arrow functions

// regular functions are calleable and constructible
// this inside a regular function is bound to the function
// arrow function only one return statement
