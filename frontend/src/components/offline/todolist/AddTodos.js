import React, { useEffect } from 'react'
import Todos from './Todos'
import { useNavigate } from 'react-router-dom';

function AddTodos(props) {
    const navigate = useNavigate()

    const authCheck = () => {
        const toolbox = JSON.parse(localStorage.getItem("toolbox"));

        if (toolbox.auth.token !== '' && toolbox.auth.isToken === '') {
            navigate('/unlock')
        }
    }

    useEffect(() => {
        authCheck()
    }, [])

    return (
        <div className='container-fluid'>
            <div className="row mb-2">
                <div className="col-md text-center fs-3 fw-bold">Todos List</div>
                <hr />
            </div>
            <div className='row mb-2'>
                <div className='col-md-6 border border-secondary border-top-0 border-start-0 border-bottom-0'>
                    <Todos todos={props.todos} onDelete={props.onDelete} />
                </div>
                <div className='col-md-6'>
                    <div className='p-4 m-2 rounded feature-card' style={{ background: 'aliceblue' }}>
                        <form className='py-4 px-4 border rounded border-2'>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="title" value={props.title} onChange={(e) => { props.setTitle(e.target.value) }} placeholder='Enter Todo Title' />
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control" id="desc" rows='5' value={props.desc} onChange={(e) => { props.setDesc(e.target.value) }} placeholder='Enter Todo Description' />
                            </div>
                            <button type="button" className="btn btn-success rounded-pill" onClick={props.addTodo}>Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTodos
