import React from 'react'
import Profile from './profile'

function dashboard(props) {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-5'>
                    <Profile initToolbox={props.initToolbox} />
                </div>
                <div className='col-md-7'>
                    <div className='row border rounded my-3 px-5 pt-3 pb-5 text-dark' style={{background: "#94d78a"}}>
                        <h1 className='fs-2 fw-bold'>Dashboard</h1>
                        <hr />
                        <div className='col-md-4 mb-2'>
                            <div className='d-flex justify-content-around rounded p-3' style={{background: "aliceblue"}}>
                                <div className='fs-3'>Notes</div>
                                <div className='fs-3'>{props.initToolbox.notes?.length}</div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-2'>
                            <div className='d-flex justify-content-around rounded p-3' style={{background: "aliceblue"}}>
                                <div className='fs-3'>Todos</div>
                                <div className='fs-3'>{props.initToolbox.todos?.length}</div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-2'>
                            <div className='d-flex justify-content-around rounded p-3' style={{background: "aliceblue"}}>
                                <div className='fs-3'>Reminders</div>
                                <div className='fs-3'>{props.initToolbox.reminders?.length}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default dashboard
