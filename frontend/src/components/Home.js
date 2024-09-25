import React from 'react'

function Home(props) {
  const {mode} = props;

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className={`col-md-6 bg-${mode === "light" ? "secondary" : ""} d-flex flex-column justify-content-center align-items-center border border-top-0 border-bottom-0 border-start-0 py-5`}>
          <h1 className='fw-bold mt-4 mb-4'>{'<'}Welcome To ToolBox{' />'}</h1>
          <p className='text-light'>You can get things by facing amazing challanges</p>
        </div>
        <div className='col-md-6 p-5'>
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
        </div>
      </div>
    </div>
  )
}

export default Home
