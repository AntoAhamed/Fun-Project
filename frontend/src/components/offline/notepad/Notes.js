import React from 'react'
import Note from './Note'

function Notes(props) {
    const { notes, deleteNotes, editNotes } = props;
    let pb = notes.length;

    return (
        <div className='container-fluid' style={pb > 2 ? { paddingBottom: "" } : { paddingBottom: "45vh" }}>
            <div className="row mb-2">
                <div className="col-md text-center fs-3 fw-bold">Your Notes</div>
                <hr />
            </div>
            <div className="row rounded m-2" style={{ background: '#d6f5d6' }}>
                {notes.length === 0 ? <p className='p-2 text-dark'>No notes to show.</p> : notes.map((note) => {
                    return <Note key={note.sno} note={note} title={note.title} desc={note.desc} date={note.date} time={note.time} deleteNotes={deleteNotes} editNotes={editNotes} />
                })}
            </div>
        </div>
    )
}

export default Notes
