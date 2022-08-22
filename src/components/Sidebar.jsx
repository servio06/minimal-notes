import React from "react";
import { useState} from "react";
import uuid from "react-uuid";
function Sidebar({
  notes,
  archivedNotes,
  onAddNote,
  deleteNote,
  activeNote,
  setActiveNote,
  archiveNote,
  setShowEdit,
  unarchiveNote,
  setShowMain,
}) {
  const [typeOfNote, setTypeOfNote] = useState(true);
  const sortNotes = notes.sort((a, b) => b.lastModified - a.lastModified);
  const showActiveNotes = () => {
    if (!notes) {
      return (
        <div className="mt-3 d-flex justify-content-center">
          <h4>Empty</h4>
        </div>
      );
    } else {
      return sortNotes.map((note) => (
        <div
          key={uuid()}
          className={`sidebar-note-card card mt-2 ${
            note.id === activeNote && "active"
          }`}
          onClick={() => setActiveNote(note.id)}
        >
          <div className="card-body">
            <div className="sidebar-note-header d-flex justify-content-between">
              <h5 className="card-title">{note.title}</h5>
              <div className="button-group d-flex">
                <button
                  type="button"
                  className="btn btn-outline-dark button me-2"
                  onClick={() => archiveNote(note.id)}
                >
                  <span className="material-symbols-outlined">archive</span>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger button"
                  onClick={() => deleteNote(note.id)}
                >
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
            </div>
            <p className="card-text pb-1">
              {note.body && note.body.substr(0, 90) + "..."}
            </p>
            <small>
              Last modified{" "}
              {new Date(note.lastModified).toLocaleDateString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        </div>
      ));
    }
  };

  const showArchivedNotes = () => {
    if (!archivedNotes) {
      return (
        <div className="mt-3 d-flex justify-content-center">
          <h4>Empty</h4>
        </div>
      );
    } else {
      return archivedNotes.map((note) => (
        <div
          key={uuid()}
          className={`sidebar-note-card card mt-2 ${
            note.id === activeNote && "active"
          }`}
          onClick={() => setActiveNote(note.id)}
        >
          <div className="card-body">
            <div className="sidebar-note-header d-flex justify-content-between">
              <h5 className="card-title">{note.title}</h5>
              <div className="button-group d-flex">
                <button
                  type="button"
                  className="btn btn-outline-dark button me-2"
                  onClick={() => unarchiveNote(note.id)}
                >
                  <span className="material-symbols-outlined">archive</span>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger button"
                  onClick={() => deleteNote(note.id)}
                >
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
            </div>
            <p className="card-text">
              {note.body && note.body.substr(0, 90) + "..."}
            </p>
            <small>
              Last modified{" "}
              {new Date(note.lastModified).toLocaleDateString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        </div>
      ));
    }
  };
  return (
    <div className="side-card shadow p-3 me-4 bg-body rounded">
      <div className="side-header">
        <div
          className="btn-group"
          role="group"
          aria-label="Button group with nested dropdown"
        >
          <button
            type="button"
            className={`btn btn-outline-dark ${typeOfNote && "active-button"}`}
            onClick={() => setTypeOfNote(true)}
          >
            Active Notes
          </button>
          <button
            type="button"
            className={`btn btn-outline-dark ${!typeOfNote && "active-button"}`}
            onClick={() => setTypeOfNote(false)}
          >
            Archived
          </button>
          <button
            type="button"
            className="btn btn-outline-dark d-flex alig-items-center"
            onClick={() => {
              setShowEdit(true);
              setShowMain(false);
            }}
          >
            <span className="material-symbols-outlined">edit</span>
          </button>
          <div className="btn-group" role="group">
            <button
              id="btnGroupDrop1"
              type="button"
              className="btn btn-outline-dark dropdown-toggle d-flex align-items-center"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="material-symbols-outlined">sell</span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
              <li>Example 1</li>
              <li>Dropdown link</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="card mt-2 d-flex justify-content-center align-items-center add-button"
        onClick={onAddNote}
      >
        <span className="material-symbols-outlined">add</span>
      </div>
      <div className="sidebar-notes pe-1">
        {typeOfNote ? showActiveNotes() : showArchivedNotes()}
      </div>
    </div>
  );
}

export default Sidebar;
