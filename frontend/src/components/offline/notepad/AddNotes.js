import React from 'react'

function AddNotes(props) {
  const { title, desc, setTitle, setDesc, addNotes, clear } = props;

  return (
    <div className='container-fluid border border-top-0 border-bottom-0'>
      <div className="row mb-2">
        <div className="col-md text-center fs-3 fw-bold">Add Notes</div>
        <hr />
      </div>
      <div className="row mb-2">
        <div className="col-md-6 border border-secondary border-top-0 border-start-0 border-bottom-0">
          <div className="rounded p-4 m-2 feature-card text-dark" style={{ background: '#d6f5d6' }}>
            <h2 className="fs-2 fw-bold">Your Note Summary</h2>
            <p>{(title.split(/\s+/).filter((element) => { return element.length !== 0 }).length) + (desc.split(/\s+/).filter((element) => { return element.length !== 0 }).length)} words and {(title.length) + (desc.length)} characters</p>
            <p>{0.008 * desc.split(" ").length} munites will take to read the note</p>
            <h2 className='fs-2 fw-bold'>Preview</h2>
            <h4>{title.length > 0 ? title : "Write something on title to preview"}</h4>
            <p>{desc.length > 0 ? desc : "Write something on description to preview"}</p>
          </div>
        </div>
        <div className='col-md-6'>
          <form action='' method='' className='p-4 m-2 rounded feature-card' style={{ background: 'aliceblue' }}>
            <input className='form-control mb-3' type='text' value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder='Enter Note Title' />
            <textarea className='form-control mb-3' rows={10} value={desc} onChange={(e) => { setDesc(e.target.value) }} placeholder='Enter Note Description' />
            <div>
              <button className='btn btn-success rounded-pill' onClick={addNotes}>Add</button>
              <button className='btn btn-warning rounded-pill mx-2' onClick={clear}>Clear</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddNotes
