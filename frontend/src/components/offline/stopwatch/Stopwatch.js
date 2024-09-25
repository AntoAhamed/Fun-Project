import React, { useState, useEffect } from 'react';
import clock_img from '../../../assets/clock.jpeg'

const Stopwatch = (props) => {
    const {mode} = props;
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    const startStopwatch = () => setIsRunning(true);
    const stopStopwatch = () => setIsRunning(false);
    const resetStopwatch = () => {
        setIsRunning(false);
        setTime(0);
    };

    return (
        <div className='container-fluid'>
            <div className='row'>
            <div className='col-md-6 d-flex justify-content-center align-items-center'>
                    <img src={clock_img} alt='' className='rounded h-75 w-75' />
                </div>
                <div className='col-md-6 text-container'>
                    <div className={`border border-5 rounded text-center feature-card bg-${mode}`}>
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

const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

export default Stopwatch;
