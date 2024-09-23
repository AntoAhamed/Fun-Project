import React, { useState, useEffect } from 'react';
import stopwatch_img from '../../../assets/stopwatch.jpeg'

const Stopwatch = () => {
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
                <div className='col-md-6 image-container'>

                </div>
                <div className='col-md-6 text-container'>
                    <div className='border border-5 rounded text-center feature-card'>
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
