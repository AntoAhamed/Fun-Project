import React from 'react'
import { Link } from 'react-router-dom'

function note(props) {
    const { note, title, desc, date, time, deleteNotes, editNotes } = props;

    return (
        <div className="col-sm-6 mb-2 mb-sm-0">
            <div className="card border-top-0 border-end-0 border-bottom-0 m-4" style={{background: 'aliceblue'}}>
                <div className="card-body m-2">
                    <h4 className="card-title fw-semibold">{title}</h4>
                    <p className="card-text">{desc}</p>
                    <p className="card-text">
                        <small className="text-body-secondary d-flex justify-content-between">
                            <div>
                                On {date} at {time}
                            </div>
                            <div>
                                <Link to="/editNotes" onClick={() => { editNotes(note) }}>
                                    <button type='button' className='btn btn-sm btn-primary rounded-pill mx-4 mb-2'>
                                        edit
                                    </button>
                                </Link>
                                <button type='button' className='btn btn-sm btn-danger rounded-pill mx-4 mb-2' onClick={() => { deleteNotes(note) }} >
                                    remove
                                </button>
                            </div>
                        </small>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default note
