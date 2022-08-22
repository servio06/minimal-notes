import React from "react";
import {useState} from 'react';
function EditNote({activeNote, setShowEdit, setShowMain, updateNote}) {
  const onEditField = (key, value) => {
    updateNote({
      ...activeNote,
      [key]: value,
      lastModified: Date.now(),
    });
  };
  //get value from input to update the category 
  
  if(!activeNote) return (<div className="edit-note-card shadow p-3 bg-body rounded d-flex align-items-center justify-content-center"><h3>No note selected!!</h3></div>)
  return (
    <div className="container">
      <div className="edit-note-card shadow p-3 bg-body rounded">
        <div className="edit-note-header pt-2 ps-1 pb-1">
          <h1>Edit Note</h1>
          <button className="button btn btn-outline-dark" onClick={()=>{setShowMain(true); setShowEdit(false)}}>
            <span className="material-symbols-outlined" >done</span>
          </button>
        </div>
        <div className="title-input-group d-flex align-items-center pt-3">
          <h4>Title: </h4>
          <input
            type="text"
            id="title"
            className="title-input ms-2 "
            value={activeNote.title}
            onChange={(e) => onEditField("title",e.target.value)}
            autoFocus
          />
        </div>
        <div className="content-input-group pt-3">
          <h4>Content: </h4>
          <textarea
            className="note-content p-2"
            id="body"
            placeholder="Write your note here!!!:)"
            value={activeNote.body}
            onChange={(e) => onEditField("body",e.target.value)}
          ></textarea>
        </div>
        <div className="category-input-group mt-1">
          <div className="category-holder-group d-flex mb-2">
            <h4>Category: </h4>
            <div className=" ms-1 pt-1 ps-1 category-holder">
                
                  <div className="category-tag d-flex align-items-center">
                  <span className="material-symbols-outlined ">sell</span>
                  <label className="ms-1"></label>
                  <button className="close-btn">
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>
                
            </div>
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              id="category"
              className="form-control"
              placeholder="New Category"
              aria-label="New Category"
              aria-describedby="button-addon2"
              
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditNote
