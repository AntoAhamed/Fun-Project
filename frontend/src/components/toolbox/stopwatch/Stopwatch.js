import React, { useState, useEffect } from 'react';

const Stopwatch = (props) => {
    const { mode, time, formatTime, startStopwatch, isRunning, stopStopwatch, resetStopwatch } = props;

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col text-container'>
                    <div className={`border border-5 rounded text-center feature-card bg-${mode} text-${mode === "dark" ? "light" : "dark"}`}>
                        <h2 className='fs-1 fw-bold'>Stopwatch</h2>
                        <div className='fs-3'>{formatTime(time)}</div>
                        <button className='btn btn-primary rounded-pill m-2' onClick={startStopwatch} disabled={isRunning}>
                            Start
                        </button>
                        <button className='btn btn-primary rounded-pill m-2' onClick={stopStopwatch}>
                            Stop
                        </button>
                        <button className='btn btn-primary rounded-pill m-2' onClick={resetStopwatch}>
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stopwatch;
