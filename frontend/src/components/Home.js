import React from 'react'
import Alarm from './offline/alarm/Alarm';
import Stopwatch from './offline/stopwatch/Stopwatch';
import Timer from './offline/timer/Timer';
import Calculator from './offline/calculator/Calculator';
import Calendar from './offline/calendar/Calendar';

function Home(props) {
  const { mode } = props;

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className={`col bg-${mode === "light" ? "secondary" : ""} text-center p-5`}>
          <h1 className='fw-bold mt-4 mb-4'>{'<'}Welcome To ToolBox{' />'}</h1>
          <p className='text-light'>You can get things by facing amazing challanges</p>
        </div>
        {/*<div className=''>
          <p className={`border rounded-pill px-4 py-2 m-2 fs-5 bg-${mode === "light" ? "light" : ""}`}>Alarm</p>
          <p className={`border rounded-pill px-4 py-2 m-2 fs-5 bg-${mode === "light" ? "light" : ""}`}>Clock</p>
          <p className={`border rounded-pill px-4 py-2 m-2 fs-5 bg-${mode === "light" ? "light" : ""}`}>Stopwatch</p>
          <p className={`border rounded-pill px-4 py-2 m-2 fs-5 bg-${mode === "light" ? "light" : ""}`}>Timer</p>
          <p className={`border rounded-pill px-4 py-2 m-2 fs-5 bg-${mode === "light" ? "light" : ""}`}>Calculator</p>
          <p className={`border rounded-pill px-4 py-2 m-2 fs-5 bg-${mode === "light" ? "light" : ""}`}>Timer</p>
          <p className={`border rounded-pill px-4 py-2 m-2 fs-5 bg-${mode === "light" ? "light" : ""}`}>Notepad</p>
          <p className={`border rounded-pill px-4 py-2 m-2 fs-5 bg-${mode === "light" ? "light" : ""}`}>Todo List</p>
          <p className={`border rounded-pill px-4 py-2 m-2 fs-5 bg-${mode === "light" ? "light" : ""}`}>CGPA Calculator</p>
          <p className={`border rounded-pill px-4 py-2 m-2 fs-5 bg-${mode === "light" ? "light" : ""}`}>Currency Converter</p>
          <p className={`border rounded-pill px-4 py-2 m-2 fs-5 bg-${mode === "light" ? "light" : ""}`}>Weather</p>
          <p className={`border rounded-pill px-4 py-2 m-2 fs-5 bg-${mode === "light" ? "light" : ""}`}>Joke</p>
          <p className={`border rounded-pill px-4 py-2 m-2 fs-5 bg-${mode === "light" ? "light" : ""}`}>Guess Number</p>
          <p className={`border rounded-pill px-4 py-2 m-2 fs-5 bg-${mode === "light" ? "light" : ""}`}>Quiz</p>
          <p className={`border rounded-pill px-4 py-2 m-2 fs-5 bg-${mode === "light" ? "light" : ""}`}>Roke Paper Scissors</p>
          <p className={`border rounded-pill px-4 py-2 m-2 fs-5 bg-${mode === "light" ? "light" : ""}`}>Puzzle</p>
          <p className={`border rounded-pill px-4 py-2 m-2 fs-5 bg-${mode === "light" ? "light" : ""}`}>Tic Tac Toe</p>
        </div>*/}
      </div >
      <div className='row p-3'>
        <div className={`container-fluid toolbox ${mode === "dark" && "border border-secondary"} rounded p-4`} style={{background: `${mode === "light" ? "#94d78a" : ""}`}}>
          <div className='row mb-2'>
            <div className='col'>
              <h3 className='fs-3 fw-bold'>ToolBox Kit Pack</h3>
              <hr />
            </div>
          </div>
          <div className='row mb-3'>
            <Calendar />
          </div>
          <div className='row mb-3'>
            <div className='col-md-4' >
              <div class="accordion" id="accordionExample">
                <div class="accordion-item bg-secondary">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Alarm
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <Alarm time={props.time} mode={mode} alarmTime={props.alarmTime} setAlarmTime={props.setAlarmTime} message={props.message} setMessage={props.setMessage} resetAlarm={props.resetAlarm} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div class="accordion" id="accordionExample">
                <div class="accordion-item bg-secondary">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Stopwatch
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <Stopwatch mode={mode} time={props.timeOfStopwatch} formatTime={props.formatTime} startStopwatch={props.startStopwatch} isRunning={props.isRunning} stopStopwatch={props.stopStopwatch} resetStopwatch={props.resetStopwatch} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div class="accordion" id="accordionExample">
                <div class="accordion-item bg-secondary">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Timer
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
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
              <div className={`fs-3 fw-bold border border-3 border-secondary rounded p-4 my-3 bg-${mode === "light" ? "light" : ""}`}>Notes</div>
              <div className={`fs-3 fw-bold border border-3 border-secondary rounded p-4 my-3 bg-${mode === "light" ? "light" : ""}`}>Todos</div>
              <div className={`fs-3 fw-bold border border-3 border-secondary rounded p-4 my-3 bg-${mode === "light" ? "light" : ""}`}>Reminder</div>
            </div>
            <div className='col-md-6'>
              <div class="accordion" id="accordionExample">
                <div class="accordion-item bg-secondary">
                  <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Calculator
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <Calculator mode={mode} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Home
