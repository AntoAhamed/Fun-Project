import React, { useState, useEffect } from 'react';

const Timer = (props) => {
    const { mode, time, setTime, formatTime, startTimer, isRunning, stopTimer, resetTimer } = props;

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col text-container'>
                    <div className={`border border-5 rounded text-center feature-card bg-${mode} text-${mode === "dark" ? "light" : "dark"}`}>
                        <h2 className='fs-1 fw-bold'>Timer</h2>
                        <div className='fs-3'>{formatTime(time)}</div>
                        <input
                            className='form-control mb-2 text-center'
                            type="number"
                            placeholder="Set time in seconds"
                            value={time}
                            onChange={(e) => setTime(parseInt(e.target.value))}
                            disabled={isRunning}
                            min='0'
                        />
                        <div>
                            <button className='btn btn-primary rounded-pill m-2' onClick={startTimer} disabled={isRunning || time === 0}>
                                Start
                            </button>
                            <button className='btn btn-primary rounded-pill m-2' onClick={stopTimer}>
                                Stop
                            </button>
                            <button className='btn btn-primary rounded-pill m-2' onClick={resetTimer}>
                                Reset
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timer;
