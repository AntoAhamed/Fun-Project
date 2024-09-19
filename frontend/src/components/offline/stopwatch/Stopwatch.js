import React, { useState, useEffect } from 'react';

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
        <div style={styles.container}>
            <h2>Stopwatch</h2>
            <div style={styles.timeDisplay}>{formatTime(time)}</div>
            <button onClick={startStopwatch} style={styles.button} disabled={isRunning}>
                Start
            </button>
            <button onClick={stopStopwatch} style={styles.button}>
                Stop
            </button>
            <button onClick={resetStopwatch} style={styles.button}>
                Reset
            </button>
        </div>
    );
};

const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

const styles = {
    container: {
        textAlign: 'center',
        margin: '50px auto',
        padding: '20px',
        width: '250px',
        border: '2px solid #ccc',
        borderRadius: '10px',
    },
    timeDisplay: {
        fontSize: '48px',
        marginBottom: '20px',
    },
    button: {
        margin: '5px',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
    },
};

export default Stopwatch;
