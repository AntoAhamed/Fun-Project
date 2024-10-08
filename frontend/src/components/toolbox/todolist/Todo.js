import React from 'react'

function Todo(props) {
  return (
    <div className="card border-top-0 border-end-0 border-bottom-0 mb-4" style={{ background: 'aliceblue' }}>
      <div className="card-body m-2">
        <h4 className="card-title fw-semibold">{props.todo.title} (<span className='fs-6'>{props.todo.priority}</span>)</h4>
        <p className="card-text">{props.todo.desc}</p>
        <p className="card-text">
          <small className="text-body-secondary">
            <button type='button' className='btn btn-sm btn-danger rounded-pill' onClick={() => props.onDelete(props.todo)} >
              remove
            </button>
          </small>
        </p>
      </div>
    </div>
  )
}

export default Todo
