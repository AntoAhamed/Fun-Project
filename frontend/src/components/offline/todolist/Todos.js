import React from 'react'
import Todo from './Todo'
import todo_img from '../../../assets/todo.jpeg'

function Todos(props) {
    return (
        <div className='rounded p-4 m-2 feature-card' style={{ background: '#d6f5d6' }}>
            {props.todos.length === 0 ? "No more todos" : props.todos.map((todo) => {
                return <Todo key={todo.sno} todo={todo} onDelete={props.onDelete} />
            })}
        </div>
    )
}

export default Todos
