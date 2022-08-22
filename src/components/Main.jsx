import React from 'react'

function Main({ actNote }) {
  
  if(!actNote) return (
    <div className='main-card shadow p-3 bg-body rounded d-flex justify-content-center align-items-center'>
      <h1>No Note Selected!</h1>
    </div>
  )
  
  return (
    <div className='main-card shadow p-3 bg-body rounded'>
        <div className='note-header pb-2 ps-1'>
        <h1 className='note-title'>{actNote.title}</h1>
        </div>
        <div className='note-preview pt-2 ps-1 pe-2 mt-2'>{actNote.body}</div> 
    </div>
  )
}

export default Main;
