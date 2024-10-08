import React, { useEffect } from 'react'
import Alarm from './toolbox/alarm/Alarm';
import Stopwatch from './toolbox/stopwatch/Stopwatch';
import Timer from './toolbox/timer/Timer';
import Calculator from './toolbox/calculator/Calculator';
import Calendar from './toolbox/calendar/Calendar';
import Quote from './toolbox/quote/Quote'
import Joke from './toolbox/joke/Joke'
import { useNavigate } from 'react-router-dom';

function Home(props) {
  const { mode } = props;

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
      <div className='row mb-5'>
        <div className={`col text-center p-5`} style={{background: `${mode === "light" ? "#bed4e9" : "#0d1a26"}`}}>
          <h1 className='fw-bold mt-4 mb-4'>{'<'}Welcome To ToolBox{' />'}</h1>
          <p>Use things, play games and unlock features.</p>
        </div>
      </div >
      <div className='row p-3 mb-4'>
        <div className={`container-fluid toolbox ${mode === "dark" && "border border-secondary"} rounded p-4`} style={{ background: `${mode === "light" ? "#94d78a" : ""}` }}>
          <div className='row mb-2'>
            <div className='col'>
              <h3 className='fs-3 fw-bold'>ToolBox Kit Pack</h3>
              <hr />
            </div>
          </div>
          <div className='row mb-3'>
            <Calendar mode={mode} />
          </div>
          <div className='row mb-3'>
            <div className='col-md-4' >
              <div className="accordion border-0" id="accordionExample">
                <div className="accordion-item border-0" style={{background: `${mode === "light" ? "#bed4e9" : "#0d1a26"}`}}>
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                      Alarm
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                    <div className="accordion-body">
                      <Alarm time={props.time} mode={mode} alarmTime={props.alarmTime} setAlarmTime={props.setAlarmTime} message={props.message} setMessage={props.setMessage} resetAlarm={props.resetAlarm} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className="accordion border-0" id="accordionExample">
                <div className="accordion-item border-0" style={{background: `${mode === "light" ? "#bed4e9" : "#0d1a26"}`}}>
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
                      Stopwatch
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show">
                    <div className="accordion-body">
                      <Stopwatch mode={mode} time={props.timeOfStopwatch} formatTime={props.formatTime} startStopwatch={props.startStopwatch} isRunning={props.isRunning} stopStopwatch={props.stopStopwatch} resetStopwatch={props.resetStopwatch} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className="accordion border-0" id="accordionExample">
                <div className="accordion-item border-0" style={{background: `${mode === "light" ? "#bed4e9" : "#0d1a26"}`}}>
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="true" aria-controls="panelsStayOpen-collapseThree">
                      Timer
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse show">
                    <div className="accordion-body">
                      <Timer mode={mode} time={props.timeOfTimer} setTime={props.setTimeOfTimer} formatTime={props.formatTimeOfTimer} startTimer={props.startTimer} isRunning={props.isTimerRunning} stopTimer={props.stopTimer} resetTimer={props.resetTimer} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row mb-3'>
            <div className='col-md-6 d-flex flex-column text-center my-3'>
              <h4 className='fs-4 fw-bold mb-5 text-decoration-underline'>Your Things</h4>
              <div className={`fs-3 fw-bold ${mode === "dark" && "border border-secondary"} rounded p-4 my-3 bg-${mode === "light" ? "light" : ""}`}>Notes</div>
              <div className={`fs-3 fw-bold ${mode === "dark" && "border border-secondary"} rounded p-4 my-3 bg-${mode === "light" ? "light" : ""}`}>Todos</div>
              <div className={`fs-3 fw-bold ${mode === "dark" && "border border-secondary"} rounded p-4 my-3 bg-${mode === "light" ? "light" : ""}`}>Reminders</div>
            </div>
            <div className='col-md-6'>
              <div className="accordion border-0" id="accordionExample">
                <div className="accordion-item border-0" style={{background: `${mode === "light" ? "#bed4e9" : "#0d1a26"}`}}>
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="true" aria-controls="panelsStayOpen-collapseFour">
                      Calculator
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse show">
                    <div className="accordion-body">
                      <Calculator mode={mode} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`row bg-${mode === "light" && mode} py-3 mb-3`} style={{background: `${mode === "dark" && "#0d1a26"}`}}>
        <div className='col-md-6 mb-2'>
          <Quote mode={mode} />
        </div>
        <div className='col-md-6'>
          <Joke mode={mode} />
        </div>
      </div>
    </div >
  )
}

export default Home
