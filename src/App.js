import "./App.css";
import Sidebar from "./components/Sidebar";
import MainScreen from "./components/Main";
import EditNote from "./components/EditNote";
import { useState, useEffect } from "react";
import uuid from "react-uuid";
// import uuid  from 'react';

function App() {
  const [notes, setNotes] = useState(localStorage.notes ? JSON.parse(localStorage.notes) : []);
  const [archivedNotes, setArchivedNotes] = useState(localStorage.archivedNotes ? JSON.parse(localStorage.archivedNotes) : []);
  const [activeNote, setActiveNote] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showMain, setShowMain] = useState(true);
  
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem("archivedNotes", JSON.stringify(archivedNotes));
  }, [archivedNotes]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    };
    console.log(newNote);
    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };
  
  const deleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  const archiveNote = (idToArchive) => {
    const addToArchive = notes.find((note)=> note.id=idToArchive);
    setArchivedNotes([addToArchive,...archivedNotes]);
    setNotes(notes.filter((note) => note.id !== idToArchive));
  };

  const unarchiveNote = (idToUnarchive) => {
    const addToNotes = archivedNotes.find((note) => note.id === idToUnarchive);
    setArchivedNotes(archivedNotes.filter((note) => note.id !== idToUnarchive));
    setNotes([addToNotes,...notes]);
  };

  const updateNote = (updatedNote) => {
    const updatedNotes = notes.map((note)=> {
      if (note.id === updatedNote.id){
        return updatedNote;
      }
      return note;
    })
    setNotes(updatedNotes);
  };

  return (
    <div className="App">
      <Sidebar
        notes={notes}
        archivedNotes={archivedNotes}
        onAddNote={onAddNote}
        deleteNote={deleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
        setShowEdit={setShowEdit}
        setShowMain={setShowMain}
        archiveNote={archiveNote}
        unarchiveNote={unarchiveNote}
      ></Sidebar>
      <div className="screen d-flex align-items-center justify-content-center">
        
        {showMain && <MainScreen actNote={getActiveNote()}></MainScreen>}
        
        {showEdit &&  <EditNote
            activeNote={getActiveNote()}
            setShowEdit={setShowEdit}
            setShowMain={setShowMain}
            updateNote={updateNote}
          ></EditNote>
        }
      </div>
    </div>
  );
}

export default App;
