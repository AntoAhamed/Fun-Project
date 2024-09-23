import React from 'react'
import Todo from './Todo'
import todo_img from '../../../assets/todo.jpeg'

function Todos(props) {
    return (
        <div className=''>
            <div className='row'>
                <div className='col-6'>
                    <img src={todo_img} alt='' width={'100%'} />
                </div>
                <div className='col-6 p-4'>
                    <h2 className='fs-2 fw-bold text-center'>Your Todos</h2>
                    {props.todos.length === 0 ? "No more todos" : props.todos.map((todo) => {
                        return <Todo key={todo.sno} todo={todo} onDelete={props.onDelete} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Todos
