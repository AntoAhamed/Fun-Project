import React, { useState, useEffect } from 'react';
import timer_img from '../../../assets/timer.jpeg'

const Timer = () => {
    const [time, setTime] = useState(0);  // Time in seconds
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (isRunning && time > 0) {
            timer = setInterval(() => {
                setTime(time => time - 1);  // Decrease time by 1 second
            }, 1000);
        } else if (time === 0) {
            setIsRunning(false);
        }
        return () => clearInterval(timer);
    }, [isRunning, time]);

    const startTimer = () => {
        if (time > 0) {
            setIsRunning(true);
        }
    };

    const stopTimer = () => {
        setIsRunning(false);
    };

    const resetTimer = () => {
        setTime(0);
        setIsRunning(false);
    };

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-6 image-container'>

                </div>
                <div className='col-md-6 text-container'>
                    <div className='border border-5 rounded text-center feature-card'>
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

// Helper function to format the time in mm:ss
const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

export default Timer;
