import React from 'react'
import Todo from './Todo'

function Todos(props) {
    return (
        <div className='container my-3'>
            <h1 className='text-center'><b>Todos List</b></h1>
            {props.todos.length === 0 ? "No more todos" : props.todos.map((todo) => {
                return <Todo key={todo.sno} todo={todo} onDelete={props.onDelete} />
            })}
        </div>
    )
}

export default Todos
