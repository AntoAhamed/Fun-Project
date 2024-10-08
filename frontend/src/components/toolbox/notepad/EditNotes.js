import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function EditNotes(props) {
    const navigate = useNavigate();

    const { newTitle, newDesc, setNewTitle, setNewDesc, save, clear, time } = props;

    const onSave = (e) => {
        save(e);

        if (newTitle.length > 0 && newDesc.length > 0) {
            navigate('/notes');
        }
    }

    const onCancel = () => {
        navigate('/notes');
    }

    const authCheck = () => {
        const toolbox = JSON.parse(localStorage.getItem("toolbox"));

        if (toolbox?.auth?.token !== '' && toolbox?.auth?.isToken === '') {
            navigate('/unlock')
        }
    }

    useEffect(() => {
        authCheck()
    }, [])

    return (
        <div className='container-fluid border border-top-0 border-bottom-0'>
            <div className="row mb-2">
                <div className="col-md text-center fs-3 fw-bold">Edit Notes</div>
                <hr />
            </div>
            <div className="row mb-2">
                <div className='col-md-6 border border-secondary border-2 border-top-0 border-start-0 border-bottom-0'>
                    <div className='rounded p-4 m-2 feature-card text-dark' style={{ background: '#d6f5d6' }}>
                        <h2 className='fs-2 fw-bold'>Your Note Summary</h2>
                        <p>{(newTitle.split(/\s+/).filter((element) => { return element.length !== 0 }).length) + (newDesc.split(/\s+/).filter((element) => { return element.length !== 0 }).length)} words and {(newTitle.length) + (newDesc.length)} characters</p>
                        <p>{0.008 * newDesc.split(" ").length} munites will take to read the note</p>
                        <h2 className='fs-2 fw-bold'>Preview</h2>
                        <h4>{newTitle.length > 0 ? newTitle : "Write something to preview"}</h4>
                        <p>{newDesc.length > 0 ? newDesc : "Write something to preview"}</p>
                    </div>
                </div>
                <div className='col-md-6'>
                    <form action='' method='' className='p-4 m-2 rounded feature-card' style={{ background: 'aliceblue' }}>
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
