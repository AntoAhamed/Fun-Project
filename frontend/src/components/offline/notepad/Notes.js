import React from 'react'
import Note from './Note'

function Notes(props) {
    const { notes, deleteNotes, editNotes, time, date } = props;
    let pb = notes.length;

    return (
        <div className='container' style={pb > 2 ? { paddingBottom: "5rem" } : { paddingBottom: "27rem" }}>
            <div className="row">
                <div className="col-3 text-center" style={{ paddingTop: "16px" }}>
                    <b>Date: {date}</b>
                </div>
                <div className="col-6 text-center" style={{ fontSize: "32px" }}>
                    <b>Your Notes</b>
                </div>
                <div className="col-3 text-center" style={{ paddingTop: "16px" }}>
                    <b>Time: {time}</b>
                </div>
            </div>
            <div id='note' className="row">
                {notes.length === 0 ? "No more notes" : notes.map((note) => {
                    return <Note key={note.sno} note={note} title={note.title} desc={note.desc} date={note.date} time={note.time} deleteNotes={deleteNotes} editNotes={editNotes} />
                })}
            </div>
        </div>
    )
}

export default Notes
