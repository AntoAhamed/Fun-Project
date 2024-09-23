import React from 'react'
import Note from './Note'

function Notes(props) {
    const { notes, deleteNotes, editNotes, time, date } = props;
    let pb = notes.length;

    return (
        <div className='container mt-2' style={{/*pb > 2 ? { paddingBottom: "5rem" } : { paddingBottom: "27rem" }*/}}>
            <div className="row mb-2">
                <div className="col-3 text-center fs-6">
                    <b>Date: {date}</b>
                </div>
                <div className="col-6 text-center fs-3">
                    <b>Your Notes</b>
                </div>
                <div className="col-3 text-center fs-6">
                    <b>Time: {time}</b>
                </div>
                <hr />
            </div>
            <div className="row rounded mb-2" style={{background: '#d6f5d6'}}>
                {notes.length === 0 ? <p className='p-2'>No notes to show.</p>: notes.map((note) => {
                    return <Note key={note.sno} note={note} title={note.title} desc={note.desc} date={note.date} time={note.time} deleteNotes={deleteNotes} editNotes={editNotes} />
                })}
            </div>
        </div>
    )
}

export default Notes
