import React, { useEffect } from 'react'
import Profile from './Profile'
import { useNavigate } from 'react-router-dom';

function Dashboard(props) {
    const navigate = useNavigate()

    const authCheck = () => {
        const toolbox = JSON.parse(localStorage.getItem("toolbox"));

        if (toolbox?.auth?.token !== '' && toolbox?.auth?.isToken === '') {
            navigate('/unlock')
        }
    }

    useEffect(() => {
        authCheck()
    }, [])

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-5'>
                    <Profile initToolbox={props.initToolbox} coins={props.coins} setCoins={props.setCoins} isAvailable={props.isAvailable} setIsAvailable={props.setIsAvailable} auth={props.auth} setAuth={props.setAuth} resetProfile={props.resetProfile} />
                </div>
                <div className='col-md-7'>
                    <div className='row border rounded my-3 px-5 pt-3 pb-3 text-dark' style={{background: "#94d78a"}}>
                        <h1 className='fs-2 fw-bold'>Dashboard</h1>
                        <hr />
                        <div className='col-md-4 mb-3'>
                            <div className='d-flex justify-content-around rounded px-3 py-5' style={{background: "aliceblue"}}>
                                <div className='fs-3'>Alarm</div>
                                <div className='fs-3'>{props.alarmTime === "" ? "Off" : "On"}</div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-3'>
                            <div className='d-flex justify-content-around rounded px-3 py-5' style={{background: "aliceblue"}}>
                                <div className='fs-3'>Stopwatch</div>
                                <div className='fs-3'>{props.isRunning ? "On" : "Off"}</div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-3'>
                            <div className='d-flex justify-content-around rounded px-3 py-5' style={{background: "aliceblue"}}>
                                <div className='fs-3'>Timer</div>
                                <div className='fs-3'>{props.isTimerRunning ? "On" : "Off"}</div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-3'>
                            <div className='d-flex justify-content-around rounded px-3 py-5' style={{background: "aliceblue"}}>
                                <div className='fs-3'>Notes</div>
                                <div className='fs-3'>{props.initToolbox.notes?.length}</div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-3'>
                            <div className='d-flex justify-content-around rounded px-3 py-5' style={{background: "aliceblue"}}>
                                <div className='fs-3'>Todos</div>
                                <div className='fs-3'>{props.initToolbox.todos?.length}</div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-3'>
                            <div className='d-flex justify-content-around rounded px-3 py-5' style={{background: "aliceblue"}}>
                                <div className='fs-3'>Reminders</div>
                                <div className='fs-3'>{props.initToolbox.reminders?.length}</div>
                            </div>
                        </div>
                    </div>
                    <p className='bg-warning text-dark p-2'><b>Reward System:</b> You got 1000 Pt as starting reward. You can get reward by playing the 'Guess number' and 'Rock Paper Scissors'. By winning you'll get 5 Pt and by loosing you'll lose 1.25 Pt.</p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
