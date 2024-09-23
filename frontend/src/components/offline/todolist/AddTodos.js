import React from 'react'
import todo_img from '../../../assets/todo.jpeg'

function AddTodos(props) {
    return (
        <div className=''>
            <div className='row'>
                <div className='col-6'>
                    <img src={todo_img} alt='' width={'100%'} />
                </div>
                <div className='col-6 p-4'>
                    <h2 className='fs-2 fw-bold text-center'>Add Todos</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" id="title" value={props.title} onChange={(e) => { props.setTitle(e.target.value) }} placeholder='Enter title here' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="desc" className="form-label">Description</label>
                            <textarea className="form-control" id="desc" rows='5' value={props.desc} onChange={(e) => { props.setDesc(e.target.value) }} placeholder='Enter description here' />
                        </div>
                        <button type="button" className="btn btn-success rounded-pill" onClick={props.addTodo}>Add</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddTodos
