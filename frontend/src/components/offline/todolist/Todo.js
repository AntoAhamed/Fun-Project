import React from 'react'

function Todo(props) {
  const todoStyle = {
    
  }
  return (
    <div className='container text-center border rounded my-3 py-3' style={todoStyle}>
      <h1 className='card-title'>{props.todo.title}</h1>
      <p className='card-text'>{props.todo.desc}</p>
      <button className="btn btn-danger btn-sm" type="button" onClick={() => props.onDelete(props.todo)}>Delete</button>
    </div>
  )
}

export default Todo
