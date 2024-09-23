import React from 'react'
import { useNavigate } from 'react-router-dom';

function EditNotes(props) {
    const navigate = useNavigate();

    const { newTitle, newDesc, setNewTitle, setNewDesc, save, clear, date, time } = props;

    const onSave = (e) => {
        save(e);

        if (newTitle.length > 0 && newDesc.length > 0) {
            navigate('/notes');
        }
    }

    const onCancel = () => {
        navigate('/notes');
    }

    return (
        <div className='container mt-2'>
            <div className="row mb-2">
                <div className="col-3 text-center fs-6">
                    <b>Date: {date}</b>
                </div>
                <div className="col-6 text-center fs-3">
                    <b>Edit Notes</b>
                </div>
                <div className="col-3 text-center fs-6">
                    <b>Time: {time}</b>
                </div>
                <hr />
            </div>
            <div className="row mb-2">
                <div className='col-6 border border-2 border-top-0 border-start-0 border-bottom-0'>
                        <div className='rounded p-4' style={{background: '#d6f5d6'}}>
                            <h2 className='fs-2 fw-bold'>Your Note Summary</h2>
                            <p>{(newTitle.split(/\s+/).filter((element) => { return element.length !== 0 }).length) + (newDesc.split(/\s+/).filter((element) => { return element.length !== 0 }).length)} words and {(newTitle.length) + (newDesc.length)} characters</p>
                            <p>{0.008 * newDesc.split(" ").length} munites will take to read the note</p>
                            <h2 className='fs-2 fw-bold'>Preview</h2>
                            <h4>{newTitle.length > 0 ? newTitle : "Write something to preview"}</h4>
                            <p>{newDesc.length > 0 ? newDesc : "Write something to preview"}</p>
                        </div>
                </div>
                <div className='col-6'>
                    <form action='' method='' className='p-4 rounded' style={{background: 'aliceblue'}}>
                        <input className='form-control mb-3' type='text' value={newTitle} onChange={(e) => { setNewTitle(e.target.value) }} />
                        <textarea className='form-control mb-3' rows={10} value={newDesc} onChange={(e) => { setNewDesc(e.target.value) }} />
                        <div>
                            <button className='btn btn-success rounded-pill mb-2' onClick={onSave}>Save</button>
                            <button className='btn btn-warning rounded-pill mx-2 mb-2' onClick={clear}>Clear</button>
                            <button className='btn btn-dark rounded-pill mb-2' onClick={onCancel}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditNotes
