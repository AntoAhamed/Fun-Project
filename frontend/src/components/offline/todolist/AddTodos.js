import React from 'react'

function AddTodos(props) {
    return (
        <div className='container my-3'>
            <h1 className='text-center'><b>Add Todo</b></h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" value={props.title} onChange={(e) => { props.setTitle(e.target.value) }} placeholder='Enter title here' />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <textarea className="form-control" id="desc" rows='5' value={props.desc} onChange={(e) => { props.setDesc(e.target.value) }} placeholder='Enter description here' />
                </div>
                <button type="button" className="btn btn-success btn-sm" onClick={props.addTodo}>Add</button>
            </form>
        </div>
    )
}

export default AddTodos
